import { useState } from 'react'
import { CheckCircle2, ClipboardList } from 'lucide-react'

const SUBJECTS = ['Islamic Studies — Tafseer of the Quran', 'Other']
const SCHEDULES = [
  'Weekday mornings (8am–12pm)',
  'Weekday afternoons (12pm–5pm)',
  'Weekday evenings (5pm–8pm)',
  'Saturday mornings',
  'Saturday afternoons',
  'Sunday',
  'Flexible / TBD',
]

const EMPTY = {
  studentName: '',
  guardianName: '',
  email: '',
  phone: '',
  subject: '',
  schedule: '',
  message: '',
  gradeLevel: '',
}
const ENDPOINT = 'https://formspree.io/f/mgobgprj'

export default function Enrollment() {
  const [form, setForm] = useState(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function validate() {
    const e = {}
    if (!form.studentName.trim()) e.studentName = 'Student name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    if (!form.subject) e.subject = 'Please select a subject.'
    if (!form.schedule) e.schedule = 'Please select a preferred schedule.'
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
      setSubmitError('Something went wrong. Please try again or email me directly at fbeig2020@gmail.com.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-20">
        <div className="card max-w-md w-full text-center py-12">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-5" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">You're Enrolled!</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Thanks, <strong>{form.studentName}</strong>! I'll be in touch within 24 hours to confirm your schedule and get you set up.
          </p>
          <button
            onClick={() => { setForm(EMPTY); setSubmitted(false) }}
            className="btn-primary"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-700 to-indigo-500 text-white pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ClipboardList className="w-10 h-10 mx-auto mb-4 text-indigo-200" />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Enroll in Tutoring</h1>
          <p className="text-indigo-100 text-lg leading-relaxed">
            Fill out the form below and I'll reach out within 24 hours to confirm your session details.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card shadow-md">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Student info */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Student Information</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Student Name *"
                  name="studentName"
                  placeholder="First and last name"
                  value={form.studentName}
                  onChange={handleChange}
                  error={errors.studentName}
                />
                <Field
                  label="Prior Quran Knowledge"
                  name="gradeLevel"
                  placeholder="e.g. Beginner, can read Arabic, etc."
                  value={form.gradeLevel}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Guardian */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Parent / Guardian (if applicable)</h2>
              <Field
                label="Parent / Guardian Name"
                name="guardianName"
                placeholder="Leave blank if student is 18+"
                value={form.guardianName}
                onChange={handleChange}
              />
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Contact Details</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Email Address *"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <Field
                  label="Phone Number *"
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
              </div>
            </div>

            {/* Session preferences */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Session Preferences</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Subject */}
                <div>
                  <label className="form-label">Subject of Interest *</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? 'border-red-400 ring-red-300' : ''}`}
                  >
                    <option value="">Select a subject…</option>
                    {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.subject && <p className="mt-1.5 text-xs text-red-500">{errors.subject}</p>}
                </div>

                {/* Schedule */}
                <div>
                  <label className="form-label">Preferred Schedule *</label>
                  <select
                    name="schedule"
                    value={form.schedule}
                    onChange={handleChange}
                    className={`form-input ${errors.schedule ? 'border-red-400 ring-red-300' : ''}`}
                  >
                    <option value="">Select a time slot…</option>
                    {SCHEDULES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.schedule && <p className="mt-1.5 text-xs text-red-500">{errors.schedule}</p>}
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="form-label">Additional Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about your goals, any specific surahs you'd like to start with, or questions you have…"
                className="form-input resize-none"
              />
            </div>

            <p className="text-xs text-gray-500">* Required fields. Your information is never shared or sold.</p>

            {submitError && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{submitError}</p>
            )}
            <button type="submit" disabled={submitting} className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed">
              {submitting ? 'Submitting…' : 'Submit Enrollment Request'}
            </button>
          </form>
        </div>
      </section>
    </>
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
