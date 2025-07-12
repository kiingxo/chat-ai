/**
 * Healthcare Profile Template for ChatPilot
 * Customize this template with your healthcare practice information
 */

const HEALTHCARE_PROFILE = {
  // Basic Practice Information
  practice: {
    name: "Wellness Medical Center",
    type: "Primary Care & Family Medicine",
    established: "2015",
    website: "https://wellnessmedical.com",
    email: "info@wellnessmedical.com",
    phone: "+1 (555) 456-7890",
    address: "789 Health Avenue, Medical District, MD 67890",
    description: "Comprehensive primary care and family medicine practice providing personalized healthcare for all ages."
  },

  // Medical Services
  services: {
    primaryCare: [
      "Annual physical examinations",
      "Preventive care and screenings",
      "Chronic disease management",
      "Immunizations and vaccinations",
      "Health education and counseling"
    ],
    specialtyServices: [
      "Women's health and gynecology",
      "Pediatric care",
      "Geriatric care",
      "Mental health services",
      "Nutrition counseling"
    ],
    diagnosticServices: [
      "Laboratory testing",
      "X-ray and imaging",
      "EKG and cardiac monitoring",
      "Spirometry testing",
      "Blood pressure monitoring"
    ],
    procedures: [
      "Minor surgical procedures",
      "Skin biopsies",
      "Joint injections",
      "Wound care",
      "Sutures and wound closure"
    ]
  },

  // Insurance & Payment
  insurance: {
    accepted: [
      "Blue Cross Blue Shield",
      "Aetna",
      "Cigna",
      "UnitedHealthcare",
      "Medicare",
      "Medicaid",
      "Tricare"
    ],
    payment: {
      copay: "Varies by insurance plan",
      selfPay: "Sliding scale available",
      paymentPlans: "Available for uninsured patients",
      methods: ["Cash", "Check", "Credit Card", "Debit Card"]
    }
  },

  // Appointments & Scheduling
  appointments: {
    scheduling: {
      phone: "+1 (555) 456-7890",
      online: "https://wellnessmedical.com/appointments",
      sameDay: "Available for urgent care",
      advanceBooking: "Up to 3 months in advance"
    },
    hours: {
      monday: "8:00 AM - 6:00 PM",
      tuesday: "8:00 AM - 6:00 PM",
      wednesday: "8:00 AM - 6:00 PM",
      thursday: "8:00 AM - 6:00 PM",
      friday: "8:00 AM - 5:00 PM",
      saturday: "9:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    urgentCare: {
      available: "Same-day appointments for urgent issues",
      hours: "During regular business hours",
      afterHours: "On-call physician available"
    }
  },

  // Medical Staff
  staff: [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Family Medicine",
      education: "MD - University of Medical Sciences",
      experience: "15+ years",
      languages: ["English", "Spanish"]
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Internal Medicine",
      education: "MD - Medical College",
      experience: "12+ years",
      languages: ["English", "Mandarin"]
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      education: "MD - Children's Medical University",
      experience: "8+ years",
      languages: ["English", "Spanish"]
    }
  ],

  // Patient Information
  patientInfo: {
    newPatients: {
      welcome: "We welcome new patients!",
      forms: "Available online or in-office",
      firstVisit: "Please arrive 15 minutes early",
      documents: ["Photo ID", "Insurance card", "Medical history", "Current medications"]
    },
    existingPatients: {
      portal: "Patient portal available for online access",
      refills: "Prescription refills through portal or phone",
      records: "Medical records available upon request"
    }
  },

  // COVID-19 & Safety
  covid19: {
    protocols: [
      "Masks required for all patients and staff",
      "Enhanced cleaning and sanitization",
      "Social distancing in waiting areas",
      "Temperature screening upon entry",
      "Virtual appointments available"
    ],
    testing: "COVID-19 testing available",
    vaccination: "COVID-19 and flu vaccinations available"
  },

  // Frequently Asked Questions
  faqs: [
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment by calling us at +1 (555) 456-7890 or booking online at wellnessmedical.com/appointments. We offer same-day appointments for urgent care needs."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Medicare, and Medicaid. We also offer sliding scale payments for uninsured patients."
    },
    {
      question: "Do you offer virtual appointments?",
      answer: "Yes! We offer telemedicine appointments for many types of visits. You can schedule a virtual appointment through our patient portal or by calling our office."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a photo ID, insurance card, list of current medications, and any relevant medical records. New patient forms are available online to complete before your visit."
    },
    {
      question: "How do I get prescription refills?",
      answer: "Prescription refills can be requested through our patient portal or by calling our office. Please allow 24-48 hours for processing."
    },
    {
      question: "Do you offer urgent care services?",
      answer: "Yes, we offer same-day appointments for urgent care needs during regular business hours. For after-hours emergencies, please call our on-call physician or visit the emergency room."
    }
  ],

  // Health Resources
  resources: {
    patientPortal: "https://wellnessmedical.com/portal",
    healthEducation: "Monthly health seminars and educational materials",
    communityOutreach: "Free health screenings and community events",
    emergencyContacts: {
      emergency: "911",
      poisonControl: "1-800-222-1222",
      mentalHealth: "988"
    }
  },

  // Certifications & Accreditations
  certifications: [
    "Joint Commission Accredited",
    "NCQA Patient-Centered Medical Home",
    "American Medical Association Member",
    "State Medical Board Licensed"
  ],

  // Special Programs
  programs: [
    "Chronic Disease Management Program",
    "Weight Management Program",
    "Smoking Cessation Program",
    "Diabetes Education Program",
    "Senior Wellness Program"
  ]
};

// Helper function to format healthcare data for ChatPilot
function formatHealthcareData() {
  return `
Practice: ${HEALTHCARE_PROFILE.practice.name}
Type: ${HEALTHCARE_PROFILE.practice.type}
Established: ${HEALTHCARE_PROFILE.practice.established}
Website: ${HEALTHCARE_PROFILE.practice.website}
Email: ${HEALTHCARE_PROFILE.practice.email}
Phone: ${HEALTHCARE_PROFILE.practice.phone}
Address: ${HEALTHCARE_PROFILE.practice.address}

Description: ${HEALTHCARE_PROFILE.practice.description}

Services:
Primary Care:
${HEALTHCARE_PROFILE.services.primaryCare.map(service => 
  `- ${service}`
).join('\n')}

Specialty Services:
${HEALTHCARE_PROFILE.services.specialtyServices.map(service => 
  `- ${service}`
).join('\n')}

Diagnostic Services:
${HEALTHCARE_PROFILE.services.diagnosticServices.map(service => 
  `- ${service}`
).join('\n')}

Medical Staff:
${HEALTHCARE_PROFILE.staff.map(doctor => 
  `- ${doctor.name}, ${doctor.specialty} (${doctor.experience})`
).join('\n')}

Operating Hours:
${Object.entries(HEALTHCARE_PROFILE.appointments.hours).map(([day, hours]) => 
  `${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours}`
).join('\n')}

Appointments:
- Phone: ${HEALTHCARE_PROFILE.appointments.scheduling.phone}
- Online: ${HEALTHCARE_PROFILE.appointments.scheduling.online}
- Same-day: ${HEALTHCARE_PROFILE.appointments.scheduling.sameDay}

Insurance Accepted:
${HEALTHCARE_PROFILE.insurance.accepted.join(', ')}

Payment Methods:
${HEALTHCARE_PROFILE.insurance.payment.methods.join(', ')}

COVID-19 Protocols:
${HEALTHCARE_PROFILE.covid19.protocols.map(protocol => 
  `- ${protocol}`
).join('\n')}

Patient Portal: ${HEALTHCARE_PROFILE.resources.patientPortal}

Emergency Contacts:
- Emergency: ${HEALTHCARE_PROFILE.resources.emergencyContacts.emergency}
- Poison Control: ${HEALTHCARE_PROFILE.resources.emergencyContacts.poisonControl}
- Mental Health: ${HEALTHCARE_PROFILE.resources.emergencyContacts.mentalHealth}

Special Programs:
${HEALTHCARE_PROFILE.programs.map(program => 
  `- ${program}`
).join('\n')}

Certifications: ${HEALTHCARE_PROFILE.certifications.join(', ')}
  `.trim();
}

// Export for use in ChatPilot
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HEALTHCARE_PROFILE, formatHealthcareData };
} else if (typeof window !== 'undefined') {
  window.HEALTHCARE_PROFILE = HEALTHCARE_PROFILE;
  window.formatHealthcareData = formatHealthcareData;
} 