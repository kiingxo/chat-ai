# 🚀 ChatPilot Deployment Guide

## ✅ **ChatPilot is Now Live!**

Your ChatPilot widget is now available for users worldwide! Here are all the ways users can start using it:

## 📦 **Installation Methods**

### 1. **CDN (Easiest - Recommended)**

```html
<!-- Include ChatPilot in your HTML -->
<script src="https://cdn.jsdelivr.net/npm/chatpilot@1.0.0/src/ChatPilot.js"></script>

<!-- Initialize with your configuration -->
<script>
  ChatPilot.init({
    apiKey: 'your-api-key-here',
    assistantName: 'Your Assistant',
    theme: 'dark',
    data: 'Your business context here...'
  });
</script>
```

### 2. **NPM Package**

```bash
# Install via npm
npm install chatpilot

# Or via yarn
yarn add chatpilot
```

Then in your JavaScript:
```javascript
import ChatPilot from 'chatpilot';

ChatPilot.init({
  apiKey: 'your-api-key-here',
  assistantName: 'Your Assistant',
  theme: 'dark'
});
```

### 3. **Direct Download**

1. Download from [GitHub Releases](https://github.com/kiingxo/chat-ai/releases)
2. Include `ChatPilot.js` in your project
3. Copy theme CSS files to your styles folder

## 🔑 **Getting API Keys**

### **For Gemini (Google AI)**
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Use the key in your configuration

### **For OpenAI**
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create a new API key
3. Use the key in your configuration

## 🎯 **Quick Start Examples**

### **Basic Setup**
```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <script src="https://cdn.jsdelivr.net/npm/chatpilot@1.0.0/src/ChatPilot.js"></script>
</head>
<body>
  <h1>Welcome to My Website</h1>
  
  <script>
    ChatPilot.init({
      apiKey: 'your-gemini-api-key',
      assistantName: 'Support Bot',
      theme: 'dark',
      data: 'We are a tech company that sells software solutions.'
    });
  </script>
</body>
</html>
```

### **Advanced Setup with Events**
```javascript
const chat = ChatPilot.init({
  apiKey: 'your-api-key',
  assistantName: 'AI Assistant',
  theme: 'gradient',
  provider: 'openai', // or 'gemini'
  model: 'gpt-3.5-turbo',
  maxTokens: 200,
  temperature: 0.8,
  showTypingIndicator: true,
  enableMarkdown: true,
  data: 'You are a helpful customer support assistant.',
  onMessage: (userMsg, aiResponse) => {
    console.log('User:', userMsg);
    console.log('AI:', aiResponse);
  },
  onError: (error) => {
    console.error('ChatPilot error:', error);
  }
});
```

## 🔌 **Framework Integration**

### **React**
```jsx
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Load ChatPilot script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chatpilot@1.0.0/src/ChatPilot.js';
    script.onload = () => {
      window.ChatPilot.init({
        apiKey: process.env.REACT_APP_API_KEY,
        assistantName: 'React Assistant',
        theme: 'dark'
      });
    };
    document.head.appendChild(script);
  }, []);

  return <div>Your React app</div>;
}
```

### **Vue.js**
```vue
<template>
  <div>Your Vue app</div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chatpilot@1.0.0/src/ChatPilot.js';
    script.onload = () => {
      window.ChatPilot.init({
        apiKey: this.$env.API_KEY,
        assistantName: 'Vue Assistant',
        theme: 'gradient'
      });
    };
    document.head.appendChild(script);
  }
}
</script>
```

### **Angular**
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>Your Angular app</div>'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chatpilot@1.0.0/src/ChatPilot.js';
    script.onload = () => {
      (window as any).ChatPilot.init({
        apiKey: environment.apiKey,
        assistantName: 'Angular Assistant',
        theme: 'rounded'
      });
    };
    document.head.appendChild(script);
  }
}
```

## 🎨 **Theme Examples**

### **Professional (Default)**
```javascript
ChatPilot.init({
  theme: 'default',
  assistantName: 'Professional Assistant'
});
```

### **Dark Mode**
```javascript
ChatPilot.init({
  theme: 'dark',
  assistantName: 'Night Assistant'
});
```

### **Minimal**
```javascript
ChatPilot.init({
  theme: 'minimal',
  assistantName: 'Simple Assistant'
});
```

### **Gradient**
```javascript
ChatPilot.init({
  theme: 'gradient',
  assistantName: 'Colorful Assistant'
});
```

### **Rounded**
```javascript
ChatPilot.init({
  theme: 'rounded',
  assistantName: 'Friendly Assistant'
});
```

## 🔧 **Customization**

### **Custom CSS**
```javascript
ChatPilot.init({
  customCSS: `
    #chatpilot-bubble {
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4) !important;
    }
    .chat-header {
      background: #2c3e50 !important;
    }
  `
});
```

### **Custom Positioning**
```javascript
ChatPilot.init({
  customCSS: `
    #chatpilot-container {
      bottom: 40px !important;
      left: 20px !important;
      right: auto !important;
    }
  `
});
```

## 📊 **Analytics & Events**

### **Track Chat Usage**
```javascript
const chat = ChatPilot.init({
  onMessage: (userMsg, aiResponse) => {
    // Send to analytics
    analytics.track('chat_message', {
      user_message: userMsg,
      ai_response: aiResponse
    });
  },
  onOpen: () => {
    analytics.track('chat_opened');
  },
  onClose: () => {
    analytics.track('chat_closed');
  }
});
```

### **Listen to Events**
```javascript
document.addEventListener('chatpilot:ready', (e) => {
  console.log('ChatPilot ready!', e.detail.instance);
});

document.addEventListener('chatpilot:error', (e) => {
  console.error('ChatPilot error:', e.detail.error);
});
```

## 🛡️ **Security Best Practices**

### **Environment Variables**
```javascript
// Use environment variables for API keys
ChatPilot.init({
  apiKey: process.env.CHATPILOT_API_KEY,
  // ... other config
});
```

### **Domain Restrictions**
```javascript
// Only load on specific domains
if (window.location.hostname === 'yourdomain.com') {
  ChatPilot.init({
    apiKey: 'your-api-key',
    // ... config
  });
}
```

## 🚀 **Deployment Checklist**

- [ ] ✅ Get API key from OpenAI or Google
- [ ] ✅ Choose your theme
- [ ] ✅ Set up assistant name and context
- [ ] ✅ Test on your website
- [ ] ✅ Configure analytics (optional)
- [ ] ✅ Set up error monitoring (optional)
- [ ] ✅ Deploy to production

## 📞 **Support & Resources**

- 📖 **Documentation**: [GitHub README](https://github.com/kiingxo/chat-ai)
- 🐛 **Issues**: [GitHub Issues](https://github.com/kiingxo/chat-ai/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/kiingxo/chat-ai/discussions)
- 📧 **Email**: israelsoyombo@gmail.com

## 🎉 **You're Ready to Go!**

Your ChatPilot widget is now live and ready for users worldwide. The CDN version will automatically update when you publish new versions to NPM.

**Next Steps:**
1. Share the CDN link with users
2. Create example implementations
3. Gather feedback and iterate
4. Consider adding more features based on user needs

Happy chatting! 🤖✨ 