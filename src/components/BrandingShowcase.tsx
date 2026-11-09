import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Eye, CheckCircle } from 'lucide-react';
import { BRANDING_IMAGES, COMPANY_DETAILS } from '../data/content';
import { BrandingImage } from '../types';

interface BrandingShowcaseProps {
  onImageClick: (url: string, title: string, caption: string) => void;
}

export const BrandingShowcase: React.FC<BrandingShowcaseProps> = ({ onImageClick }) => {
  return (
    <section id="fleet" className="py-20 bg-[#1a1c1c] text-white overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 pb-8 border-b border-gray-800"
        >
          <div>
            <span className="inline-block px-3 py-1 bg-[#d4af37]/20 text-[#ffd700] text-xs font-geist font-bold uppercase tracking-widest rounded-full mb-3 border border-[#d4af37]/30">
              Official Fleet & Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              King George Professional Fleet
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mt-2">
              Equipped with dual safety controls, clear visibility, and official K53 standards for Code 8, Code 10, and Code 14 instruction.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-white/10 border border-white/20 text-[#ffd700] text-xs font-geist font-bold uppercase tracking-wider rounded-md flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ffd700]" />
              K53 COMPLIANT
            </div>
            <div className="px-4 py-2 bg-[#d4af37] text-black text-xs font-geist font-extrabold uppercase tracking-wider rounded-md flex items-center gap-2">
              <Award className="w-4 h-4" />
              DUAL CONTROL SAFETY
            </div>
          </div>
        </motion.div>

        {/* Bento Grid layout for the branding images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          
          {/* Item 1 - Big Feature (8 cols) */}
          <div
            onClick={() => onImageClick(BRANDING_IMAGES[0].url, BRANDING_IMAGES[0].title, BRANDING_IMAGES[0].caption)}
            className="md:col-span-8 group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-gray-800 shadow-xl cursor-pointer bg-gray-900"
          >
            <img
              src={BRANDING_IMAGES[0].url}
              alt={BRANDING_IMAGES[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[#ffd700] text-xs font-geist font-bold uppercase mb-1">
                <Eye className="w-4 h-4" />
                <span>Featured Training Fleet</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {BRANDING_IMAGES[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                {BRANDING_IMAGES[0].caption}
              </p>
            </div>
          </div>

          {/* Item 2 - Side Feature (4 cols) */}
          <div
            onClick={() => onImageClick(BRANDING_IMAGES[1].url, BRANDING_IMAGES[1].title, BRANDING_IMAGES[1].caption)}
            className="md:col-span-4 group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-gray-800 shadow-xl cursor-pointer bg-gray-900"
          >
            <img
              src={BRANDING_IMAGES[1].url}
              alt={BRANDING_IMAGES[1].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 text-[#ffd700] text-xs font-geist font-bold uppercase mb-1">
                <Eye className="w-4 h-4" />
                <span>K53 Test Yard Coaching</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {BRANDING_IMAGES[1].title}
              </h3>
              <p className="text-xs text-gray-300">
                {BRANDING_IMAGES[1].caption}
              </p>
            </div>
          </div>

          {/* Item 3 - (4 cols) */}
          <div
            onClick={() => onImageClick(BRANDING_IMAGES[2].url, BRANDING_IMAGES[2].title, BRANDING_IMAGES[2].caption)}
            className="md:col-span-4 group relative h-72 rounded-2xl overflow-hidden border border-gray-800 shadow-xl cursor-pointer bg-gray-900"
          >
            <img
              src={BRANDING_IMAGES[2].url}
              alt={BRANDING_IMAGES[2].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-lg font-bold text-white mb-1">
                {BRANDING_IMAGES[2].title}
              </h3>
              <p className="text-xs text-gray-300">
                {BRANDING_IMAGES[2].caption}
              </p>
            </div>
          </div>

          {/* Item 4 - (4 cols) */}
          <div
            onClick={() => onImageClick(BRANDING_IMAGES[3].url, BRANDING_IMAGES[3].title, BRANDING_IMAGES[3].caption)}
            className="md:col-span-4 group relative h-72 rounded-2xl overflow-hidden border border-gray-800 shadow-xl cursor-pointer bg-gray-900"
          >
            <img
              src={BRANDING_IMAGES[3].url}
              alt={BRANDING_IMAGES[3].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-lg font-bold text-white mb-1">
                {BRANDING_IMAGES[3].title}
              </h3>
              <p className="text-xs text-gray-300">
                {BRANDING_IMAGES[3].caption}
              </p>
            </div>
          </div>

          {/* Item 5 - 100% Accreditation Card (4 cols) */}
          <div className="md:col-span-4 bg-gradient-to-br from-[#d4af37] to-[#735c00] text-black rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-[#ffd700]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-black text-[#ffd700] flex items-center justify-center mb-4 shadow-md font-bold">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-black mb-2">
                100% Accredited Instruction
              </h3>
              <p className="text-xs sm:text-sm text-black/90 leading-relaxed font-medium">
                Our entire fleet is dual-controlled and certified by South African road traffic safety standards. Learn from patient, registered instructors with decades of experience.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/20 flex items-center justify-between text-xs font-bold font-geist text-black">
              <span>Direct Hotline:</span>
              <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="underline">
                {COMPANY_DETAILS.phone}
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
