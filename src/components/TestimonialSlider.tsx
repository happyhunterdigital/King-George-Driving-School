import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 relative overflow-hidden transition-colors">
      {/* Decorative background glow elements */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-amber-300/15 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs border border-amber-200/60 dark:border-amber-800/50">
            <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Learner Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Quotes from Our <span className="text-amber-700 dark:text-amber-400 underline decoration-amber-400 decoration-wavy underline-offset-8">Licensed Graduates</span>
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-300 text-base sm:text-lg">
            Real feedback and success quotes from former learners who earned their South African driver’s licence with King George Driving School.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-stone-200/80 dark:border-stone-800 relative transition-colors">
            <Quote className="absolute top-6 right-8 w-16 h-16 sm:w-20 sm:h-20 text-amber-100 dark:text-stone-800 pointer-events-none -rotate-6" />

            <div className="min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  {/* Rating Stars & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-900 text-amber-100 text-xs font-medium shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>{activeTestimonial.licenseCode}</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg sm:text-2xl font-medium text-stone-800 dark:text-stone-100 leading-relaxed italic">
                    "{activeTestimonial.quote}"
                  </blockquote>

                  {/* Author Meta */}
                  <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                        {activeTestimonial.learnerName}
                        <span className="text-xs font-normal text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/80 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800/60">
                          {activeTestimonial.dateTag}
                        </span>
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        Testing Location: {activeTestimonial.location}
                      </p>
                    </div>

                    <div className="text-xs text-stone-400 dark:text-stone-500 font-medium">
                      Verified Graduate #{currentIndex + 1}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, index) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`h-2.5 transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-8 bg-amber-600 dark:bg-amber-400'
                        : 'w-2.5 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-amber-100 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 hover:text-amber-900 transition-colors border border-stone-200/80 dark:border-stone-700 active:scale-95"
                  aria-label="Previous quote"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-amber-100 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 hover:text-amber-900 transition-colors border border-stone-200/80 dark:border-stone-700 active:scale-95"
                  aria-label="Next quote"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Grid of License Types */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xs p-4 rounded-2xl border border-stone-200/60 dark:border-stone-800 text-center shadow-xs">
            <span className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wider block mb-1">Learner’s Licence</span>
            <p className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-medium">Computerized writing prep in Pretoria (R1,000 package)</p>
          </div>
          <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xs p-4 rounded-2xl border border-stone-200/60 dark:border-stone-800 text-center shadow-xs">
            <span className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wider block mb-1">Code 8 Light Vehicle</span>
            <p className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-medium">Manual & Automatic dual-control vehicle tuition</p>
          </div>
          <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xs p-4 rounded-2xl border border-stone-200/60 dark:border-stone-800 text-center shadow-xs">
            <span className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wider block mb-1">Code 10 Heavy Motor</span>
            <p className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-medium">R4,500 Full Package or flexible R300/hr lessons</p>
          </div>
        </div>
      </div>
    </section>
  );
};
