import { Link } from 'react-router-dom'
import { BookOpen, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <BookOpen className="w-5 h-5 text-brand-400" />
              Farhat Beig
            </div>
            <p className="text-sm leading-relaxed">
              Structured, surah-by-surah Tafseer of the Quran for students seeking to deepen their understanding of the Book of Allah.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[['/', 'Home'], ['/services', 'Services'], ['/about', 'About'], ['/enroll', 'Enroll'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="mailto:fbeig2020@gmail.com" className="hover:text-white transition-colors">
                  fbeig2020@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>(Phone — coming soon)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Farhat Beig. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
