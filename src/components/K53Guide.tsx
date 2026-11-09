import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, CheckSquare, Square, Lightbulb, CheckCircle2, AlertCircle } from 'lucide-react';
import { K53_TEST_TIPS, COMPANY_DETAILS } from '../data/content';
import { K53TestTip } from '../types';

export const K53Guide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(K53_TEST_TIPS[0].id);
  const [completedSteps, setCompletedSteps] = useState<{ [key: string]: boolean }>({});

  const toggleStep = (stepKey: string) => {
    setCompletedSteps((prev) => ({ ...prev, [stepKey]: !prev[stepKey] }));
  };

  const currentTip = K53_TEST_TIPS.find((t) => t.id === activeTab) || K53_TEST_TIPS[0];

  return (
    <section id="k53-guide" className="py-20 bg-white dark:bg-stone-900 text-[#1a1c1c] dark:text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3.5 py-1 bg-amber-100 dark:bg-amber-950 text-[#735c00] dark:text-amber-400 font-geist font-bold text-xs uppercase tracking-widest rounded-full mb-3 border border-amber-300 dark:border-amber-800">
            K53 Exam Readiness
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight dark:text-stone-100">
            K53 Test Tips & Yard Guide
          </h2>
          <div className="h-1 w-20 bg-[#ffd700] mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-stone-300 font-normal">
            Master the official South African K53 driver testing standards. Review key steps for pre-trip inspection, yard parking maneuvers, and open road evaluation.
          </p>
        </motion.div>

        {/* Tab Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {K53_TEST_TIPS.map((tip) => (
            <button
              key={tip.id}
              onClick={() => setActiveTab(tip.id)}
              className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tip.id
                  ? 'bg-[#1a1c1c] dark:bg-amber-500 text-[#ffd700] dark:text-stone-950 shadow-md scale-105'
                  : 'bg-gray-100 dark:bg-stone-800 text-gray-700 dark:text-stone-300 hover:bg-gray-200 dark:hover:bg-stone-700'
              }`}
            >
              {tip.title}
            </button>
          ))}
        </motion.div>

        {/* Active Tip Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-gray-50 dark:bg-stone-950 border border-gray-200 dark:border-stone-800 rounded-2xl p-6 sm:p-10 shadow-sm max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start transition-colors"
        >
          
          <div className="md:col-span-8 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-stone-800 pb-4">
              <div>
                <span className="text-xs font-geist font-bold text-[#735c00] dark:text-amber-400 uppercase tracking-wider block">
                  Category: {currentTip.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-stone-100">
                  {currentTip.title} Step-by-Step
                </h3>
              </div>
              <div className="p-3 bg-amber-100 dark:bg-amber-950/80 rounded-xl text-[#735c00] dark:text-amber-400">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>

            {/* Steps Checklist */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-gray-500 dark:text-stone-400 uppercase tracking-wider font-geist">
                Interactive Checklist (Click to mark done):
              </p>

              {currentTip.steps.map((step, idx) => {
                const stepKey = `${currentTip.id}-${idx}`;
                const isChecked = !!completedSteps[stepKey];

                return (
                  <div
                    key={idx}
                    onClick={() => toggleStep(stepKey)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 text-gray-900 dark:text-stone-300 line-through'
                        : 'bg-white dark:bg-stone-900 border-gray-200 dark:border-stone-800 text-gray-800 dark:text-stone-200 hover:border-amber-300 dark:hover:border-amber-500'
                    }`}
                  >
                    <button className="mt-0.5 text-[#735c00] dark:text-amber-400 shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-[#735c00] dark:text-amber-400" />
                      ) : (
                        <Square className="w-5 h-5 text-gray-400 dark:text-stone-600" />
                      )}
                    </button>
                    <span className="text-sm font-medium leading-relaxed">
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Side Pro Tip Box */}
          <div className="md:col-span-4 space-y-4 bg-gradient-to-br from-[#1a1c1c] to-[#2b271b] text-white p-6 rounded-2xl border border-[#d4af37]/40 shadow-lg">
            <div className="flex items-center gap-2 text-[#ffd700] text-xs font-geist font-bold uppercase tracking-wider">
              <Lightbulb className="w-5 h-5 text-[#ffd700]" />
              <span>Inspector's Pro Tip</span>
            </div>

            <p className="text-sm text-gray-200 leading-relaxed italic">
              "{currentTip.proTip}"
            </p>

            <div className="pt-4 border-t border-white/10 text-xs text-gray-300 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffd700]" />
                <span>Practiced on actual K53 test yards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffd700]" />
                <span>Mock tests with strict scoring</span>
              </div>
            </div>

            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="block w-full bg-[#ffd700] hover:bg-[#d4af37] text-black font-bold py-2.5 text-xs text-center uppercase tracking-wider rounded transition-colors"
            >
              Book K53 Refresher Lesson
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
