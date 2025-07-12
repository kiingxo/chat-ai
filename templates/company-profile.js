/**
 * Company Profile Template for ChatPilot
 * Customize this template with your company information
 */

const COMPANY_PROFILE = {
  // Basic Company Information
  company: {
    name: "TechFlow",
    industry: "Technology & Electronics",
    founded: "2020",
    website: "https://techflow.com",
    email: "hello@techflow.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Tech City, TC 12345",
    description: "Leading provider of wireless charging solutions and smart electronics for modern lifestyles."
  },

  // Products & Services
  products: [
    {
      name: "Wireless Chargers",
      description: "Fast wireless charging pads and stands for smartphones and devices",
      priceRange: "$29.99 - $89.99",
      features: ["15W fast charging", "Multi-device support", "LED indicators", "Non-slip design"]
    },
    {
      name: "Smart Earbuds",
      description: "Premium wireless earbuds with noise cancellation and long battery life",
      priceRange: "$79.99 - $199.99",
      features: ["Active noise cancellation", "30-hour battery life", "Water resistant", "Touch controls"]
    },
    {
      name: "Travel Adapters",
      description: "Universal travel adapters for international use",
      priceRange: "$19.99 - $49.99",
      features: ["150+ countries support", "USB-C fast charging", "Compact design", "Safety certified"]
    }
  ],

  // Shipping & Returns
  shipping: {
    standard: "2-4 business days",
    express: "1-2 business days",
    international: "5-10 business days",
    freeShippingThreshold: "$50",
    returnPolicy: "30-day money-back guarantee",
    warranty: "1-year manufacturer warranty"
  },

  // Customer Support
  support: {
    hours: "Monday-Friday: 9AM-6PM EST",
    email: "support@techflow.com",
    phone: "+1 (555) 123-4567",
    liveChat: "Available on website",
    responseTime: "Within 24 hours"
  },

  // Frequently Asked Questions
  faqs: [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 2-4 business days. Express shipping (1-2 days) is available for an additional fee. International shipping takes 5-10 business days."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day money-back guarantee. Items must be in original condition with all packaging. Return shipping is free for defective items."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship to over 150 countries. International shipping takes 5-10 business days and customs fees may apply."
    },
    {
      question: "Are your products covered by warranty?",
      answer: "All products come with a 1-year manufacturer warranty. Extended warranties are available for purchase."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us via email at support@techflow.com, phone at +1 (555) 123-4567, or through live chat on our website during business hours (9AM-6PM EST)."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes! We offer volume discounts for orders over 10 units. Contact our sales team at sales@techflow.com for custom pricing."
    }
  ],

  // Company Values & Mission
  mission: "To make cutting-edge technology accessible and affordable for everyone, while providing exceptional customer service and innovative solutions.",
  
  values: [
    "Innovation in every product",
    "Customer satisfaction first",
    "Quality and reliability",
    "Environmental responsibility"
  ],

  // Social Media & Reviews
  social: {
    facebook: "https://facebook.com/techflow",
    twitter: "https://twitter.com/techflow",
    instagram: "https://instagram.com/techflow",
    linkedin: "https://linkedin.com/company/techflow"
  },

  // Awards & Certifications
  awards: [
    "Best Wireless Charger 2023 - Tech Awards",
    "Customer Choice Award 2022",
    "ISO 9001 Quality Management Certified",
    "Energy Star Certified Products"
  ],

  // Business Hours
  hours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed"
  }
};

// Helper function to format company data for ChatPilot
function formatCompanyData() {
  return `
Company: ${COMPANY_PROFILE.company.name}
Industry: ${COMPANY_PROFILE.company.industry}
Founded: ${COMPANY_PROFILE.company.founded}
Website: ${COMPANY_PROFILE.company.website}
Email: ${COMPANY_PROFILE.company.email}
Phone: ${COMPANY_PROFILE.company.phone}
Address: ${COMPANY_PROFILE.company.address}

Description: ${COMPANY_PROFILE.company.description}

Products & Services:
${COMPANY_PROFILE.products.map(product => 
  `- ${product.name}: ${product.description} (${product.priceRange})
   Features: ${product.features.join(', ')}`
).join('\n')}

Shipping Information:
- Standard: ${COMPANY_PROFILE.shipping.standard}
- Express: ${COMPANY_PROFILE.shipping.express}
- International: ${COMPANY_PROFILE.shipping.international}
- Free shipping on orders over ${COMPANY_PROFILE.shipping.freeShippingThreshold}
- Return Policy: ${COMPANY_PROFILE.shipping.returnPolicy}
- Warranty: ${COMPANY_PROFILE.shipping.warranty}

Customer Support:
- Hours: ${COMPANY_PROFILE.support.hours}
- Email: ${COMPANY_PROFILE.support.email}
- Phone: ${COMPANY_PROFILE.support.phone}
- Response Time: ${COMPANY_PROFILE.support.responseTime}

Mission: ${COMPANY_PROFILE.mission}

Company Values: ${COMPANY_PROFILE.values.join(', ')}

Business Hours:
${Object.entries(COMPANY_PROFILE.hours).map(([day, hours]) => 
  `${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours}`
).join('\n')}
  `.trim();
}

// Export for use in ChatPilot
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COMPANY_PROFILE, formatCompanyData };
} else if (typeof window !== 'undefined') {
  window.COMPANY_PROFILE = COMPANY_PROFILE;
  window.formatCompanyData = formatCompanyData;
} 