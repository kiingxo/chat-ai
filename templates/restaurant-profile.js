/**
 * Restaurant Profile Template for ChatPilot
 * Customize this template with your restaurant information
 */

const RESTAURANT_PROFILE = {
  // Basic Restaurant Information
  restaurant: {
    name: "Bella Vista",
    cuisine: "Italian & Mediterranean",
    established: "2018",
    website: "https://bellavista.com",
    email: "info@bellavista.com",
    phone: "+1 (555) 987-6543",
    address: "456 Olive Street, Downtown, DT 54321",
    description: "Authentic Italian and Mediterranean cuisine in an elegant, family-friendly atmosphere."
  },

  // Menu Categories
  menu: {
    appetizers: [
      {
        name: "Bruschetta",
        description: "Toasted bread topped with fresh tomatoes, basil, and mozzarella",
        price: "$12.99",
        allergens: ["Gluten", "Dairy"]
      },
      {
        name: "Calamari Fritti",
        description: "Crispy fried calamari served with marinara sauce",
        price: "$16.99",
        allergens: ["Gluten", "Seafood"]
      },
      {
        name: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
        price: "$14.99",
        allergens: ["Dairy"]
      }
    ],
    mainCourses: [
      {
        name: "Spaghetti Carbonara",
        description: "Classic pasta with eggs, cheese, pancetta, and black pepper",
        price: "$24.99",
        allergens: ["Gluten", "Dairy", "Eggs"]
      },
      {
        name: "Grilled Salmon",
        description: "Atlantic salmon with seasonal vegetables and lemon butter sauce",
        price: "$32.99",
        allergens: ["Fish", "Dairy"]
      },
      {
        name: "Chicken Marsala",
        description: "Pan-seared chicken in marsala wine sauce with mushrooms",
        price: "$28.99",
        allergens: ["Gluten", "Dairy"]
      }
    ],
    desserts: [
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers",
        price: "$12.99",
        allergens: ["Gluten", "Dairy", "Eggs"]
      },
      {
        name: "Gelato",
        description: "House-made gelato in various flavors",
        price: "$8.99",
        allergens: ["Dairy"]
      }
    ],
    beverages: [
      {
        name: "Italian Wines",
        description: "Selection of fine Italian wines",
        price: "$12-45 per glass",
        allergens: ["Alcohol"]
      },
      {
        name: "Espresso",
        description: "Traditional Italian espresso",
        price: "$4.99",
        allergens: ["Caffeine"]
      }
    ]
  },

  // Operating Hours
  hours: {
    monday: "Closed",
    tuesday: "5:00 PM - 10:00 PM",
    wednesday: "5:00 PM - 10:00 PM",
    thursday: "5:00 PM - 10:00 PM",
    friday: "5:00 PM - 11:00 PM",
    saturday: "5:00 PM - 11:00 PM",
    sunday: "4:00 PM - 9:00 PM"
  },

  // Reservations & Services
  reservations: {
    required: "Recommended for dinner",
    phone: "+1 (555) 987-6543",
    online: "https://bellavista.com/reservations",
    groupSize: "Up to 20 people",
    advanceNotice: "24 hours for groups of 8+",
    cancellation: "2 hours notice required"
  },

  // Special Services
  services: {
    delivery: "Available via DoorDash and Uber Eats",
    takeout: "Available for pickup",
    catering: "Available for events and parties",
    privateEvents: "Private dining room available",
    winePairing: "Sommelier service available"
  },

  // Dietary Accommodations
  dietary: {
    vegetarian: "Multiple vegetarian options available",
    vegan: "Limited vegan options - please ask server",
    glutenFree: "Gluten-free pasta and options available",
    dairyFree: "Some dairy-free options available",
    nutFree: "Kitchen can accommodate nut allergies"
  },

  // Frequently Asked Questions
  faqs: [
    {
      question: "Do you take reservations?",
      answer: "Yes, reservations are recommended, especially for dinner. You can book online at bellavista.com/reservations or call us at +1 (555) 987-6543."
    },
    {
      question: "What are your hours?",
      answer: "We're open Tuesday-Sunday for dinner service. Tuesday-Thursday: 5-10 PM, Friday-Saturday: 5-11 PM, Sunday: 4-9 PM. We're closed on Mondays."
    },
    {
      question: "Do you offer delivery?",
      answer: "Yes! We offer delivery through DoorDash and Uber Eats, and takeout is available for pickup."
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer: "Absolutely! We offer vegetarian, gluten-free, and other dietary accommodations. Please let your server know about any allergies or restrictions."
    },
    {
      question: "Do you have a dress code?",
      answer: "We recommend business casual attire. While we don't have a strict dress code, we ask guests to dress appropriately for a fine dining experience."
    },
    {
      question: "Can you host private events?",
      answer: "Yes! We have a private dining room that can accommodate up to 20 people. Contact us at least 48 hours in advance for private event bookings."
    }
  ],

  // Awards & Recognition
  awards: [
    "Best Italian Restaurant 2023 - City Dining Awards",
    "4.8/5 Stars - TripAdvisor",
    "Featured in Food & Wine Magazine",
    "Local Business Excellence Award 2022"
  ],

  // Special Events & Promotions
  events: {
    wineTasting: "Monthly wine tasting events - first Thursday of each month",
    happyHour: "Tuesday-Thursday: 5-7 PM - 50% off appetizers",
    dateNight: "Sunday Date Night Special - 3-course meal for two",
    seasonalMenu: "Seasonal menu changes quarterly"
  },

  // Parking & Accessibility
  parking: {
    street: "Metered street parking available",
    valet: "Valet parking available Friday-Saturday",
    accessibility: "Wheelchair accessible entrance and restrooms"
  }
};

// Helper function to format restaurant data for ChatPilot
function formatRestaurantData() {
  return `
Restaurant: ${RESTAURANT_PROFILE.restaurant.name}
Cuisine: ${RESTAURANT_PROFILE.restaurant.cuisine}
Established: ${RESTAURANT_PROFILE.restaurant.established}
Website: ${RESTAURANT_PROFILE.restaurant.website}
Email: ${RESTAURANT_PROFILE.restaurant.email}
Phone: ${RESTAURANT_PROFILE.restaurant.phone}
Address: ${RESTAURANT_PROFILE.restaurant.address}

Description: ${RESTAURANT_PROFILE.restaurant.description}

Menu Highlights:
Appetizers:
${RESTAURANT_PROFILE.menu.appetizers.map(item => 
  `- ${item.name}: ${item.description} (${item.price})`
).join('\n')}

Main Courses:
${RESTAURANT_PROFILE.menu.mainCourses.map(item => 
  `- ${item.name}: ${item.description} (${item.price})`
).join('\n')}

Desserts:
${RESTAURANT_PROFILE.menu.desserts.map(item => 
  `- ${item.name}: ${item.description} (${item.price})`
).join('\n')}

Operating Hours:
${Object.entries(RESTAURANT_PROFILE.hours).map(([day, hours]) => 
  `${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours}`
).join('\n')}

Reservations:
- Required: ${RESTAURANT_PROFILE.reservations.required}
- Phone: ${RESTAURANT_PROFILE.reservations.phone}
- Online: ${RESTAURANT_PROFILE.reservations.online}
- Group Size: ${RESTAURANT_PROFILE.reservations.groupSize}

Services:
- Delivery: ${RESTAURANT_PROFILE.services.delivery}
- Takeout: ${RESTAURANT_PROFILE.services.takeout}
- Catering: ${RESTAURANT_PROFILE.services.catering}
- Private Events: ${RESTAURANT_PROFILE.services.privateEvents}

Dietary Accommodations:
- Vegetarian: ${RESTAURANT_PROFILE.dietary.vegetarian}
- Gluten-Free: ${RESTAURANT_PROFILE.dietary.glutenFree}
- Allergies: Kitchen can accommodate various allergies

Special Events:
${Object.entries(RESTAURANT_PROFILE.events).map(([event, description]) => 
  `- ${event}: ${description}`
).join('\n')}

Awards: ${RESTAURANT_PROFILE.awards.join(', ')}
  `.trim();
}

// Export for use in ChatPilot
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RESTAURANT_PROFILE, formatRestaurantData };
} else if (typeof window !== 'undefined') {
  window.RESTAURANT_PROFILE = RESTAURANT_PROFILE;
  window.formatRestaurantData = formatRestaurantData;
} 