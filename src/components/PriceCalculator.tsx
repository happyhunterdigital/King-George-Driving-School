import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2, MessageCircle, Phone, BookOpen, Car, Truck, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS, LEARNERS_LICENCE_PACKAGE, CODE_10_PRICING } from '../data/content';

interface PriceCalculatorProps {
  initialCode?: string;
  onBookCustomPackage: (details: { code: string; lessons: number; testCar: boolean; total: number }) => void;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({ initialCode = 'Code 8', onBookCustomPackage }) => {
  const [selectedCode, setSelectedCode] = useState<string>(
    initialCode === 'Code 14' ? 'Code 10' : initialCode
  );
  const [transmission, setTransmission] = useState<'Manual' | 'Automatic'>('Manual');
  const [lessonCount, setLessonCount] = useState<number>(10);
  const [includeTestCar, setIncludeTestCar] = useState<boolean>(true);
  const [useOfficialCode10Package, setUseOfficialCode10Package] = useState<boolean>(true);

  // Price calculations
  const calculateTotal = () => {
    if (selectedCode === 'Learner’s Package') {
      return 1000;
    }

    if (selectedCode === 'Code 10') {
      if (useOfficialCode10Package && lessonCount === 10 && includeTestCar) {
        return 4500; // Code 10 Package R4500 (10 lessons + booking + truck hire)
      }
      const lessonRate = 300; // R300 P/H
      const bookingFee = 850; // Date booking
      const truckHireFee = includeTestCar ? 1000 : 0;
      return lessonCount * lessonRate + truckHireFee + (includeTestCar ? bookingFee : 0);
    }

    // Code 8
    const lessonRate = transmission === 'Automatic' ? 260 : 240;
    const testCarRate = includeTestCar ? 850 : 0;
    const baseCost = lessonCount * lessonRate;
    const discount = lessonCount >= 10 ? Math.round(baseCost * 0.08) : 0;
    return baseCost + testCarRate - discount;
  };

  const totalCost = calculateTotal();

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello King George Driving School! I would like to book:\n\n- Selected Option: ${selectedCode}${selectedCode === 'Code 8' ? ` (${transmission})` : ''}\n- Practical Lessons: ${selectedCode === 'Learner’s Package' ? 'Theory Prep + 2 Transport Trips' : `${lessonCount} Hours`}\n- Test Vehicle Rental: ${includeTestCar ? 'Yes' : 'No'}\n- Calculated Price: R${totalCost}\n\nPlease reach out to arrange my booking.`
    );
    window.open(`https://wa.me/27744940771?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-[#f9f9f9] dark:bg-stone-950 text-[#1a1c1c] dark:text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3.5 py-1 bg-amber-100 dark:bg-amber-950 text-[#735c00] dark:text-amber-400 font-geist font-bold text-xs uppercase tracking-widest rounded-full mb-3 border border-amber-300 dark:border-amber-800">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight dark:text-stone-100">
            Interactive Package & Rate Estimator
          </h2>
          <div className="h-1 w-20 bg-[#ffd700] mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-stone-300 font-normal">
            Calculate your driving lesson package according to your vehicle code, lesson count, and test rental requirements.
          </p>
        </motion.div>

        {/* Calculator Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-stone-900 rounded-3xl border border-gray-200 dark:border-stone-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto transition-colors"
        >
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
            
            {/* 1. Vehicle Code / Package */}
            <div>
              <label className="block text-xs font-bold font-geist text-gray-900 dark:text-stone-200 uppercase tracking-wider mb-3">
                1. Select Course / Package:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'Learner’s Package', label: 'Learner’s (R1000)', sub: 'Theory & Booking' },
                  { id: 'Code 8', label: 'Code 8', sub: 'Light Vehicle' },
                  { id: 'Code 10', label: 'Code 10', sub: 'Heavy Vehicle' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSelectedCode(opt.id);
                      if (opt.id === 'Code 10') {
                        setLessonCount(10);
                        setIncludeTestCar(true);
                        setUseOfficialCode10Package(true);
                      }
                    }}
                    className={`p-3.5 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                      selectedCode === opt.id
                        ? 'bg-[#1a1c1c] text-[#ffd700] border-[#1a1c1c] dark:bg-amber-500 dark:text-stone-950 dark:border-amber-500 shadow-md'
                        : 'bg-gray-50 dark:bg-stone-800 text-gray-700 dark:text-stone-300 border-gray-200 dark:border-stone-700 hover:bg-gray-100 dark:hover:bg-stone-700'
                    }`}
                  >
                    <span className="block uppercase tracking-wider">{opt.label}</span>
                    <span className="text-[10px] opacity-75 font-normal block">{opt.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Learner's Package Info Box */}
            {selectedCode === 'Learner’s Package' && (
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-2 text-xs text-amber-950">
                <div className="font-bold flex items-center gap-1.5 text-amber-900">
                  <BookOpen className="w-4 h-4 text-amber-700" />
                  Includes all-in-one Learner’s Licence services (R1,000):
                </div>
                <ul className="space-y-1 list-disc list-inside text-stone-700">
                  <li>Study Material & Mock Guides</li>
                  <li>Transport (2 trips to Traffic Department)</li>
                  <li>Booking date arrangement & licence issuing when passed</li>
                  <li>Computerized writing method around Pretoria</li>
                </ul>
              </div>
            )}

            {/* Code 10 Special Package Toggle */}
            {selectedCode === 'Code 10' && (
              <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                    Code 10 Full Package (R4,500)
                  </span>
                  <input
                    type="checkbox"
                    checked={useOfficialCode10Package}
                    onChange={(e) => {
                      setUseOfficialCode10Package(e.target.checked);
                      if (e.target.checked) {
                        setLessonCount(10);
                        setIncludeTestCar(true);
                      }
                    }}
                    className="w-4 h-4 accent-[#735c00] rounded cursor-pointer"
                  />
                </div>
                <p className="text-xs text-stone-600">
                  Includes 10 Hours of lessons, Date Booking (R850 value), and Truck Hire on testing day (R1000 value).
                </p>
              </div>
            )}

            {/* Transmission selector (Code 8) */}
            {selectedCode === 'Code 8' && (
              <div>
                <label className="block text-xs font-bold font-geist text-gray-900 uppercase tracking-wider mb-3">
                  Select Transmission:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['Manual', 'Automatic'] as const).map((trans) => (
                    <button
                      key={trans}
                      type="button"
                      onClick={() => setTransmission(trans)}
                      className={`p-3 rounded-xl border text-center font-semibold text-xs transition-all cursor-pointer ${
                        transmission === trans
                          ? 'bg-amber-100 border-[#735c00] text-[#735c00] font-bold'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {trans} Vehicle
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Lessons Slider (Code 8 & Code 10 Non-Package) */}
            {selectedCode !== 'Learner’s Package' && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold font-geist text-gray-900 uppercase tracking-wider">
                    Number of Practical Hours:
                  </label>
                  <span className="text-sm font-extrabold text-[#735c00] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    {lessonCount} {selectedCode === 'Code 10' ? 'Hours' : 'Lessons'}
                  </span>
                </div>

                <input
                  type="range"
                  min="3"
                  max="20"
                  step="1"
                  value={lessonCount}
                  onChange={(e) => {
                    setLessonCount(Number(e.target.value));
                    if (selectedCode === 'Code 10' && Number(e.target.value) !== 10) {
                      setUseOfficialCode10Package(false);
                    }
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#735c00]"
                />

                <div className="flex justify-between text-[11px] text-gray-500 dark:text-stone-400 font-geist mt-2">
                  <span>5 Hours</span>
                  <span>10 Hours (Recommended)</span>
                  <span>15+ Hours</span>
                </div>
              </div>
            )}

            {/* Test Vehicle Rental Checkbox */}
            {selectedCode !== 'Learner’s Package' && (
              <div className="pt-2 border-t border-gray-100 dark:border-stone-800">
                <label className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200 dark:border-stone-700 hover:border-amber-300 dark:hover:border-amber-500 transition-colors cursor-pointer bg-gray-50 dark:bg-stone-800">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeTestCar}
                      onChange={(e) => {
                        setIncludeTestCar(e.target.checked);
                        if (selectedCode === 'Code 10' && !e.target.checked) {
                          setUseOfficialCode10Package(false);
                        }
                      }}
                      className="w-4 h-4 accent-[#735c00] dark:accent-amber-400 rounded"
                    />
                    <div>
                      <span className="text-xs font-bold text-gray-900 dark:text-stone-200 block">
                        {selectedCode === 'Code 10' ? 'Truck Hire on Test Day & Booking' : 'Test Car Rental & Refresher'}
                      </span>
                      <span className="text-[11px] text-gray-500 dark:text-stone-400">
                        {selectedCode === 'Code 10' ? 'Includes date booking (R850) + Truck Hire (R1000)' : 'Vehicle rental on test day'}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-900 dark:text-amber-400 font-geist">
                    {selectedCode === 'Code 10' ? '+R1,850' : '+R850'}
                  </span>
                </label>
              </div>
            )}

            {/* Code 14 Note */}
            <div className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1.5 italic">
              <AlertCircle className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0" />
              <span>Note: We do not offer Code 14 courses.</span>
            </div>

          </div>

          {/* Price Summary Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#1a1c1c] text-white p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4af37]/20 text-[#ffd700] text-xs font-geist font-bold uppercase tracking-wider rounded-full mb-6 border border-[#d4af37]/40">
                <Calculator className="w-4 h-4 text-[#ffd700]" />
                <span>Estimated Quote</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-6">
                Package Cost Summary
              </h3>

              {/* Breakdown */}
              <div className="space-y-3 text-xs border-b border-gray-800 pb-6 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Selected Option</span>
                  <span className="font-bold text-white">{selectedCode}</span>
                </div>

                {selectedCode === 'Learner’s Package' ? (
                  <div className="flex justify-between text-gray-300">
                    <span>Study material, 2 trips transport & booking</span>
                    <span className="font-bold text-white">R1,000</span>
                  </div>
                ) : selectedCode === 'Code 10' && useOfficialCode10Package && lessonCount === 10 && includeTestCar ? (
                  <div className="flex justify-between text-gray-300">
                    <span>Code 10 Full Package (10hrs + Booking + Truck Hire)</span>
                    <span className="font-bold text-white">R4,500</span>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between text-gray-300">
                      <span>
                        Practical Lessons ({lessonCount} hrs @ {selectedCode === 'Code 10' ? 'R300' : transmission === 'Automatic' ? 'R260' : 'R240'}/hr)
                      </span>
                      <span className="font-bold text-white">
                        R{lessonCount * (selectedCode === 'Code 10' ? 300 : transmission === 'Automatic' ? 260 : 240)}
                      </span>
                    </div>

                    {includeTestCar && (
                      <div className="flex justify-between text-gray-300">
                        <span>{selectedCode === 'Code 10' ? 'Truck Hire & Date Booking' : 'Test Car Rental'}</span>
                        <span className="font-bold text-white">
                          R{selectedCode === 'Code 10' ? 1850 : 850}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Total Display */}
              <div className="bg-gradient-to-br from-[#2c281a] to-[#1a1c1c] p-4 rounded-2xl border border-[#d4af37]/40 mb-6">
                <span className="text-xs text-gray-400 font-geist uppercase tracking-widest block mb-1">
                  Estimated Total Investment:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#ffd700] tracking-tight">
                  R{totalCost.toLocaleString()}
                </div>
                <p className="text-[11px] text-gray-400 mt-1">
                  *Admin Officer Contact: {COMPANY_DETAILS.phone}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-gray-800">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold py-3.5 px-4 text-xs uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                Book Package on WhatsApp
              </button>

              <button
                onClick={() =>
                  onBookCustomPackage({
                    code: selectedCode,
                    lessons: lessonCount,
                    testCar: includeTestCar,
                    total: totalCost,
                  })
                }
                className="w-full bg-[#ffd700] hover:bg-[#d4af37] text-black font-bold py-3 px-4 text-xs uppercase tracking-wider rounded transition-all cursor-pointer"
              >
                Send Booking Request Form
              </button>

              <div className="text-center pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="text-xs text-gray-400 hover:text-[#ffd700] inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ffd700]" />
                  <span>Call Admin Officer: {COMPANY_DETAILS.phone}</span>
                </a>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

