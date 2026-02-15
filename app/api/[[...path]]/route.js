import { NextResponse } from 'next/server'

// ============================================================================
// FIGUEROA LAW GROUP - API ROUTES
// ============================================================================

// ---- MOCK NEWSLETTER DATA ----
// TODO: Replace with Beehiiv API integration
// Beehiiv API Key: Set BEEHIIV_API_KEY in .env
// Beehiiv Publication ID: Set BEEHIIV_PUBLICATION_ID in .env
// Beehiiv API Docs: https://developers.beehiiv.com/docs/v2
const mockNewsletterPosts = [
  {
    id: '1',
    title: 'Understanding the New USCIS Filing Requirements for 2025',
    excerpt: 'Recent changes to USCIS filing procedures affect family-based petitions and employment-based green card applications. Learn what you need to know to stay compliant.',
    date: 'May 15, 2025',
    category: 'Immigration',
    url: '#',
  },
  {
    id: '2',
    title: 'How Estate Planning Protects Immigrant Families',
    excerpt: 'For immigrant families, estate planning is not just about asset protection. It is about ensuring stability and clarity for loved ones regardless of immigration status changes.',
    date: 'April 28, 2025',
    category: 'Estate Planning',
    url: '#',
  },
  {
    id: '3',
    title: 'EB-5 Investor Visa Program: What Changed in 2025',
    excerpt: 'The EB-5 Immigrant Investor Program continues to evolve. We break down the latest updates and what they mean for investors seeking permanent residency.',
    date: 'April 10, 2025',
    category: 'Business Immigration',
    url: '#',
  },
  {
    id: '4',
    title: 'Bankruptcy and Immigration: What You Need to Know',
    excerpt: 'Filing for bankruptcy can be stressful, especially when you have immigration concerns. Learn how these two areas of law interact and what protections exist.',
    date: 'March 22, 2025',
    category: 'Bankruptcy',
    url: '#',
  },
  {
    id: '5',
    title: 'Real Estate Transactions for Non-Citizens: A Complete Guide',
    excerpt: 'Non-citizens can buy and sell property in the United States, but there are specific considerations and tax implications to be aware of.',
    date: 'March 5, 2025',
    category: 'Real Estate',
    url: '#',
  },
  {
    id: '6',
    title: 'TPS Updates: Countries Designated for 2025',
    excerpt: 'Temporary Protected Status (TPS) designations continue to change. Stay informed about which countries are currently designated and what it means for your case.',
    date: 'February 18, 2025',
    category: 'Immigration',
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

  // Newsletter posts
  // TODO: Replace with actual Beehiiv API call:
  // const response = await fetch(
  //   `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/posts?status=confirmed&limit=10`,
  //   { headers: { 'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}` } }
  // )
  // const data = await response.json()
  // return NextResponse.json({ posts: data.data })
  if (path === '/newsletter/posts') {
    return NextResponse.json({ posts: mockNewsletterPosts })
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
