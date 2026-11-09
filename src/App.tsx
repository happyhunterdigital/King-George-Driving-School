import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { TestimonialSlider } from './components/TestimonialSlider';
import { BrandingShowcase } from './components/BrandingShowcase';
import { LearnersGallery } from './components/LearnersGallery';
import { K53Guide } from './components/K53Guide';
import { PriceCalculator } from './components/PriceCalculator';
import { BookingForm } from './components/BookingForm';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { LearnerGalleryItem } from './types';

export default function App() {
  const [selectedCourseCode, setSelectedCourseCode] = useState<string>('Code 8 (Light Motor Vehicle)');
  
  // Lightbox state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
    subtitle?: string;
    quote?: string;
  }>({
    isOpen: false,
    url: '',
    title: '',
  });

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCourse = (code: string) => {
    setSelectedCourseCode(code.includes('Code') ? code : `Code ${code}`);
    scrollToContact();
  };

  const handleSelectLearner = (learner: LearnerGalleryItem) => {
    setLightboxState({
      isOpen: true,
      url: learner.url,
      title: `${learner.learnerName} - Licence Passed!`,
      subtitle: learner.licenseCode,
      quote: learner.quote,
    });
  };

  const handleSelectBrandingImage = (url: string, title: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      url,
      title,
      subtitle: 'Official King George Driving School Fleet',
      quote: caption,
    });
  };

  const handleCustomPackageBook = (details: { code: string; lessons: number; testCar: boolean; total: number }) => {
    setSelectedCourseCode(`${details.code} (${details.lessons} Lessons Package - Estimated R${details.total})`);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-sans">
      {/* Fixed Sticky Header */}
      <Header onBookClick={scrollToContact} />

      {/* Hero Banner */}
      <Hero onBookClick={scrollToContact} />

      {/* Main Training Programs (Learner's, Code 8, Code 10) */}
      <Courses onSelectCourse={handleSelectCourse} />

      {/* Testimonial Slider: Short success quotes from former learners */}
      <TestimonialSlider />

      {/* Fleet & Official Branding Showcase */}
      <BrandingShowcase onImageClick={handleSelectBrandingImage} />

      {/* Modern Mosaic Gallery: Our learners got their license */}
      <LearnersGallery
        onSelectLearner={handleSelectLearner}
        onBookClick={scrollToContact}
      />

      {/* K53 Test Tips & Yard Preparation */}
      <K53Guide />

      {/* Interactive Package & Price Estimator */}
      <PriceCalculator
        initialCode={selectedCourseCode.split(' ')[0] || 'Code 8'}
        onBookCustomPackage={handleCustomPackageBook}
      />

      {/* Booking Form (No Email) */}
      <BookingForm prefilledCode={selectedCourseCode} />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal for Gallery & Fleet Photos */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        url={lightboxState.url}
        title={lightboxState.title}
        subtitle={lightboxState.subtitle}
        quote={lightboxState.quote}
        onClose={() => setLightboxState({ isOpen: false, url: '', title: '' })}
        onBookClick={scrollToContact}
      />
    </div>
  );
}
