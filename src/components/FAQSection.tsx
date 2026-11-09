import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQS, COMPANY_DETAILS } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-stone-950 text-[#1a1c1c] dark:text-stone-100 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3.5 py-1 bg-amber-100 dark:bg-amber-950 text-[#735c00] dark:text-amber-400 font-geist font-bold text-xs uppercase tracking-widest rounded-full mb-3 border border-amber-300 dark:border-amber-800">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight dark:text-stone-100">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-[#ffd700] mx-auto my-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-stone-300 font-normal">
            Everything you need to know about our K53 training programs, test car rentals, and booking process.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white dark:bg-stone-900 rounded-2xl border border-gray-200 dark:border-stone-800 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 font-bold text-gray-900 dark:text-stone-100 text-base sm:text-lg hover:text-[#735c00] dark:hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#735c00] dark:text-amber-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 dark:text-stone-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'transform rotate-180 text-[#735c00] dark:text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-gray-600 dark:text-stone-300 leading-relaxed border-t border-gray-100 dark:border-stone-800 animate-fadeIn font-normal">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-white dark:bg-stone-900 rounded-2xl border border-amber-200 dark:border-stone-800 p-6 sm:p-8 text-center max-w-2xl mx-auto shadow-sm space-y-4 transition-colors"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-stone-100">
            Have a question not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-stone-300">
            Our friendly instructors are ready to assist you. Call us or drop us a WhatsApp message!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="bg-[#1a1c1c] dark:bg-amber-500 text-white dark:text-stone-950 font-bold px-5 py-3 text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#ffd700] dark:text-stone-950" />
              Call {COMPANY_DETAILS.phone}
            </a>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-black font-extrabold px-5 py-3 text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
