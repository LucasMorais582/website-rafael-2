'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

export default function NewsletterPage() {
  const { language } = useLanguage()
  const t = translations[language].newsletter
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState('idle')

  useEffect(() => {
    fetch('/api/newsletter/posts')
      .then(res => res.json())
      .then(data => {
        if (data.posts) setPosts(data.posts)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribeStatus('subscribing')
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        setSubscribeStatus('success')
        setEmail('')
      } else {
        setSubscribeStatus('error')
      }
    } catch {
      setSubscribeStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, #0f2032 0%, #1a3a5a 100%)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{t.title}</h1>
            <p className="text-xl text-white/80 mb-8">{t.subtitle}</p>
            
            {/* Subscribe Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <Input
                type="email"
                required
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-flg-accent"
              />
              <Button
                type="submit"
                disabled={subscribeStatus === 'subscribing'}
                className="h-12 bg-flg-accent hover:bg-flg-blue text-white font-semibold px-8 whitespace-nowrap"
              >
                {subscribeStatus === 'subscribing' ? t.subscribing : t.subscribe}
              </Button>
            </form>
            {subscribeStatus === 'success' && (
              <div className="mt-4 flex items-center space-x-2 text-green-300">
                <CheckCircle className="h-5 w-5" />
                <span>{t.subscribeSuccess}</span>
              </div>
            )}
            {subscribeStatus === 'error' && (
              <div className="mt-4 flex items-center space-x-2 text-red-300">
                <AlertCircle className="h-5 w-5" />
                <span>{t.subscribeError}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse">
                  <div className="h-2 bg-flg-light rounded mb-4" />
                  <div className="h-6 bg-flg-light rounded mb-3 w-3/4" />
                  <div className="h-4 bg-flg-light rounded mb-2" />
                  <div className="h-4 bg-flg-light rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <Card key={i} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-2 bg-flg-accent" />
                  <CardContent className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-flg-accent">{post.category}</span>
                    <h3 className="font-serif text-xl font-semibold text-flg-dark mt-2 mb-3 group-hover:text-flg-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-flg-dark/60 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-flg-dark/40">{post.date}</span>
                      {post.url && (
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-flg-accent flex items-center hover:text-flg-blue transition-colors"
                        >
                          {t.readMore}
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-flg-dark/40">{t.noArticles}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
