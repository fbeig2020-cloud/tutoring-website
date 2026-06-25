import { Link } from 'react-router-dom'
import { BookOpen, Users, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const service = {
  icon: BookOpen,
  subject: 'Islamic Studies — Tafseer of the Quran',
  color: 'bg-brand-50 text-brand-600',
  levels: 'All levels welcome · Beginners to advanced',
  description:
    'A structured, surah-by-surah study of the Quran with detailed Tafseer. Each session covers one complete surah — its meaning, historical context (Asbab al-Nuzul), key themes, and practical lessons for everyday life.',
  includes: [
    'Complete Tafseer of one surah per session',
    'Historical context and occasions of revelation',
    'Linguistic insights into key Arabic terms',
    'Thematic discussions and practical takeaways',
    'Q&A to ensure deep understanding before moving on',
  ],
}

const sessionType = {
  title: '1-on-1 Tafseer Session',
  icon: Users,
  desc: 'A dedicated one-on-one session covering one complete surah with full Tafseer. Sessions are paced to you — no rushing, no skipping over depth.',
 
 
}

const faqs = [
  {
    q: 'How does each session work?',
    a: 'Each session covers one surah from beginning to end — its meaning, context, and key lessons. We proceed to the next surah only once the current one is properly understood.',
  },
  {
    q: 'Do I need to know Arabic to join?',
    a: 'No Arabic knowledge is required. Sessions are conducted in English with explanations of key Arabic terms where relevant. Beginners are very welcome.',
  },
  {
    q: 'Where do sessions take place?',
    a: 'Sessions are held online via video call (Zoom or Google Meet), making them accessible from anywhere in the world.',
  },
  {
    q: 'How do I reschedule or cancel?',
    a: 'Please give at least 24 hours\' notice for any cancellations or rescheduling. Life happens — just send a message and we\'ll sort it out.',
  },
  {
    q: 'Which surah do we start with?',
    a: 'We typically begin with Surah Al-Fatiha and work through the Quran in order. If you have a specific surah you\'d like to study, we can discuss that during enrollment.',
  },
]

function Faq({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left text-gray-800 font-medium text-sm gap-4 hover:text-brand-700 transition-colors"
      >
        {q}
        <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${open ? 'text-brand-600' : 'text-gray-400'}`} />
      </button>
      {open && <p className="pb-4 text-gray-600 text-sm leading-relaxed">{a}</p>}
    </div>
  )
}

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-700 to-indigo-500 text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Services</h1>
          <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Focused, structured Tafseer of the Quran — one surah at a time, with depth and care.
          </p>
        </div>
      </section>

      {/* Service card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="card flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${service.color}`}>
              <service.icon className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{service.subject}</h2>
              <p className="text-sm text-gray-500 mt-1 font-medium">{service.levels}</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">{service.description}</p>
          <ul className="space-y-2.5">
            {service.includes.map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link to="/enroll" className="btn-primary w-fit">
            Enroll Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">Pricing</p>
            <h2 className="section-heading">Session Details</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Simple, transparent pricing — no packages, no commitments. Book as many sessions as you need.
            </p>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="card flex flex-col gap-4 border-t-4 border-t-brand-500 text-center">
              <div className="flex items-center justify-center gap-3">
                <sessionType.icon className="w-5 h-5 text-brand-600" />
                <h3 className="font-bold text-gray-900 text-lg">{sessionType.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{sessionType.desc}</p>
              <div className="border-t border-gray-100 pt-4 flex flex-col items-center gap-1">
                <span className="text-3xl font-extrabold text-brand-700">{sessionType.rate}</span>
                <span className="text-gray-500 text-sm">{sessionType.format}</span>
              </div>
              <Link to="/enroll" className="btn-primary justify-center">
                Book a Session <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>
        <div className="card">
          {faqs.map(faq => <Faq key={faq.q} {...faq} />)}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-600 text-sm mb-4">Still have questions?</p>
          <Link to="/contact" className="btn-primary">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
