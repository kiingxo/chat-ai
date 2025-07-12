# ChatPilot Data Templates

Pre-built, customizable data templates for different business types to enhance your ChatPilot AI assistant with relevant, structured information.

## 📋 Available Templates

### 🏢 Company Profile Template
**Perfect for:** Online stores, service businesses, e-commerce sites

**Includes:**
- Company information & contact details
- Products & services catalog
- Shipping & return policies
- Customer support information
- Frequently asked questions
- Business hours & social media links

**Sample Questions:**
- "What products do you sell?"
- "What is your shipping policy?"
- "How can I contact customer support?"
- "What is your return policy?"

### 🍽️ Restaurant Profile Template
**Perfect for:** Restaurants, cafes, food delivery services

**Includes:**
- Restaurant information & cuisine type
- Complete menu with prices and descriptions
- Operating hours & reservation system
- Dietary accommodations
- Special services & events
- Parking & accessibility information

**Sample Questions:**
- "What is on your menu?"
- "Do you take reservations?"
- "What are your hours?"
- "Do you offer delivery?"

### 🏥 Healthcare Profile Template
**Perfect for:** Medical practices, clinics, wellness centers

**Includes:**
- Practice information & medical services
- Medical staff profiles
- Insurance & payment options
- Appointment scheduling
- COVID-19 protocols
- Patient resources & FAQs

**Sample Questions:**
- "What services do you offer?"
- "How do I schedule an appointment?"
- "What insurance do you accept?"
- "Do you offer virtual appointments?"

### 🏠 Real Estate Profile Template
**Perfect for:** Real estate agencies, property management companies

**Includes:**
- Agency information & services
- Featured properties listing
- Real estate agents profiles
- Market trends & statistics
- Financing partners & services
- Community involvement

**Sample Questions:**
- "What properties do you have available?"
- "How do I start the home buying process?"
- "What are current market conditions?"
- "Who are your agents?"

## 🚀 Quick Start Guide

### Step 1: Choose Your Template
Select the template that best matches your business type from the available options above.

### Step 2: Download and Customize
1. Download the template file (e.g., `company-profile.js`)
2. Open the file and customize all the data with your business information
3. Replace placeholder text, contact information, and business details

### Step 3: Include in Your Website
Add the template file to your HTML:

```html
<!-- Include the template file -->
<script src="templates/company-profile.js"></script>

<!-- Include ChatPilot -->
<script src="https://cdn.jsdelivr.net/npm/chatpilot@1.1.0/dist/ChatPilot.min.js"></script>
```

### Step 4: Initialize ChatPilot
Use the template's format function in your ChatPilot initialization:

```javascript
ChatPilot.init({
    apiKey: 'your-api-key-here',
    provider: 'gemini',
    theme: 'default',
    data: formatCompanyData(), // Use the template's format function
    assistantName: 'Customer Support',
    welcomeMessage: 'Hello! I can help you with information about our company, products, and services.'
});
```

### Step 5: Test and Refine
1. Test the chat with various questions
2. Refine the template data based on common queries
3. Update information as your business changes

## 📝 Customization Guide

### Basic Information
Update the basic business information in each template:

```javascript
const COMPANY_PROFILE = {
    company: {
        name: "Your Company Name",
        industry: "Your Industry",
        founded: "Year Founded",
        website: "https://yourwebsite.com",
        email: "contact@yourcompany.com",
        phone: "+1 (555) 123-4567",
        address: "Your Address",
        description: "Your company description"
    },
    // ... rest of the template
};
```

### Products & Services
Customize the products and services section:

```javascript
products: [
    {
        name: "Your Product Name",
        description: "Product description",
        priceRange: "$X.XX - $X.XX",
        features: ["Feature 1", "Feature 2", "Feature 3"]
    }
]
```

### FAQs
Update the frequently asked questions with your actual FAQs:

```javascript
faqs: [
    {
        question: "Your frequently asked question?",
        answer: "Your detailed answer to the question."
    }
]
```

### Business Hours
Update your operating hours:

```javascript
hours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    // ... rest of the week
}
```

## 🎯 Best Practices

### 1. Keep Information Current
- Regularly update your template data
- Remove outdated information
- Add new products, services, or policies

### 2. Be Specific and Detailed
- Include specific prices when possible
- Provide detailed descriptions
- Add relevant contact information

### 3. Anticipate Common Questions
- Think about what customers typically ask
- Include information about policies and procedures
- Add troubleshooting information

### 4. Use Clear Language
- Write in simple, clear terms
- Avoid jargon unless necessary
- Make information easy to find

### 5. Test Regularly
- Test the chat with various questions
- Update based on user feedback
- Monitor chat logs for improvement opportunities

## 🔧 Advanced Customization

### Adding Custom Fields
You can extend any template with additional fields:

```javascript
const COMPANY_PROFILE = {
    // ... existing fields
    customField: {
        specialOffers: [
            "20% off first order",
            "Free shipping on orders over $50"
        ],
        certifications: [
            "ISO 9001 Certified",
            "BBB Accredited Business"
        ]
    }
};
```

### Multiple Templates
You can combine multiple templates or create hybrid templates for complex businesses:

```javascript
// Combine company and restaurant templates for a food delivery business
const FOOD_DELIVERY_PROFILE = {
    ...COMPANY_PROFILE,
    ...RESTAURANT_PROFILE,
    delivery: {
        areas: ["Downtown", "Suburbs", "Airport"],
        minimumOrder: "$15",
        deliveryFee: "$3.99"
    }
};
```

### Dynamic Data
For advanced users, you can load template data dynamically:

```javascript
// Load template data from an API
async function loadTemplateData() {
    const response = await fetch('/api/business-data');
    const data = await response.json();
    return formatCompanyData(data);
}

ChatPilot.init({
    // ... other options
    data: await loadTemplateData()
});
```

## 📞 Support

If you need help customizing templates or have questions about implementation:

1. Check the [ChatPilot documentation](https://github.com/your-repo/chatpilot)
2. Review the template demo at `template-demo.html`
3. Open an issue on GitHub for bugs or feature requests

## 🤝 Contributing

We welcome contributions! To add new templates or improve existing ones:

1. Fork the repository
2. Create a new template file following the existing structure
3. Add comprehensive documentation
4. Submit a pull request

### Template Structure Guidelines
- Use clear, descriptive variable names
- Include comprehensive comments
- Provide a format function for easy integration
- Include sample data that's realistic but generic
- Follow the existing code style and structure

## 📄 License

These templates are part of the ChatPilot project and are licensed under the same terms. See the main project LICENSE file for details.

---

**Happy customizing!** 🎉 