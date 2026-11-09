import React from 'react';
import { X, MessageCircle, Phone, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/content';

interface LightboxModalProps {
  isOpen: boolean;
  url: string;
  title: string;
  subtitle?: string;
  quote?: string;
  onClose: () => void;
  onBookClick: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  url,
  title,
  subtitle,
  quote,
  onClose,
  onBookClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Close button top right */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 p-2.5 rounded-full transition-colors z-50 cursor-pointer"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-4xl w-full bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Left / Top Image Area */}
        <div className="md:w-2/3 bg-black flex items-center justify-center overflow-hidden min-h-[250px] sm:min-h-[400px]">
          <img
            src={url}
            alt={title}
            className="w-full h-full object-contain max-h-[70vh]"
          />
        </div>

        {/* Right / Bottom Info Panel */}
        <div className="md:w-1/3 p-6 sm:p-8 text-white flex flex-col justify-between space-y-6 overflow-y-auto">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffd700]/15 border border-[#ffd700]/40 text-[#ffd700] text-[10px] font-geist font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>King George Verified</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white leading-tight">
              {title}
            </h3>

            {subtitle && (
              <p className="text-xs font-geist font-bold text-[#ffd700] uppercase tracking-wide">
                {subtitle}
              </p>
            )}

            {quote && (
              <blockquote className="text-xs sm:text-sm text-gray-300 italic bg-white/5 p-4 rounded-xl border-l-2 border-[#ffd700]">
                "{quote}"
              </blockquote>
            )}

            <div className="space-y-2 text-xs text-gray-400 pt-2 border-t border-gray-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffd700]" />
                <span>K53 Accredited Driver Training</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffd700]" />
                <span>Code 8, 10 & 14 Licence Prep</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-gray-800">
            <button
              onClick={() => {
                onClose();
                onBookClick();
              }}
              className="w-full bg-[#ffd700] hover:bg-[#d4af37] text-black font-extrabold py-3 text-xs uppercase tracking-wider rounded-xl transition-colors text-center cursor-pointer"
            >
              Book Your Lesson Now
            </button>

            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold py-3 text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              WhatsApp Us
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
