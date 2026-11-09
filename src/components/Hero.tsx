import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Phone, MessageCircle, Award, CheckCircle2, Star, Truck, Car } from 'lucide-react';
import { COMPANY_DETAILS, BRANDING_IMAGES } from '../data/content';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  // Use the high-res branding image as background / hero highlight
  const heroImage = BRANDING_IMAGES[1]?.url || BRANDING_IMAGES[0]?.url;

  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#1a1c1c] text-white">
      {/* Background Image with Dark Gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-35">
        <img
          src={heroImage}
          alt="King George Driving School K53 Training"
          className="w-full h-full object-cover object-center filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c1c] via-[#1a1c1c]/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#ffd700] text-xs font-geist font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-[#ffd700]" />
              <span>K53 Accredited Excellence • Reg: {COMPANY_DETAILS.regNumber}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Master the Road with <br />
              <span className="text-[#ffd700]">King George</span> Driving School
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-normal">
              Professional, K53 accredited driving instruction for <strong className="text-white font-semibold">Learner’s Licence (R1000 Package)</strong>, <strong className="text-white font-semibold">Code 8 (Light Vehicle)</strong>, and <strong className="text-white font-semibold">Code 10 (Heavy Vehicle Package R4500)</strong>. Join South Africa’s premier driving school in Pretoria & Boksburg.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="bg-[#ffd700] hover:bg-[#d4af37] text-[#1a1c1c] px-8 py-4 font-bold text-sm sm:text-base uppercase tracking-wider rounded shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                Book Your First Lesson
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-4 font-bold text-sm sm:text-base uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-[#ffd700]" />
                Call {COMPANY_DETAILS.phone}
              </a>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-black px-6 py-4 font-bold text-sm sm:text-base uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                WhatsApp
              </a>
            </div>

            {/* Quick Highlights */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-geist text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffd700] shrink-0" />
                <span>Dual-Control K53 Vehicles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffd700] shrink-0" />
                <span>Certified Patient Instructors</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#ffd700] shrink-0" />
                <span>Test Yard Parking Prep</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Featured Badge & Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl bg-gray-900/80 backdrop-blur-md p-4 sm:p-6 text-white space-y-4">
              
              {/* Brand Header Inside Card */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <img
                    src={COMPANY_DETAILS.logoUrl}
                    alt="King George Logo"
                    className="w-12 h-12 rounded-lg object-contain border border-[#d4af37]"
                  />
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#ffd700] uppercase tracking-wide">
                      King George Driving School
                    </h3>
                    <p className="text-xs text-gray-400">Accredited Driver Training Centre</p>
                  </div>
                </div>
                <div className="bg-[#d4af37]/20 p-2 rounded-full border border-[#d4af37]/40">
                  <Award className="w-6 h-6 text-[#ffd700]" />
                </div>
              </div>

              {/* Code Tags */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-white/5 border border-white/10 p-2.5 rounded-lg hover:border-[#ffd700] transition-colors">
                  <Award className="w-5 h-5 mx-auto mb-1 text-[#ffd700]" />
                  <span className="font-bold block text-white">Learner’s</span>
                  <span className="text-[10px] text-gray-400">R1000 Package</span>
                </div>

                <div className="bg-white/5 border border-white/10 p-2.5 rounded-lg hover:border-[#ffd700] transition-colors">
                  <Car className="w-5 h-5 mx-auto mb-1 text-[#ffd700]" />
                  <span className="font-bold block text-white">Code 8</span>
                  <span className="text-[10px] text-gray-400">Light Vehicle</span>
                </div>

                <div className="bg-white/5 border border-white/10 p-2.5 rounded-lg hover:border-[#ffd700] transition-colors">
                  <Truck className="w-5 h-5 mx-auto mb-1 text-[#ffd700]" />
                  <span className="font-bold block text-white">Code 10</span>
                  <span className="text-[10px] text-gray-400">R4500 Package</span>
                </div>
              </div>

              {/* Instant Call Out */}
              <div className="bg-gradient-to-r from-[#d4af37]/20 to-[#735c00]/30 border border-[#d4af37]/40 rounded-xl p-4 text-center">
                <div className="flex justify-center mb-1 text-[#ffd700]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ffd700]" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-gray-200">
                  "High pass rate for K53 yard & road tests in South Africa."
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gray-400 font-geist">Direct Hotline:</span>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneClean}`}
                    className="font-bold text-[#ffd700] hover:underline"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

