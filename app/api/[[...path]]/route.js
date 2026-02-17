import { NextResponse } from 'next/server'

// ============================================================================
// FIGUEROA LAW GROUP - API ROUTES
// ============================================================================

// ---- BEEHIIV API HELPER ----
// Fetches posts from Beehiiv API v2 (server-side only)
// Requires environment variables:
//   BEEHIIV_API_KEY - Your Beehiiv API key (get from https://app.beehiiv.com/settings/integrations)
//   BEEHIIV_PUBLICATION_ID - Your publication ID
async function fetchBeehiivPosts(limit = 10) {
  const apiKey = process.env.BEEHIIV_API_KEY
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID

  if (!apiKey || !publicationId) {
    console.warn('Beehiiv credentials not configured. Set BEEHIIV_API_KEY and BEEHIIV_PUBLICATION_ID in .env')
    return null
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/posts?status=confirmed&order_by=publish_date&direction=desc&limit=${limit}`,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    )

    if (!response.ok) {
      console.error(`Beehiiv API error: ${response.status} ${response.statusText}`)
      return null
    }

    const data = await response.json()

    // Map Beehiiv post format to our frontend format
    const posts = (data.data || []).map((post) => {
      const publishDate = post.publish_date
        ? new Date(post.publish_date * 1000).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : ''

      // Use subtitle as excerpt, or strip HTML from content preview
      let excerpt = post.subtitle || ''
      if (!excerpt && post.content) {
        excerpt = post.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...'
      }

      // Extract category from content_tags if available
      const category = (post.content_tags && post.content_tags.length > 0)
        ? post.content_tags[0]
        : 'Legal Update'

      return {
        id: post.id,
        title: post.title || 'Untitled Post',
        excerpt,
        date: publishDate,
        category,
        url: post.web_url || '#',
        thumbnail: post.thumbnail_url || null,
      }
    })

    return posts
  } catch (error) {
    console.error('Failed to fetch Beehiiv posts:', error.message)
    return null
  }
}

// ---- BEEHIIV SUBSCRIPTION HELPER ----
async function subscribeToBeehiiv(email) {
  const apiKey = process.env.BEEHIIV_API_KEY
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID

  if (!apiKey || !publicationId) {
    console.warn('Beehiiv credentials not configured for subscription.')
    return { success: false, message: 'Newsletter service not configured yet.' }
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
        }),
      }
    )

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}))
      console.error('Beehiiv subscription error:', response.status, errData)
      return { success: false, message: 'Failed to subscribe. Please try again.' }
    }

    return { success: true, message: 'Successfully subscribed to the newsletter.' }
  } catch (error) {
    console.error('Beehiiv subscription failed:', error.message)
    return { success: false, message: 'Subscription service unavailable.' }
  }
}

// ---- FALLBACK MOCK DATA (used only when Beehiiv API is unavailable) ----
const fallbackPosts = [
  {
    id: 'fallback-1',
    title: 'Stay Tuned for Legal Insights',
    excerpt: 'Our newsletter is being set up. Soon you will find the latest immigration law updates, legal insights, and firm news right here.',
    date: '',
    category: 'FLG News',
    url: '#',
  },
]

// ---- ROUTE HANDLER ----

export async function GET(request) {
  const { pathname } = new URL(request.url)
  const path = pathname.replace('/api', '')

  // Health check
  if (path === '' || path === '/') {
    return NextResponse.json({ message: 'Figueroa Law Group API is running', status: 'ok' })
  }

  // Newsletter posts - fetches from Beehiiv API (server-side)
  if (path === '/newsletter/posts') {
    const posts = await fetchBeehiivPosts(10)

    if (posts && posts.length > 0) {
      return NextResponse.json({ posts, source: 'beehiiv' })
    }

    // Fallback if Beehiiv API is not configured or fails
    return NextResponse.json({ posts: fallbackPosts, source: 'fallback' })
  }

  return NextResponse.json({ error: 'Not found' }, { status: 404 })
}

export async function POST(request) {
  const { pathname } = new URL(request.url)
  const path = pathname.replace('/api', '')

  // Contact form submission
  if (path === '/contact') {
    try {
      const body = await request.json()
      const { name, email, phone, message } = body

      if (!name || !email || !message) {
        return NextResponse.json(
          { error: 'Name, email, and message are required' },
          { status: 400 }
        )
      }

      // ================================================================
      // TODO: EMAILJS INTEGRATION
      // ================================================================
      // To enable EmailJS integration:
      // 1. Create an account at https://www.emailjs.com
      // 2. Set up an email service (e.g., Gmail, Outlook)
      // 3. Create an email template with variables: {{name}}, {{email}}, {{phone}}, {{message}}
      // 4. Add these to your .env file:
      //    EMAILJS_SERVICE_ID=your_service_id
      //    EMAILJS_TEMPLATE_ID=your_template_id
      //    EMAILJS_PUBLIC_KEY=your_public_key
      //
      // Client-side EmailJS implementation (add to contact page):
      // import emailjs from '@emailjs/browser'
      // emailjs.send(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      //   { name, email, phone, message },
      //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      // )
      // ================================================================

      console.log('Contact form submission:', { name, email, phone, message })

      return NextResponse.json({
        success: true,
        message: 'Message received. We will get back to you soon.',
        note: 'EmailJS integration pending. Please configure EMAILJS credentials in .env'
      })
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to process contact form' },
        { status: 500 }
      )
    }
  }

  // Newsletter subscription
  if (path === '/newsletter/subscribe') {
    try {
      const body = await request.json()
      const { email } = body

      if (!email) {
        return NextResponse.json(
          { error: 'Email is required' },
          { status: 400 }
        )
      }

      // ================================================================
      // TODO: BEEHIIV SUBSCRIPTION INTEGRATION
      // ================================================================
      // To enable Beehiiv subscription:
      // 1. Get your API key from https://app.beehiiv.com/settings/integrations
      // 2. Get your Publication ID from your Beehiiv dashboard
      // 3. Add to .env:
      //    BEEHIIV_API_KEY=your_api_key
      //    BEEHIIV_PUBLICATION_ID=your_publication_id
      //
      // Implementation:
      // const response = await fetch(
      //   `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      //   {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
      //     },
      //     body: JSON.stringify({ email, reactivate_existing: true, send_welcome_email: true }),
      //   }
      // )
      // ================================================================

      console.log('Newsletter subscription:', { email })

      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to the newsletter.',
        note: 'Beehiiv integration pending. Please configure BEEHIIV credentials in .env'
      })
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      )
    }
  }

  return NextResponse.json({ error: 'Not found' }, { status: 404 })
}
