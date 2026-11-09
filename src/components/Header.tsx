import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck, Clock, Sun, Moon } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-stone-800 transition-colors">
      {/* Top info strip */}
      <div className="bg-[#1a1c1c] dark:bg-stone-950 text-white py-1.5 px-4 text-xs font-geist">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#d4af37]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="font-semibold uppercase tracking-wider">K53 Accredited</span>
              <span className="text-gray-400 font-normal">| Reg: {COMPANY_DETAILS.regNumber}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              {COMPANY_DETAILS.hours}
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-[#ffd700] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] text-black px-2.5 py-0.5 rounded-full font-bold hover:brightness-110 transition-all text-xs"
            >
              <MessageCircle className="w-3 h-3 fill-black" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={COMPANY_DETAILS.logoUrl}
            alt="King George Driving School Logo"
            className="h-11 sm:h-12 w-auto object-contain rounded-md border border-amber-200/50 dark:border-amber-500/30 shadow-sm transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#1a1c1c] dark:text-stone-100 leading-tight group-hover:text-[#735c00] dark:group-hover:text-amber-400 transition-colors">
              King George
            </span>
            <span className="text-[10px] sm:text-xs font-geist font-semibold uppercase tracking-widest text-[#735c00] dark:text-amber-400">
              Driving School
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-semibold text-gray-700 dark:text-stone-300">
          <a href="#home" className="hover:text-[#735c00] dark:hover:text-amber-400 transition-colors">Home</a>
          <a href="#courses" className="hover:text-[#735c00] dark:hover:text-amber-400 transition-colors">Courses & Packages</a>
          <a href="#testimonials" className="hover:text-[#735c00] dark:hover:text-amber-400 transition-colors">Testimonials</a>
          <a href="#gallery" className="hover:text-[#735c00] dark:hover:text-amber-400 transition-colors">Learners Gallery</a>
          <a href="#k53-guide" className="hover:text-[#735c00] dark:hover:text-amber-400 transition-colors">K53 Guide</a>
          <a href="#calculator" className="hover:text-[#735c00] dark:hover:text-amber-400 transition-colors">Prices & Calculator</a>
          <a href="#contact" className="hover:text-[#735c00] dark:hover:text-amber-400 transition-colors">Contact</a>
        </div>

        {/* Action Buttons & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-gray-200 dark:border-stone-700 bg-gray-50 dark:bg-stone-800 text-gray-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-stone-700 transition-colors cursor-pointer"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          <a
            href={`tel:${COMPANY_DETAILS.phoneClean}`}
            className="flex items-center gap-2 border border-gray-300 dark:border-stone-700 hover:border-[#d4af37] text-gray-800 dark:text-stone-200 px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all hover:bg-amber-50 dark:hover:bg-stone-800"
          >
            <Phone className="w-3.5 h-3.5 text-[#735c00] dark:text-amber-400" />
            <span>Call {COMPANY_DETAILS.phone}</span>
          </a>

          <button
            onClick={onBookClick}
            className="bg-[#ffd700] hover:bg-[#d4af37] text-[#1a1c1c] px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
          >
            Book Now
          </button>
        </div>

        {/* Mobile menu & Theme toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg border border-gray-200 dark:border-stone-700 bg-gray-50 dark:bg-stone-800 text-gray-700 dark:text-amber-300 cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>
          <button
            onClick={onBookClick}
            className="bg-[#ffd700] text-[#1a1c1c] px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider rounded"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 dark:text-stone-200 hover:bg-gray-100 dark:hover:bg-stone-800 rounded-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-stone-900 border-b border-gray-200 dark:border-stone-800 px-4 pt-2 pb-6 space-y-3 font-semibold text-gray-800 dark:text-stone-200 animate-fadeIn">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 dark:border-stone-800 hover:text-[#735c00] dark:hover:text-amber-400"
          >
            Home
          </a>
          <a
            href="#courses"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 dark:border-stone-800 hover:text-[#735c00] dark:hover:text-amber-400"
          >
            Packages & Rates (Learner's, Code 8, 10)
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 dark:border-stone-800 hover:text-[#735c00] dark:hover:text-amber-400"
          >
            Graduate Testimonials
          </a>
          <a
            href="#fleet"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 dark:border-stone-800 hover:text-[#735c00] dark:hover:text-amber-400"
          >
            Fleet & Branding
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 dark:border-stone-800 hover:text-[#735c00] dark:hover:text-amber-400"
          >
            Learners Gallery (Passed!)
          </a>
          <a
            href="#k53-guide"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 dark:border-stone-800 hover:text-[#735c00] dark:hover:text-amber-400"
          >
            K53 Test Tips
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 dark:border-stone-800 hover:text-[#735c00] dark:hover:text-amber-400"
          >
            Package Calculator
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#735c00] dark:hover:text-amber-400"
          >
            Contact Us
          </a>

          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="w-full bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-amber-300 py-2.5 text-center font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 border border-stone-200 dark:border-stone-700"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
              <span>Switch to {isDark ? 'Light' : 'Dark'} Mode</span>
            </button>
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="w-full bg-gray-900 dark:bg-stone-800 text-white py-2.5 text-center font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#ffd700]" />
              Call {COMPANY_DETAILS.phone}
            </a>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-black py-2.5 text-center font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

