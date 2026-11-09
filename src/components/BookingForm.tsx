import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Calendar, CheckCircle2, Clock, MapPin, User, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';

interface BookingFormProps {
  prefilledCode?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ prefilledCode = 'Code 8 (Light Motor Vehicle)' }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [courseSelection, setCourseSelection] = useState(prefilledCode);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (08:00 - 12:00)');
  const [suburb, setSuburb] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (prefilledCode) {
      setCourseSelection(prefilledCode);
    }
  }, [prefilledCode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'KG-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello King George Driving School!\n\nI would like to book a lesson:\n- Name: ${fullName || 'New Learner'}\n- Phone: ${phone || 'N/A'}\n- Course: ${courseSelection}\n- Location/Suburb: ${suburb || 'Not specified'}\n- Time Slot: ${preferredTime}\n- Notes: ${message || 'None'}`
    );
    window.open(`https://wa.me/27744940771?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-stone-900 text-[#1a1c1c] dark:text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="inline-block px-3.5 py-1 bg-amber-100 dark:bg-amber-950 text-[#735c00] dark:text-amber-400 font-geist font-bold text-xs uppercase tracking-widest rounded-full mb-3 border border-amber-300 dark:border-amber-800">
                Start Your Driving Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1a1c1c] dark:text-stone-100">
                Book Your Lesson Today
              </h2>
              <p className="text-base text-gray-600 dark:text-stone-300 mt-4 leading-relaxed font-normal">
                Take the first step toward getting your official driver's licence. Fill out the booking request form or reach out directly to our team via phone or WhatsApp.
              </p>
            </div>

            {/* Direct Contact Methods - NO EMAIL ADDRESS DISPLAYED! */}
            <div className="space-y-4 pt-2">
              
              {/* Phone card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-stone-800/80 border border-gray-200 dark:border-stone-700">
                <div className="w-12 h-12 rounded-xl bg-[#1a1c1c] dark:bg-amber-500 text-[#ffd700] dark:text-stone-950 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-geist font-bold text-gray-500 dark:text-stone-400 uppercase tracking-wider block">
                    Direct Call / Hotline
                  </span>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneClean}`}
                    className="text-lg font-bold text-gray-900 dark:text-stone-100 hover:text-[#735c00] dark:hover:text-amber-400 transition-colors"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-black flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 fill-black" />
                </div>
                <div>
                  <span className="text-[11px] font-geist font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider block">
                    WhatsApp Instant Booking
                  </span>
                  <a
                    href={COMPANY_DETAILS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-900 dark:text-emerald-300 hover:underline"
                  >
                    Chat on WhatsApp ({COMPANY_DETAILS.phone})
                  </a>
                </div>
              </div>

              {/* Accreditation Note */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#735c00] dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">100% Accredited Instruction:</strong>
                  All lessons conducted by registered K53 instructors with dual-control safety vehicles. Registration: {COMPANY_DETAILS.regNumber}.
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-gray-50 dark:bg-stone-950 p-6 sm:p-10 rounded-3xl border border-gray-200 dark:border-stone-800 shadow-md transition-colors"
          >
            
            {isSubmitted ? (
              <div className="text-center py-10 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-geist font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Booking Request Sent!
                  </span>
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-stone-100">
                    Thank You, {fullName || 'Learner'}!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-stone-300 max-w-md mx-auto">
                    Your booking reference is <strong className="text-gray-900 dark:text-stone-100 font-mono text-base">{bookingRef}</strong>. Our instructors will contact you on <strong className="text-gray-900 dark:text-stone-100">{phone}</strong> shortly to confirm your lesson schedule.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="bg-[#25D366] text-black font-extrabold px-6 py-3.5 text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    Speed Up Confirmation via WhatsApp
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gray-200 dark:bg-stone-800 text-gray-800 dark:text-stone-200 font-bold px-5 py-3.5 text-xs uppercase tracking-wider rounded"
                  >
                    Book Another Lesson
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="border-b border-gray-200 dark:border-stone-800 pb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-stone-100">
                    Driving Lesson Booking Form
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-stone-400 mt-1">
                    Fill in your details below. We will confirm your pickup location and time slot.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold font-geist text-gray-900 dark:text-stone-200 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 dark:text-stone-500 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Sipho Ndlovu"
                        className="w-full bg-white dark:bg-stone-900 border border-gray-300 dark:border-stone-700 text-gray-900 dark:text-stone-100 rounded-xl pl-9 pr-3 py-3 text-sm focus:border-[#735c00] dark:focus:border-amber-400 focus:ring-1 focus:ring-[#735c00] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold font-geist text-gray-900 dark:text-stone-200 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 dark:text-stone-500 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 074 494 0771"
                        className="w-full bg-white dark:bg-stone-900 border border-gray-300 dark:border-stone-700 text-gray-900 dark:text-stone-100 rounded-xl pl-9 pr-3 py-3 text-sm focus:border-[#735c00] dark:focus:border-amber-400 focus:ring-1 focus:ring-[#735c00] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold font-geist text-gray-900 dark:text-stone-200 uppercase tracking-wider mb-2">
                      Select Course / Vehicle Code *
                    </label>
                    <select
                      value={courseSelection}
                      onChange={(e) => setCourseSelection(e.target.value)}
                      className="w-full bg-white dark:bg-stone-900 border border-gray-300 dark:border-stone-700 text-gray-900 dark:text-stone-100 rounded-xl px-3 py-3 text-sm focus:border-[#735c00] dark:focus:border-amber-400 focus:ring-1 focus:ring-[#735c00] outline-none transition-colors"
                    >
                      <option value="Learner's Package R1000">Learner's Licence Package R1,000 (Study Material, Transport, Booking & Issuing)</option>
                      <option value="Code 8 (Light Motor Vehicle)">Code 8 Light Motor Vehicle (Manual / Automatic)</option>
                      <option value="Code 10 Full Package R4500">Code 10 Full Package R4,500 (10 Hours + Date Booking + Truck Hire)</option>
                      <option value="Code 10 Hourly Training">Code 10 Hourly Training (R300 / Hour)</option>
                      <option value="Driver's Test Vehicle Rental">Driver's Test Truck / Car Hire Only</option>
                    </select>
                  </div>

                  {/* Preferred Location / Suburb */}
                  <div>
                    <label className="block text-xs font-bold font-geist text-gray-900 dark:text-stone-200 uppercase tracking-wider mb-2">
                      Pickup Suburb / Location
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-gray-400 dark:text-stone-500 absolute left-3 top-3.5" />
                      <input
                        type="text"
                        value={suburb}
                        onChange={(e) => setSuburb(e.target.value)}
                        placeholder="e.g. Pretoria East, Pretoria West, Boksburg..."
                        className="w-full bg-white dark:bg-stone-900 border border-gray-300 dark:border-stone-700 text-gray-900 dark:text-stone-100 rounded-xl pl-9 pr-3 py-3 text-sm focus:border-[#735c00] dark:focus:border-amber-400 focus:ring-1 focus:ring-[#735c00] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Time slot preference */}
                  <div>
                    <label className="block text-xs font-bold font-geist text-gray-900 dark:text-stone-200 uppercase tracking-wider mb-2">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-gray-400 dark:text-stone-500 absolute left-3 top-3.5" />
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full bg-white dark:bg-stone-900 border border-gray-300 dark:border-stone-700 text-gray-900 dark:text-stone-100 rounded-xl pl-9 pr-3 py-3 text-sm focus:border-[#735c00] dark:focus:border-amber-400 outline-none transition-colors"
                      >
                        <option value="Morning (08:00 - 12:00)">Morning (08:00 - 12:00)</option>
                        <option value="Afternoon (12:00 - 16:00)">Afternoon (12:00 - 16:00)</option>
                        <option value="Late Afternoon (16:00 - 18:00)">Late Afternoon (16:00 - 18:00)</option>
                        <option value="Weekend Flexible">Weekend Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold font-geist text-gray-900 dark:text-stone-200 uppercase tracking-wider mb-2">
                      Additional Requirements / Experience Level
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your driving experience, test date if booked, or any special requests..."
                      className="w-full bg-white dark:bg-stone-900 border border-gray-300 dark:border-stone-700 text-gray-900 dark:text-stone-100 rounded-xl p-3 text-sm focus:border-[#735c00] dark:focus:border-amber-400 focus:ring-1 focus:ring-[#735c00] outline-none transition-colors"
                    ></textarea>
                  </div>

                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-[#ffd700] hover:bg-[#d4af37] text-black font-extrabold py-4 px-6 text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer text-center"
                  >
                    Submit Booking Request
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold py-4 px-6 text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    Send via WhatsApp
                  </button>
                </div>

              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};
