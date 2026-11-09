import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Car, Truck, Award, ArrowRight, BookOpen, AlertCircle, FileText, Calendar, MapPin, Monitor } from 'lucide-react';
import { COURSES, COMPANY_DETAILS, LEARNERS_LICENCE_PACKAGE, CODE_10_PRICING } from '../data/content';
import { CourseItem } from '../types';

interface CoursesProps {
  onSelectCourse: (courseCode: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
  const [selectedCourseModal, setSelectedCourseModal] = useState<CourseItem | null>(null);
  const [showDocModal, setShowDocModal] = useState(false);

  return (
    <section id="courses" className="py-20 bg-[#f9f9f9] dark:bg-stone-950 text-[#1a1c1c] dark:text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3.5 py-1 bg-[#d4af37]/15 text-[#735c00] dark:text-amber-400 font-geist font-bold text-xs uppercase tracking-widest rounded-full mb-3 border border-[#d4af37]/30">
            Official K53 Packages & Rates
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1a1c1c] dark:text-stone-100">
            Accredited Training Programs & Transparent Pricing
          </h2>
          <div className="h-1 w-20 bg-[#ffd700] mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-stone-300 font-normal">
            From your Learner’s Licence booking to Code 8 and Code 10 driver training packages in Pretoria & Boksburg. Professional instructors, dual-control vehicles, and clear pricing.
          </p>
        </motion.div>

        {/* Highlight Banner for Learners Package R1000 & Documents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-amber-200 dark:border-amber-500/30 shadow-lg relative overflow-hidden transition-colors"
        >

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-100/50 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-amber-900 text-amber-100 text-xs font-bold rounded-full uppercase tracking-wider">
                  Special Learner’s Package
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-extrabold rounded-full">
                  R1,000 Total
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                🔴 K53 Learner’s Licence Package (R1000)
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Includes Study Material, Transport (2 trips), Booking Date arrangement, and Issuing of your Learner’s Licence when you pass! (Writing method: Computerized around Pretoria, Monday - Friday).
              </p>

              {/* Quick document items preview */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-stone-700">
                <span className="inline-flex items-center gap-1 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200">
                  <FileText className="w-3.5 h-3.5 text-amber-700" /> Original ID & Copy
                </span>
                <span className="inline-flex items-center gap-1 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200">
                  <FileText className="w-3.5 h-3.5 text-amber-700" /> 2 ID Photos
                </span>
                <span className="inline-flex items-center gap-1 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200">
                  <FileText className="w-3.5 h-3.5 text-amber-700" /> R500 Deposit or Cash
                </span>
                <span className="inline-flex items-center gap-1 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200">
                  <FileText className="w-3.5 h-3.5 text-amber-700" /> Proof of Residence / Bank Statement
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => setShowDocModal(true)}
                className="bg-amber-100 hover:bg-amber-200 text-amber-950 px-5 py-3 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors border border-amber-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-800" />
                <span>View Booking Requirements</span>
              </button>
              <button
                onClick={() => onSelectCourse('Learner’s Package')}
                className="bg-stone-900 hover:bg-amber-800 text-white px-6 py-3 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Learner’s R1000</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => {
            const isLearners = course.id === 'learners-package';
            const isCode8 = course.code === 'Code 8';
            const isCode10 = course.code === 'Code 10';

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border-t-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative group bg-white dark:bg-stone-900 dark:border-stone-800"
                style={{ borderTopColor: course.accentColor }}
              >
                {/* Badge if present */}
                {course.badge && (
                  <div className="absolute top-4 right-4 bg-[#ffd700] text-[#1a1c1c] text-[10px] font-geist font-extrabold px-2.5 py-1 uppercase tracking-wider rounded-full shadow-sm">
                    {course.badge}
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* Icon & Code Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-amber-50 dark:bg-stone-800 text-[#735c00] dark:text-amber-400 border border-amber-200/60 dark:border-stone-700 flex items-center justify-center shadow-xs">
                      {isLearners ? (
                        <BookOpen className="w-8 h-8 text-[#735c00] dark:text-amber-400" />
                      ) : isCode8 ? (
                        <Car className="w-8 h-8 text-[#735c00] dark:text-amber-400" />
                      ) : (
                        <Truck className="w-8 h-8 text-[#735c00] dark:text-amber-400" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-geist font-bold text-[#735c00] dark:text-amber-400 uppercase tracking-wider block">
                        {course.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-[#1a1c1c] dark:text-stone-100">
                        {course.code}
                      </h3>
                      {course.priceTag && (
                        <span className="text-xs font-extrabold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/80 px-2 py-0.5 rounded mt-1 inline-block">
                          {course.priceTag}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-gray-500 dark:text-stone-400 uppercase tracking-wide mb-3">
                    Type: {course.vehicleType}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-stone-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-gray-100 dark:border-stone-800">
                    <p className="text-xs font-bold text-gray-900 dark:text-stone-200 uppercase tracking-wider font-geist">
                      What's Included:
                    </p>
                    {course.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-stone-300">
                        <CheckCircle2 className="w-4 h-4 text-[#735c00] dark:text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recommendation note */}
                  <div className="bg-amber-50/60 dark:bg-stone-800/80 border border-amber-100 dark:border-stone-700 rounded-lg p-3 text-xs text-amber-900 dark:text-amber-300 font-medium mb-2">
                    💡 <strong>Option:</strong> {course.estimatedLessons}
                  </div>
                </div>

                {/* Bottom CTA Area */}
                <div className="p-6 bg-gray-50 dark:bg-stone-900/90 border-t border-gray-100 dark:border-stone-800 flex flex-col gap-2">
                  <button
                    onClick={() => onSelectCourse(course.code)}
                    className="w-full bg-[#1a1c1c] dark:bg-amber-500 dark:text-stone-950 hover:bg-[#735c00] dark:hover:bg-amber-400 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors py-3 px-4 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book {course.code}</span>
                    <ArrowRight className="w-4 h-4 text-[#ffd700] dark:text-stone-950" />
                  </button>

                  <button
                    onClick={() => setSelectedCourseModal(course)}
                    className="w-full bg-white dark:bg-stone-800 hover:bg-gray-100 dark:hover:bg-stone-700 text-gray-700 dark:text-stone-200 border border-gray-200 dark:border-stone-700 py-2 px-4 font-semibold text-xs rounded transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Code 10 Non-Package Breakdown Table */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded">
                Hourly & Individual Pricing Breakdown
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                Code 10 Non-Package Pay-As-You-Go Rates
              </h3>
            </div>
            <div className="text-xs text-stone-500 font-medium">
              Admin Officer Contact: <strong className="text-stone-900 font-bold">{COMPANY_DETAILS.phone}</strong>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
            {CODE_10_PRICING.hourlyBreakdown.map((item, index) => (
              <div key={index} className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/80">
                <span className="text-xs font-semibold text-stone-600 block mb-1">{item.rate}</span>
                <span className="text-base font-extrabold text-amber-900">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-950 font-medium">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span><strong>Please note:</strong> King George Driving School specializes exclusively in Code 8 & Code 10. <strong>There is no Code 14 training.</strong></span>
            </div>
            <button
              onClick={() => onSelectCourse('Code 10')}
              className="bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 font-bold text-xs uppercase tracking-wider rounded-lg shrink-0 transition-colors"
            >
              Book Code 10 Now
            </button>
          </div>
        </div>

      </div>

      {/* Booking Documents Requirement Modal */}
      {showDocModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative animate-fadeIn max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-stone-100 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                  Official Checklist
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                  Learner’s Booking Documents
                </h3>
              </div>
              <button
                onClick={() => setShowDocModal(false)}
                className="text-stone-400 hover:text-stone-700 text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200">
                <h4 className="text-xs font-extrabold text-amber-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-amber-800" />
                  Required Documents during booking:
                </h4>
                <ul className="space-y-2 text-xs text-stone-800">
                  {LEARNERS_LICENCE_PACKAGE.requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block mb-0.5 font-bold flex items-center gap-1">
                    <Monitor className="w-3.5 h-3.5 text-amber-700" /> Method of Writing
                  </strong>
                  <span className="text-stone-600">{LEARNERS_LICENCE_PACKAGE.writingMethod}</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block mb-0.5 font-bold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" /> Place of Writing
                  </strong>
                  <span className="text-stone-600">{LEARNERS_LICENCE_PACKAGE.writingPlace}</span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                <strong className="text-stone-900 block mb-0.5 font-bold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-700" /> Days of Booking
                </strong>
                <span className="text-stone-600">{LEARNERS_LICENCE_PACKAGE.bookingDays}</span>
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-950">
                <strong>NB / Important Notice:</strong> On the day of booking, please take a day off from work to avoid disagreement when a lot of time is spent at the Traffic Department.
              </div>
            </div>

            <div className="pt-3 flex gap-3">
              <button
                onClick={() => {
                  setShowDocModal(false);
                  onSelectCourse('Learner’s Package');
                }}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer text-center shadow-sm"
              >
                Proceed to Book R1000 Package
              </button>
              <button
                onClick={() => setShowDocModal(false)}
                className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold px-4 py-3 text-xs rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Course Detail Modal */}
      {selectedCourseModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative animate-fadeIn max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-gray-100 pb-4">
              <div>
                <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider block font-geist">
                  {selectedCourseModal.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedCourseModal.code} Overview
                </h3>
              </div>
              <button
                onClick={() => setSelectedCourseModal(null)}
                className="text-gray-400 hover:text-gray-700 text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {selectedCourseModal.description}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2 font-geist">
                Key Modules Included:
              </h4>
              <ul className="space-y-2 text-xs text-gray-700">
                {selectedCourseModal.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#735c00]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200/60 text-xs text-amber-900 space-y-1">
              <p><strong>Target Audience:</strong> {selectedCourseModal.popularFor}</p>
              <p><strong>Suggested Pace:</strong> {selectedCourseModal.estimatedLessons}</p>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  const code = selectedCourseModal.code;
                  setSelectedCourseModal(null);
                  onSelectCourse(code);
                }}
                className="flex-1 bg-[#ffd700] hover:bg-[#d4af37] text-black font-bold py-3 text-xs uppercase tracking-wider rounded transition-colors cursor-pointer text-center"
              >
                Book This Course
              </button>
              <button
                onClick={() => setSelectedCourseModal(null)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-4 py-3 text-xs rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

