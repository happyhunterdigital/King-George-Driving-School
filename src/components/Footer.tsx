import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1c1c] text-white py-14 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
      >
        
        {/* Top Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="flex items-start gap-4 max-w-md">
            <img
              src={COMPANY_DETAILS.logoUrl}
              alt="King George Driving School Logo"
              className="h-14 w-auto object-contain rounded-lg border border-[#d4af37]"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-bold uppercase tracking-tight text-[#ffd700]">
                King George Driving School
              </h3>
              <p className="text-xs text-gray-400 font-normal">
                Professional K53 Accredited Driver Training for Learner’s Licence, Code 8, and Code 10 in Pretoria East, Pretoria West & Boksburg.
              </p>
              <p className="text-[11px] font-geist text-[#d4af37] font-semibold">
                Reg: {COMPANY_DETAILS.regNumber}
              </p>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#ffd700]" />
              Call {COMPANY_DETAILS.phone}
            </a>

            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-black px-5 py-3 text-xs font-extrabold uppercase tracking-wider rounded-xl hover:brightness-110 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              Chat on WhatsApp
            </a>
          </div>

        </div>

        {/* Links & Copyright Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-geist">
          <p>© {new Date().getFullYear()} King George Driving School. Professional K53 Instruction. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#courses" className="hover:text-[#ffd700] transition-colors">Courses</a>
            <a href="#fleet" className="hover:text-[#ffd700] transition-colors">Fleet</a>
            <a href="#gallery" className="hover:text-[#ffd700] transition-colors">Learners Gallery</a>
            <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="text-[#ffd700] font-bold hover:underline">
              Call: {COMPANY_DETAILS.phone}
            </a>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};
