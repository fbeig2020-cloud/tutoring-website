import { Link } from 'react-router-dom'
import { ArrowRight, Star, CheckCircle2, BookOpen, Users, Award, Heart } from 'lucide-react'

const subject = {
  icon: BookOpen,
  label: 'Islamic Studies — Tafseer of the Quran',
  desc: 'A structured, surah-by-surah journey through the Quran with detailed Tafseer — understanding the meaning, context, and wisdom of each verse.',
}

const testimonials = [
  {
    name: 'Aisha R.',
    role: 'Student',
    text: 'I finally understand not just the words of the Quran, but the wisdom behind them. Farhat\'s explanations are clear, deep, and truly inspiring.',
    stars: 5,
  },
  {
    name: 'Omar K.',
    role: 'Parent',
    text: 'My daughter was struggling to connect with the Quran. After just a few sessions with Farhat, she now looks forward to every class. Alhamdulillah.',
    stars: 5,
  },
  {
    name: 'Maryam S.',
    role: 'Student',
    text: 'The surah-by-surah format is perfect. I feel like I\'m actually learning, not just memorizing. Highly recommend for anyone serious about Tafseer.',
    stars: 5,
  },
]

const stats = [
  { icon: Users, value: '100+', label: 'Students Taught' },
  { icon: Award, value: '5+ yrs', label: 'Teaching Experience' },
  { icon: Heart, value: '114', label: 'Surahs to Explore' },
]

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-700 via-brand-600 to-indigo-500 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 60%, white 1px, transparent 1px),
                              radial-gradient(circle at 75% 20%, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              1-on-1 Personalized Islamic Studies
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Deepen Your <span className="text-accent-400">Understanding</span> of the Quran — One Surah at a Time
            </h1>
            <p className="text-lg text-indigo-100 leading-relaxed mb-8 max-w-lg">
              Structured Tafseer sessions with Farhat Beig — content creator, data analyst, and mentor. Learn the meaning, context, and wisdom of the Quran surah by surah.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/enroll" className="btn-white">
                Enroll Today <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white/10 hover:border-white">
                View Services
              </Link>
            </div>
          </div>

          {/* Floating card */}
          <div className="hidden md:flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-sm w-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-accent-400 flex items-center justify-center text-white font-bold text-lg">FB</div>
                <div>
                  <p className="font-bold text-white">Farhat Beig</p>
                  <p className="text-indigo-200 text-sm">Content Creator · Mentor · Data Analyst</p>
                </div>
              </div>
              <ul className="space-y-3 text-indigo-100 text-sm">
                {[
                  'Surah-by-surah structured Tafseer',
                  'Detailed explanation of meaning & context',
                  'Flexible online sessions',
                 'Available: Saturday & Sunday, 6PM – 10PM CST',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-11 h-11 rounded-full bg-brand-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <p className="text-4xl font-extrabold text-gray-900">{value}</p>
                <p className="text-gray-600 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About snippet ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">About Me</p>
          <h2 className="section-heading mb-4">A Mentor Who Cares About Your Connection to the Quran</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hi, I'm Farhat Beig — a content creator, data analyst, and mentor specializing in Islamic Studies and Tafseer of the Quran. I help students deepen their understanding of the Quran through structured, surah-by-surah study with detailed Tafseer.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            My approach is simple: take one surah at a time, understand its meaning, its historical context, and the wisdom it carries — so the Quran becomes a living guide, not just words on a page.
          </p>
          <Link to="/about" className="btn-outline">
            Learn More About Me <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center shadow-inner">
            <div className="text-center text-brand-400">
              <div className="w-24 h-24 rounded-full bg-brand-300 mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-3xl">FB</span>
              </div>
              <p className="text-brand-600 font-semibold text-sm">Replace with your photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Subject ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">Subject</p>
            <h2 className="section-heading">What I Teach</h2>
            <p className="section-subheading max-w-xl mx-auto">
              One subject, taught with depth, structure, and genuine care for the student's spiritual and intellectual growth.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="card text-center group hover:-translate-y-1 transition-transform duration-200">
              <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-100 transition-colors">
                <subject.icon className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{subject.label}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{subject.desc}</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              See Session Details & Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="section-heading">What Students & Parents Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, text, stars }) => (
            <div key={name} className="card flex flex-col gap-4">
              <StarRow count={stars} />
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"{text}"</p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{name}</p>
                <p className="text-gray-500 text-xs">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-gradient-to-r from-brand-700 to-indigo-500 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Begin Your Tafseer Journey?</h2>
          <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
            Enroll today and start exploring the Quran — one surah, one session at a time
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/enroll" className="btn-white">
              Enroll Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white/10 hover:border-white">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
