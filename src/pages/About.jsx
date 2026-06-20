import { Link } from 'react-router-dom'
import { GraduationCap, Heart, Lightbulb, Star, ArrowRight, CheckCircle2 } from 'lucide-react'

const qualifications = [
  'Content creator with a focus on Islamic education and digital media',
  'Data analyst with experience in research, insight, and structured learning',
  'Mentor specializing in Islamic Studies and Tafseer of the Quran',
  'Surah-by-surah Tafseer methodology — structured, in-depth, accessible',
  'Experienced in teaching students across a wide range of backgrounds',
]

const philosophy = [
  {
    icon: Heart,
    title: 'Start with the Heart',
    body: 'The Quran speaks first to the heart. Before diving into scholarly detail, I help students approach each surah with sincerity and openness — because understanding follows intention.',
  },
  {
    icon: Lightbulb,
    title: 'Build Real Understanding',
    body: 'Memorizing words is not the same as understanding them. I teach the meaning, historical context, and wisdom of each verse so that the Quran becomes a living guide for everyday life.',
  },
  {
    icon: Star,
    title: 'One Surah at a Time',
    body: 'Depth over speed. By dedicating a full session to each surah, students build a solid, lasting foundation rather than rushing through the text without comprehension.',
  },
]

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-700 to-indigo-500 text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Me</h1>
          <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Content creator. Data analyst. Mentor. Here's a bit about who I am and why teaching the Quran matters to me.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Photo placeholder */}
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center shadow-inner shrink-0">
            <div className="text-center text-brand-400">
              <div className="w-28 h-28 rounded-full bg-brand-300 mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-4xl">FB</span>
              </div>
              <p className="text-brand-600 font-medium text-sm">Replace with your photo</p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">My Story</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-5">Hi, I'm Farhat Beig</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
            <p>
              I am a content creator, data analyst, and mentor, specializing in teaching Islamic Studies and Tafseer of the Quran. My work sits at the intersection of structured learning and spiritual development — I bring the same rigour I apply in data analysis to how I approach teaching the Quran.
            </p>
            <p>
              I help students deepen their understanding of the Quran through structured, surah-by-surah study with detailed Tafseer. Each session is dedicated to one surah — its meaning, its context within the life of the Prophet (peace be upon him), and the timeless lessons it carries for us today.
            </p>
            <p>
              Whether you are a complete beginner or someone who has been reading the Quran for years without fully grasping its depth, these sessions are designed to meet you where you are and take you further.
            </p>
          </div>
          <Link to="/enroll" className="btn-primary mt-8 w-fit">
            Work with Me <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <GraduationCap className="w-10 h-10 text-brand-600 mx-auto mb-4" />
            <h2 className="section-heading">Background & Expertise</h2>
          </div>
          <div className="card max-w-2xl mx-auto">
            <ul className="space-y-3">
              {qualifications.map(q => (
                <li key={q} className="flex items-start gap-3 text-gray-700 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">How I Teach</p>
          <h2 className="section-heading">My Teaching Philosophy</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Three principles guide every session I run.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {philosophy.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card text-center flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center">
                <Icon className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-50 py-16 border-t border-brand-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Let's Begin Together</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Every student who wants to understand the Quran deserves a patient, knowledgeable guide. I would be honoured to be yours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/enroll" className="btn-primary">Enroll Now <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
