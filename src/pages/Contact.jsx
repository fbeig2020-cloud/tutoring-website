import { useState } from 'react'
import { Mail, Phone, Clock, CheckCircle2, Send, MapPin } from 'lucide-react'

const EMPTY = { name: '', email: '', subject: '', message: '' }
const ENDPOINT = 'https://formspree.io/f/mgobgprj'

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setForm(EMPTY)
      setSubmitted(true)
    } catch {
      setSubmitError('Something went wrong. Please try again or email me directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-700 to-indigo-500 text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Have a question about my services? I'd love to hear from you. I typically respond within one business day.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-5 gap-12">
        {/* Contact info */}
        <aside className="md:col-span-2 space-y-6">
          <ContactItem
            icon={Mail}
            label="Email"
            value="fbeig2020@gmail.com"
            href="mailto:fbeig2020@gmail.com"
          />
          <ContactItem
            icon={Phone}
            label="Phone"
            value="(Phone — coming soon)"
          />
          <ContactItem
            icon={MapPin}
            label="Location"
            value="Online — sessions available worldwide"
          />
          <ContactItem
            icon={Clock}
            label="Response Time"
            value="Within 1 business day"
          />

          <div className="card bg-brand-50 border-brand-100 mt-8">
            <p className="text-sm text-brand-800 leading-relaxed">
              <strong>Prefer to enroll directly?</strong> Use the enrollment form to send your session request — it captures everything I need to get started right away.
            </p>
            <a href="/enroll" className="btn-primary mt-4 text-xs px-4 py-2">Go to Enrollment Form</a>
          </div>
        </aside>

        {/* Form */}
        <div className="md:col-span-3">
          {submitted ? (
            <div className="card py-12 text-center">
              <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Thanks, <strong>{form.name}</strong>! I'll get back to you within one business day.
              </p>
              <button
                onClick={() => { setForm(EMPTY); setSubmitted(false) }}
                className="btn-outline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="card shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your Name *" name="name" placeholder="Jane Smith" value={form.name} onChange={handleChange} error={errors.name} />
                  <Field label="Email Address *" name="email" type="email" placeholder="jane@example.com" value={form.email} onChange={handleChange} error={errors.email} />
                </div>
                <Field label="Subject" name="subject" placeholder="Question about Tafseer sessions…" value={form.subject} onChange={handleChange} />
                <div>
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me what's on your mind…"
                    className={`form-input resize-none ${errors.message ? 'border-red-400 focus:ring-red-300' : ''}`}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                </div>
                {submitError && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{submitError}</p>
                )}
                <button type="submit" disabled={submitting} className="btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed">
                  <Send className="w-4 h-4" /> {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function ContactItem({ icon: Icon, label, value, href }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-brand-600" />
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">{label}</p>
        {href ? (
          <a href={href} className="text-gray-800 font-medium text-sm hover:text-brand-600 transition-colors">{value}</a>
        ) : (
          <p className="text-gray-800 font-medium text-sm">{value}</p>
        )}
      </div>
    </div>
  )
}

function Field({ label, name, type = 'text', placeholder, value, onChange, error }) {
  return (
    <div>
      <label htmlFor={name} className="form-label">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`form-input ${error ? 'border-red-400 focus:ring-red-300' : ''}`}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  )
}
