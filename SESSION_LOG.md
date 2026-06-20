# Tutoring Website — Session Log

## Project
Online tutoring enrollment website for Farhat Beig (Islamic Studies /
Tafseer of the Quran). Built with React + Tailwind CSS + Vite.

## Owner Info
- Name: Farhat Beig
- Subject: Islamic Studies — Tafseer of the Quran (one session = one Surah)
- Pricing: $30/session
- Email: fbeig2020@gmail.com
- Phone: not yet provided (placeholder: "coming soon")
- Bio: Content creator, data analyst, and mentor specializing in teaching
  Islamic Studies and Tafseer of the Quran.

## Pages
- Home.jsx — hero, about snippet, subject card, testimonials, stats, CTA
- Services.jsx — Islamic Studies service card, pricing, FAQs
- Enrollment.jsx (/enroll) — sign-up form, subject is Islamic Studies only
- About.jsx — full bio, qualifications, teaching philosophy
- Contact.jsx — contact form, email, location ("Online — worldwide")
- Navbar.jsx / Footer.jsx — shared name, tagline, email, copyright

## Status
- [x] Site scaffolded (Home, Services, Enrollment, About, Contact)
- [x] Node.js installed, dependencies installed, dev server running locally
- [x] Fixed apostrophe syntax error in About.jsx
- [x] Personalized all content with real owner info
- [x] Improved color contrast and brightness across all pages (2026-06-19)
      — Footer: bg-gray-900/text-gray-400 → bg-gray-800/text-gray-300 (brighter on dark)
      — Body copy: text-gray-500 → text-gray-600 throughout (Home, About, Services, Contact, Enrollment)
      — Minor labels: text-gray-400 → text-gray-500 (secondary text, roles, formats)
      — section-subheading in index.css: text-gray-500 → text-gray-600
- [ ] Add real phone number
- [x] Connected Enrollment and Contact forms to Formspree (2026-06-19)
      — endpoint: https://formspree.io/f/mgobgprj
      — POST with JSON, Accept: application/json header
      — shows success state + resets fields on 2xx; shows inline error banner on failure
      — submit button disabled + label changes to "Sending…" / "Submitting…" during request
- [ ] Deploy to a live public URL (e.g. Vercel/Netlify)

## Next Steps
1. Review the personalized site in browser, confirm content looks right
2. Hook up enrollment form to receive real submissions
3. Deploy site so it's publicly accessible
