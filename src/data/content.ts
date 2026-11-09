import { CourseItem, BrandingImage, LearnerGalleryItem, K53TestTip, FAQItem, BranchLocation, TestimonialItem } from '../types';

export const COMPANY_DETAILS = {
  name: 'King George Driving School',
  tagline: 'Professional K53 Accredited Driver Training',
  phone: '074 494 0771',
  phoneClean: '0744940771',
  whatsappUrl: 'https://wa.me/27744940771',
  regNumber: '2006/224400/23',
  logoUrl: 'https://res.cloudinary.com/dka0498ns/image/upload/v1785370841/King_George_Driving_School_logo_0744940771_ig81ll.jpg',
  location: 'Pretoria & Boksburg, South Africa',
  hours: 'Mon - Sat: 07:00 - 18:00',
  adminContact: '074 494 0771 (WhatsApp / Call)',
};

export const BRANCHES: BranchLocation[] = [
  {
    id: 'b-pta-east',
    area: 'Pretoria East',
    address: '2 Ernies Pl, Lynnwood Ridge',
    suburb: 'Lynnwood Ridge',
    city: 'Pretoria East, 0184',
  },
  {
    id: 'b-pta-west',
    area: 'Pretoria West',
    address: 'Stand 3778, 64 Taita Falcon, Elandspoort Ext 1',
    suburb: 'Elandspoort Ext 1',
    city: 'Pretoria West, 0183',
  },
  {
    id: 'b-[#1a1c1c]ksburg',
    area: 'Boksburg',
    address: '3709 White Oryx Cres Street, Dawn Park Ext 07',
    suburb: 'Dawn Park Ext 07',
    city: 'Boksburg, 1459',
  },
];

export const LEARNERS_LICENCE_PACKAGE = {
  title: 'K53 Learner’s Licence Package',
  price: 'R1,000',
  priceValue: 1000,
  includes: [
    'Complete K53 Study Material & Mock Test Guides',
    'Transport (2 Trips included)',
    'Traffic Department Booking Date Arrangement',
    'Issuing of Learner’s Licence upon passing',
  ],
  requiredDocuments: [
    'Original South African ID',
    'Clear Copy of South African ID',
    '2 ID Photos (Black & White or Colour)',
    'R500 Deposit or Full Cash Payment',
    'Proof of Residence with your name (Not older than 3 months) OR Bank Statement',
  ],
  writingMethod: 'Computerized Test System',
  writingPlace: 'Any Traffic Testing Center around Pretoria',
  bookingDays: 'Monday to Friday',
  importantNotice: 'On the day of booking, please take a day off work to avoid time conflicts when visiting the Traffic Department.',
};

export const CODE_10_PRICING = {
  packageTitle: 'Code 10 Full Package',
  packagePrice: 'R4,500',
  packagePriceValue: 4500,
  packageIncludes: [
    '10 Practical Heavy Motor Vehicle Lessons (10 Hours)',
    'Traffic Department Test Date Booking Fee',
    'Heavy Vehicle Truck Hire on the Day of Testing',
  ],
  hourlyBreakdown: [
    { rate: '1 Hour Lesson', price: 'R300' },
    { rate: '5 Hours Lessons', price: 'R1,500' },
    { rate: '10 Hours Lessons', price: 'R3,000' },
    { rate: '15 Hours Lessons', price: 'R4,500' },
    { rate: 'Date Booking Only', price: 'R850' },
    { rate: 'Truck Hire on Test Day', price: 'R1,000' },
  ],
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    learnerName: 'Thabo Mokoena',
    licenseCode: 'Code 10 Heavy Motor',
    quote: 'Passed Code 10 with the R4500 full package! Truck hire on test day was seamless and the instructor was top class.',
    rating: 5,
    location: 'Pretoria West',
    dateTag: 'First Time Pass',
  },
  {
    id: 't2',
    learnerName: 'Zinhle Khumalo',
    licenseCode: 'Learner’s Licence',
    quote: 'Got my Learner’s licence with the R1000 package. The study material and transport to the testing center made it so easy!',
    rating: 5,
    location: 'Pretoria East',
    dateTag: 'Learner Passed',
  },
  {
    id: 't3',
    learnerName: 'Keagan Daniels',
    licenseCode: 'Code 8 Light Vehicle',
    quote: 'King George instructors are patient and precise with alley docking. Passed my yard and road test comfortably.',
    rating: 5,
    location: 'Boksburg',
    dateTag: 'Verified Pass',
  },
  {
    id: 't4',
    learnerName: 'Nomvula Cele',
    licenseCode: 'Code 10 Heavy Motor',
    quote: 'The 10-hour package gave me all the confidence required for heavy vehicle gear control on steep inclines.',
    rating: 5,
    location: 'Pretoria',
    dateTag: 'Logistics Ready',
  },
  {
    id: 't5',
    learnerName: 'Sipho Sithole',
    licenseCode: 'Code 8 Manual',
    quote: 'Excellent tuition from start to finish. I highly recommend King George Driving School for anyone in Gauteng!',
    rating: 5,
    location: 'Lynnwood Ridge',
    dateTag: 'License Holder',
  },
];

export const BRANDING_IMAGES: BrandingImage[] = [
  {
    id: 'b1',
    url: 'https://res.cloudinary.com/dka0498ns/image/upload/v1785370846/King_George_Driving_School_0744940771._gjtp6i.png',
    title: 'Professional Driving Instruction',
    caption: 'Dual-control, safe & certified training vehicles',
    category: 'branding',
  },
  {
    id: 'b2',
    url: 'https://res.cloudinary.com/dka0498ns/image/upload/v1785370913/King_George_Driving_School_0744940771_vu8f0x.jpg',
    title: 'K53 Test Preparation',
    caption: '100% Accredited K53 yard & road test coaching',
    category: 'fleet',
  },
  {
    id: 'b3',
    url: 'https://res.cloudinary.com/dka0498ns/image/upload/v1785370847/King_George_Driving_School_0744940771_ceolkk.png',
    title: 'King George Driving School Branding',
    caption: 'Trusted name in driver education across South Africa',
    category: 'branding',
  },
  {
    id: 'b4',
    url: 'https://res.cloudinary.com/dka0498ns/image/upload/v1785370917/King_George_Driving_School_0744940771_olxfo2.png',
    title: 'Heavy Vehicle Code 10 Training',
    caption: 'Career-ready Code 10 heavy vehicle driving mastery',
    category: 'instruction',
  },
];

export const LEARNERS_GALLERY: LearnerGalleryItem[] = [
  {
    id: 'lg1',
    url: 'https://res.cloudinary.com/dka0498ns/image/upload/v1785371246/King_George_Driving_School_learner_got_her_license_0744940771_jfvnsd.jpg',
    learnerName: 'Proud License Holder',
    licenseCode: 'Code 8 Light Vehicle',
    quote: 'Passed my K53 test on the first try! King George instructors are so patient and encouraging.',
    dateTag: 'Recently Passed',
  },
  {
    id: 'lg2',
    url: 'https://res.cloudinary.com/dka0498ns/image/upload/v1785371245/King_George_Driving_School_learner_got_thier_license_0744940771_kaqpuf.jpg',
    learnerName: 'Licensed & Confident',
    licenseCode: 'Code 8 Drivers License',
    quote: 'From zero confidence to passing with full points on my yard test. Best driving school!',
    dateTag: 'First Time Pass',
  },
  {
    id: 'lg3',
    url: 'https://res.cloudinary.com/dka0498ns/image/upload/v1785371245/King_George_Driving_School_learner_got_her_license_0744940771_mtn6ba.jpg',
    learnerName: 'Happy Graduate',
    licenseCode: 'Code 8 Manual',
    quote: 'The parking tips and reference points made alley docking so easy. Thank you King George!',
    dateTag: 'Successfully Passed',
  },
  {
    id: 'lg4',
    url: 'https://res.cloudinary.com/dka0498ns/image/upload/v1785371244/King_George_Driving_School_learner_got_license_0744940771_ddlbnf.jpg',
    learnerName: 'Achieved Goal',
    licenseCode: 'Code 10 Heavy Motor',
    quote: 'Got my Code 10 heavy vehicle licence! Opened up new career opportunities in logistics.',
    dateTag: 'Heavy License Passed',
  },
  {
    id: 'lg5',
    url: 'https://res.cloudinary.com/dka0498ns/image/upload/v1785371244/King_George_Driving_School_learner_go_his_license_0744940771_vz1qzd.jpg',
    learnerName: 'Successful Student',
    licenseCode: 'Code 8 Drivers',
    quote: 'Excellent tuition. The mock testing helped me overcome my exam jitters completely.',
    dateTag: 'Verified Pass',
  },
  {
    id: 'lg6',
    url: 'https://res.cloudinary.com/dka0498ns/image/upload/v1785371243/King_George_Driving_School_learner_got_his_license_0744940771_bdpbhe.jpg',
    learnerName: 'Delighted Driver',
    licenseCode: 'Code 10 Commercial',
    quote: 'The dual-control truck and thorough instructor gave me the edge I needed to pass.',
    dateTag: 'Career Ready',
  },
  {
    id: 'lg7',
    url: 'https://res.cloudinary.com/dka0498ns/image/upload/v1785371243/King_George_Driving_School_learner_got_her_license_0744940771_ysqavh.jpg',
    learnerName: 'Proud New Driver',
    licenseCode: 'Code 8 Automatic',
    quote: 'Warm, respectful, and highly professional service. I recommend King George to everyone!',
    dateTag: 'License Secured',
  },
];

export const COURSES: CourseItem[] = [
  {
    id: 'learners-package',
    code: 'Learner’s Package',
    title: 'K53 Learner’s Licence',
    subtitle: 'Computerized Test Prep & Booking',
    vehicleType: 'Theory & Computer Test Prep',
    description: 'All-inclusive R1000 Learner’s Licence package. Includes study materials, transport (2 trips), test date booking, and licence issuing upon passing.',
    features: [
      'Comprehensive K53 study guides & mock tests',
      'Transport included (2 trips to Traffic Dept)',
      'Official booking date arrangement',
      'Issuing of learner’s licence when you pass',
      'Computerized writing method guidance in Pretoria',
    ],
    popularFor: 'First-time learners, students & career starters',
    estimatedLessons: 'Computer test prep + 2 department trips',
    priceTag: 'R1,000 Package',
    badge: 'Essential First Step',
    accentColor: '#D4AF37',
  },
  {
    id: 'code-8',
    code: 'Code 8',
    title: 'Light Motor Vehicle',
    subtitle: 'Manual & Automatic Options',
    vehicleType: 'Sedans & Hatchbacks with Dual Controls',
    description: 'Comprehensive K53 practical training tailored for light motor vehicle driver\'s licence test preparation.',
    features: [
      'Dual-control dual-airbag training vehicles',
      'K53 Yard Test (Parallel, Alley Dock, 3-Point Turn, Incline)',
      'Road observation and hazard awareness coaching',
      'Flexible pay-per-lesson or discount packages',
      'Test day vehicle hire & instructor accompaniment',
    ],
    popularFor: 'High school students, varsity students & daily commuters',
    estimatedLessons: '10 - 15 Lessons recommended',
    accentColor: '#B8860B',
  },
  {
    id: 'code-10',
    code: 'Code 10',
    title: 'Heavy Motor Vehicle',
    subtitle: 'Rigid Cargo Trucks & Commercial',
    vehicleType: 'Heavy Rigid Cargo Trucks with Dual Controls',
    description: 'Specialized K53 heavy vehicle instruction. Get our popular R4,500 Full Package (10 lessons + Date Booking + Truck Hire) or flexible hourly training.',
    features: [
      'Full Package: 10 Lessons + Booking + Truck Hire (R4,500)',
      'Hourly rate: R300/hr (5hrs: R1500 | 10hrs: R3000)',
      'Date Booking: R850 | Truck Hire on Test Day: R1,000',
      'K53 heavy vehicle yard maneuvering & incline start',
      'Certified commercial vehicle instructors',
    ],
    popularFor: 'Logistics careers, truck drivers & commercial operators',
    estimatedLessons: '10 Hours Package (R4,500)',
    priceTag: 'R4,500 Full Package',
    badge: 'Best Commercial Value',
    accentColor: '#735C00',
  },
];

export const K53_TEST_TIPS: K53TestTip[] = [
  {
    id: 'k1',
    title: 'Pre-Trip Inspection',
    category: 'Pre-Trip Inspection',
    steps: [
      'Check under the vehicle for leaks or obstructions.',
      'Inspect tires for adequate tread, inflation, and visible damage.',
      'Check wipers, headlights, indicators, and side mirrors.',
      'Adjust seat and mirrors before turning the ignition key.',
    ],
    proTip: 'Clearly speak out your checks so the examiner registers every check point.',
  },
  {
    id: 'k2',
    title: 'Alley Docking (Yard)',
    category: 'Yard Test',
    steps: [
      'Position vehicle parallel to the parking bay.',
      'Check blind spots and indicate toward the docking bay.',
      'Engage reverse gear and perform 360-degree observation.',
      'Steer smoothly using reference poles until vehicle is centered.',
    ],
    proTip: 'Never touch the poles or curb. Take slow, controlled movements using clutch control.',
  },
  {
    id: 'k3',
    title: 'Parallel Parking (Yard)',
    category: 'Yard Test',
    steps: [
      'Align rear bumper with the front reference pole.',
      'Perform full 360-degree observation before moving.',
      'Turn steering fully towards the bay as you reverse slowly.',
      'Straighten wheels once vehicle is positioned within lines.',
    ],
    proTip: 'Keep your eyes moving between side mirrors and the rear window throughout the maneuver.',
  },
  {
    id: 'k4',
    title: 'Incline Start & Road Test',
    category: 'Road Test',
    steps: [
      'Apply handbrake firmly when stopping on a slope.',
      'Find the bite point with clutch while keeping revs steady.',
      'Check blind spots and mirrors before releasing handbrake.',
      'Check mirrors every 5-8 seconds while driving on open roads.',
    ],
    proTip: 'Exaggerate mirror checks with slight head movements so the examiner sees you looking.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is included in the R1,000 Learner’s Package?',
    answer: 'The R1,000 Learner’s Package includes study material, transport for 2 trips, date booking at the traffic department, and issuing of your learner’s licence when you pass (computerized exam around Pretoria).',
  },
  {
    question: 'What documents do I need to bring when booking my Learner’s Licence?',
    answer: 'You must bring: Original SA ID, Copy of ID, 2 ID Photos (Black & White or Colour), R500 deposit or cash, and Proof of Residence (under 3 months old) or Bank Statement.',
  },
  {
    question: 'What is included in the Code 10 R4,500 Full Package?',
    answer: 'The Code 10 R4,500 Package includes 10 hours (10 lessons) of practical heavy motor vehicle driving instruction, traffic department test date booking, and truck hire for your test day.',
  },
  {
    question: 'What if I want to pay per lesson for Code 10 instead of a package?',
    answer: 'For non-package students, Code 10 lesson rates are R300/hr (5 hrs = R1500, 10 hrs = R3000, 15 hrs = R4500). Date booking alone is R850 and Truck Hire on test day is R1,000.',
  },
  {
    question: 'Do you offer Code 14 training?',
    answer: 'Please take note that King George Driving School specializes strictly in Code 8 (Light Vehicle) and Code 10 (Heavy Motor Vehicle). We do not offer Code 14.',
  },
  {
    question: 'Where are your branch locations?',
    answer: 'We operate in 3 main areas: 1) Lynnwood Ridge, Pretoria East (2 Ernies Pl), 2) Elandspoort Ext 1, Pretoria West (Stand 3778, 64 Taita Falcon), and 3) Dawn Park Ext 07, Boksburg (3709 White Oryx Cres).',
  },
];
