/**
 * Real Estate Profile Template for ChatPilot
 * Customize this template with your real estate agency information
 */

const REAL_ESTATE_PROFILE = {
  // Basic Agency Information
  agency: {
    name: "Premier Real Estate Group",
    type: "Residential & Commercial Real Estate",
    established: "2010",
    website: "https://premierrealestate.com",
    email: "info@premierrealestate.com",
    phone: "+1 (555) 321-0987",
    address: "321 Market Street, Business District, BD 13579",
    description: "Premier real estate agency specializing in residential and commercial properties with personalized service and local market expertise."
  },

  // Services Offered
  services: {
    residential: [
      "Home buying and selling",
      "Property valuations",
      "Market analysis",
      "Home staging consultation",
      "Negotiation support",
      "Closing assistance"
    ],
    commercial: [
      "Commercial property sales",
      "Office space leasing",
      "Retail property management",
      "Investment property consulting",
      "Property development",
      "Tenant representation"
    ],
    additional: [
      "Property management",
      "Rental services",
      "Investment consulting",
      "Market research",
      "Legal referral services",
      "Home inspection coordination"
    ]
  },

  // Featured Properties
  featuredProperties: [
    {
      type: "Single Family Home",
      address: "123 Oak Street, Suburbia",
      price: "$450,000",
      beds: 4,
      baths: 3,
      sqft: 2800,
      features: ["Updated kitchen", "Finished basement", "Large backyard", "2-car garage"],
      status: "For Sale"
    },
    {
      type: "Condo",
      address: "456 Downtown Ave, City Center",
      price: "$275,000",
      beds: 2,
      baths: 2,
      sqft: 1200,
      features: ["City views", "Gym access", "Concierge", "Parking included"],
      status: "For Sale"
    },
    {
      type: "Commercial Space",
      address: "789 Business Blvd, Office Park",
      price: "$850,000",
      sqft: 5000,
      features: ["High traffic location", "Parking lot", "Loading dock", "Modern HVAC"],
      status: "For Sale"
    }
  ],

  // Real Estate Agents
  agents: [
    {
      name: "Jennifer Martinez",
      title: "Senior Real Estate Agent",
      experience: "15+ years",
      specialties: ["Residential", "Luxury Homes", "First-time Buyers"],
      phone: "+1 (555) 321-0987 ext 101",
      email: "jennifer@premierrealestate.com",
      languages: ["English", "Spanish"]
    },
    {
      name: "David Thompson",
      title: "Commercial Real Estate Specialist",
      experience: "12+ years",
      specialties: ["Commercial", "Investment Properties", "Development"],
      phone: "+1 (555) 321-0987 ext 102",
      email: "david@premierrealestate.com",
      languages: ["English"]
    },
    {
      name: "Sarah Chen",
      title: "Residential Agent",
      experience: "8+ years",
      specialties: ["Residential", "Condos", "New Construction"],
      phone: "+1 (555) 321-0987 ext 103",
      email: "sarah@premierrealestate.com",
      languages: ["English", "Mandarin"]
    }
  ],

  // Market Information
  market: {
    currentTrends: [
      "Strong buyer demand in suburban areas",
      "Limited inventory driving prices up",
      "Low interest rates supporting sales",
      "Increased interest in home offices"
    ],
    averagePrices: {
      singleFamily: "$425,000",
      condo: "$280,000",
      townhouse: "$350,000",
      commercial: "$750,000"
    },
    marketStats: {
      averageDaysOnMarket: "45 days",
      averageSalePrice: "$420,000",
      inventoryLevel: "2.1 months",
      priceAppreciation: "+8.5% year-over-year"
    }
  },

  // Operating Hours
  hours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "By appointment only"
  },

  // Financing & Resources
  financing: {
    partners: [
      "ABC Mortgage Company",
      "XYZ Bank",
      "Local Credit Union",
      "Online Lenders"
    ],
    services: [
      "Pre-approval assistance",
      "Rate comparison",
      "Down payment programs",
      "First-time buyer programs"
    ]
  },

  // Frequently Asked Questions
  faqs: [
    {
      question: "How do I start the home buying process?",
      answer: "Start by getting pre-approved for a mortgage, then contact one of our agents to discuss your needs and budget. We'll help you find properties that match your criteria and guide you through the entire process."
    },
    {
      question: "What are the current market conditions?",
      answer: "The current market shows strong buyer demand with limited inventory. Average days on market is 45 days, and prices have appreciated 8.5% year-over-year. It's a competitive market, so being prepared with financing is important."
    },
    {
      question: "Do you help with property valuations?",
      answer: "Yes! We provide comprehensive property valuations using current market data, comparable sales, and our local market expertise. This service is free for potential sellers."
    },
    {
      question: "What are your commission rates?",
      answer: "Our commission rates are competitive and vary based on the type of property and services required. We offer transparent pricing and will discuss all fees upfront. Contact us for specific rates."
    },
    {
      question: "Do you work with first-time buyers?",
      answer: "Absolutely! We specialize in helping first-time buyers navigate the process. We can connect you with down payment assistance programs, first-time buyer loans, and provide education about the buying process."
    },
    {
      question: "How do I schedule a property viewing?",
      answer: "You can schedule viewings by calling our office at +1 (555) 321-0987 or contacting any of our agents directly. We offer flexible scheduling including evenings and weekends."
    }
  ],

  // Awards & Recognition
  awards: [
    "Top Producer Award 2023 - Local Real Estate Association",
    "Best of the Best Real Estate Agency 2022",
    "5-Star Customer Service Rating",
    "Million Dollar Club Members"
  ],

  // Community Involvement
  community: {
    sponsorships: [
      "Local school fundraisers",
      "Community events",
      "Habitat for Humanity",
      "Local business associations"
    ],
    expertise: [
      "Local school districts",
      "Neighborhood development",
      "Property tax information",
      "Community amenities"
    ]
  },

  // Technology & Tools
  technology: [
    "Virtual property tours",
    "Online document signing",
    "Property search apps",
    "Market analysis tools",
    "Social media marketing",
    "Professional photography"
  ]
};

// Helper function to format real estate data for ChatPilot
function formatRealEstateData() {
  return `
Agency: ${REAL_ESTATE_PROFILE.agency.name}
Type: ${REAL_ESTATE_PROFILE.agency.type}
Established: ${REAL_ESTATE_PROFILE.agency.established}
Website: ${REAL_ESTATE_PROFILE.agency.website}
Email: ${REAL_ESTATE_PROFILE.agency.email}
Phone: ${REAL_ESTATE_PROFILE.agency.phone}
Address: ${REAL_ESTATE_PROFILE.agency.address}

Description: ${REAL_ESTATE_PROFILE.agency.description}

Services:
Residential Services:
${REAL_ESTATE_PROFILE.services.residential.map(service => 
  `- ${service}`
).join('\n')}

Commercial Services:
${REAL_ESTATE_PROFILE.services.commercial.map(service => 
  `- ${service}`
).join('\n')}

Featured Properties:
${REAL_ESTATE_PROFILE.featuredProperties.map(property => 
  `- ${property.type}: ${property.address} - ${property.price} (${property.beds || 'N/A'} beds, ${property.baths || 'N/A'} baths, ${property.sqft} sqft)`
).join('\n')}

Real Estate Agents:
${REAL_ESTATE_PROFILE.agents.map(agent => 
  `- ${agent.name}, ${agent.title} (${agent.experience})
   Specialties: ${agent.specialties.join(', ')}
   Contact: ${agent.phone} | ${agent.email}`
).join('\n\n')}

Market Information:
Current Trends:
${REAL_ESTATE_PROFILE.market.currentTrends.map(trend => 
  `- ${trend}`
).join('\n')}

Market Statistics:
- Average Days on Market: ${REAL_ESTATE_PROFILE.market.marketStats.averageDaysOnMarket}
- Average Sale Price: ${REAL_ESTATE_PROFILE.market.marketStats.averageSalePrice}
- Inventory Level: ${REAL_ESTATE_PROFILE.market.marketStats.inventoryLevel}
- Price Appreciation: ${REAL_ESTATE_PROFILE.market.marketStats.priceAppreciation}

Operating Hours:
${Object.entries(REAL_ESTATE_PROFILE.hours).map(([day, hours]) => 
  `${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours}`
).join('\n')}

Financing Partners:
${REAL_ESTATE_PROFILE.financing.partners.join(', ')}

Financing Services:
${REAL_ESTATE_PROFILE.financing.services.map(service => 
  `- ${service}`
).join('\n')}

Technology & Tools:
${REAL_ESTATE_PROFILE.technology.map(tool => 
  `- ${tool}`
).join('\n')}

Awards: ${REAL_ESTATE_PROFILE.awards.join(', ')}

Community Involvement:
${REAL_ESTATE_PROFILE.community.sponsorships.map(sponsorship => 
  `- ${sponsorship}`
).join('\n')}
  `.trim();
}

// Export for use in ChatPilot
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { REAL_ESTATE_PROFILE, formatRealEstateData };
} else if (typeof window !== 'undefined') {
  window.REAL_ESTATE_PROFILE = REAL_ESTATE_PROFILE;
  window.formatRealEstateData = formatRealEstateData;
} 