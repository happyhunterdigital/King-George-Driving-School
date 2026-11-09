import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Heart, Sparkles, ZoomIn, Star, MessageCircle } from 'lucide-react';
import { LEARNERS_GALLERY, COMPANY_DETAILS } from '../data/content';
import { LearnerGalleryItem } from '../types';

interface LearnersGalleryProps {
  onSelectLearner: (learner: LearnerGalleryItem) => void;
  onBookClick: () => void;
}

export const LearnersGallery: React.FC<LearnersGalleryProps> = ({ onSelectLearner, onBookClick }) => {
  const [likes, setLikes] = useState<{ [key: string]: number }>({
    lg1: 42,
    lg2: 38,
    lg3: 56,
    lg4: 29,
    lg5: 34,
    lg6: 48,
    lg7: 51,
  });

  const handleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <section id="gallery" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#ffd700]/15 text-[#ffd700] text-xs font-geist font-bold uppercase tracking-widest rounded-full mb-3 border border-[#ffd700]/30">
            <Award className="w-4 h-4 text-[#ffd700]" />
            <span>Success Wall of Fame</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Our Learners Got Their Licence!
          </h2>
          <div className="h-1 w-24 bg-[#ffd700] mx-auto my-4 rounded-full"></div>

          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
            Congratulations to our hard-working students who passed their K53 driving tests! Join hundreds of proud drivers who achieved independence with King George Driving School.
          </p>
        </motion.div>

        {/* Modern Mosaic Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNERS_GALLERY.map((item, index) => {
            // Give specific items larger grid spans for a mosaic feel
            const isFeatured = index === 0 || index === 3;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => onSelectLearner(item)}
                className={`group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-950 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ffd700]/60 cursor-pointer ${
                  isFeatured ? 'lg:col-span-1 ring-1 ring-[#d4af37]/30' : ''
                }`}
              >
                {/* Image container */}
                <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-black">
                  <img
                    src={item.url}
                    alt={`${item.learnerName} got their drivers license with King George Driving School`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 transition-opacity"></div>

                  {/* Badge top right */}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-[#ffd700] border border-[#ffd700]/40 px-2.5 py-1 text-[10px] font-geist font-bold uppercase tracking-wider rounded-full flex items-center gap-1 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-[#ffd700]" />
                    <span>{item.dateTag}</span>
                  </div>

                  {/* Zoom indicator on hover */}
                  <div className="absolute top-3 left-3 bg-[#ffd700] text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  {/* Learner details overlay at bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-geist text-[#ffd700] uppercase tracking-wide">
                        {item.licenseCode}
                      </span>

                      {/* Like button */}
                      <button
                        onClick={(e) => handleLike(e, item.id)}
                        className="flex items-center gap-1 text-xs font-semibold bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full text-white transition-colors"
                        title="Congratulate Learner"
                      >
                        <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                        <span>{likes[item.id] || 0}</span>
                      </button>
                    </div>

                    <h3 className="text-lg font-extrabold text-white group-hover:text-[#ffd700] transition-colors">
                      {item.learnerName}
                    </h3>

                    <p className="text-xs text-gray-300 italic line-clamp-2">
                      "{item.quote}"
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Motivational Banner & WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-[#d4af37] via-[#f0c430] to-[#b8860b] rounded-2xl p-8 sm:p-10 text-black shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#ffd700]"
        >
          <div className="space-y-2 text-center sm:text-left">
            <span className="bg-black text-[#ffd700] px-3 py-1 rounded text-xs font-geist font-extrabold uppercase tracking-widest inline-block">
              Your Turn To Pass Next!
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to hold your official driver's licence?
            </h3>
            <p className="text-sm font-medium text-black/90 max-w-xl">
              Book your driving lessons today with King George Driving School. We guide you step-by-step from beginner to licence holder.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={onBookClick}
              className="bg-black hover:bg-gray-900 text-white font-bold px-6 py-3.5 text-xs uppercase tracking-wider rounded transition-colors shadow-lg cursor-pointer text-center"
            >
              Book Your Lessons Now
            </button>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1faa50] text-black font-extrabold px-6 py-3.5 text-xs uppercase tracking-wider rounded transition-colors shadow-lg text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
