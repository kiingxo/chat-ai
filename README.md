# ChatPilot 🤖

A lightweight, customizable AI chat widget for websites. ChatPilot injects a floating chat bubble that allows users to interact with AI models (OpenAI GPT or Google Gemini) using your own API keys.

## ✨ Features

- 🎨 **8 Beautiful Themes**: Default, Dark, Minimal, Gradient, Rounded, Neon, Glass, and Corporate
- 🤖 **Multi-Provider Support**: OpenAI GPT and Google Gemini
- 📱 **Mobile Responsive**: Works perfectly on all devices
- ⚡ **Lightweight**: No dependencies, pure vanilla JavaScript
- 🎯 **Framework Agnostic**: Works with React, Angular, Vue, or plain HTML
- 🔧 **Highly Customizable**: Extensive configuration options
- 📊 **Event System**: Built-in event handling and callbacks
- 🛡️ **Error Handling**: Robust error handling and user feedback
- 🚀 **CDN Ready**: Deploy via jsDelivr, unpkg, or self-hosted
- 📋 **Data Templates**: Pre-built templates for different business types

## 🚀 Quick Start

### 1. Include ChatPilot

```html
<!-- Via CDN (recommended) -->
<script src="https://cdn.jsdelivr.net/npm/chatpilot@1.0.0/src/ChatPilot.js"></script>

<!-- Or self-hosted -->
<script src="path/to/ChatPilot.js"></script>
```

### 2. Initialize

```javascript
ChatPilot.init({
  apiKey: 'your-api-key-here',
  assistantName: 'Lexi',
  data: 'We sell phone accessories and ship globally.',
  theme: 'dark'
});
```

## 📖 Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `apiKey` | string | `''` | Your OpenAI or Gemini API key |
| `assistantName` | string | `'Assistant'` | Name displayed in the chat header |
| `data` | string | `''` | Context data for the AI assistant |
| `theme` | string | `'default'` | Theme: `'default'`, `'dark'`, `'minimal'`, `'gradient'`, `'rounded'` |
| `provider` | string | `'gemini'` | AI provider: `'gemini'` or `'openai'` |
| `model` | string | `'gemini-1.5-flash'` | AI model to use |
| `maxTokens` | number | `150` | Maximum response length |
| `temperature` | number | `0.7` | Response creativity (0-1) |
| `autoOpen` | boolean | `false` | Automatically open chat on load |
| `showTypingIndicator` | boolean | `true` | Show typing indicator |
| `enableMarkdown` | boolean | `false` | Enable markdown parsing in responses |
| `customCSS` | string | `''` | Custom CSS to inject |
| `onMessage` | function | `null` | Callback when message is sent/received |
| `onError` | function | `null` | Callback when error occurs |
| `onOpen` | function | `null` | Callback when chat opens |
| `onClose` | function | `null` | Callback when chat closes |

## 🎨 Themes

### Default Theme
```javascript
ChatPilot.init({
  theme: 'default',
  // Clean blue professional design
});
```

### Dark Theme
```javascript
ChatPilot.init({
  theme: 'dark',
  // Sleek dark interface with cyan accents
});
```

### Minimal Theme
```javascript
ChatPilot.init({
  theme: 'minimal',
  // Simple, clean design
});
```

### Gradient Theme
```javascript
ChatPilot.init({
  theme: 'gradient',
  // Vibrant gradient colors
});
```

### Rounded Theme
```javascript
ChatPilot.init({
  theme: 'rounded',
  // Soft, friendly rounded design
});
```

## 🔧 Advanced Usage

### OpenAI Configuration
```javascript
ChatPilot.init({
  apiKey: 'sk-your-openai-key',
  provider: 'openai',
  model: 'gpt-3.5-turbo',
  maxTokens: 200,
  temperature: 0.8
});
```

### Gemini Configuration
```javascript
ChatPilot.init({
  apiKey: 'your-gemini-key',
  provider: 'gemini',
  model: 'gemini-1.5-flash',
  maxTokens: 150,
  temperature: 0.7
});
```

### Custom CSS
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

### Event Handling
```javascript
const chat = ChatPilot.init({
  onMessage: (userMessage, aiResponse) => {
    console.log('User:', userMessage);
    console.log('AI:', aiResponse);
  },
  onError: (error) => {
    console.error('ChatPilot error:', error);
  },
  onOpen: () => {
    console.log('Chat opened');
  },
  onClose: () => {
    console.log('Chat closed');
  }
});

// Listen to custom events
document.addEventListener('chatpilot:ready', (e) => {
  console.log('ChatPilot is ready!', e.detail.instance);
});
```

## 🛠️ API Methods

### Instance Methods
```javascript
const chat = ChatPilot.init(config);

// Open/close chat
chat.open();
chat.close();
chat.toggle();

// Message history
const history = chat.getMessageHistory();
chat.clearHistory();

// Update configuration
chat.updateConfig(newConfig);

// Destroy widget
chat.destroy();
```

### Static Methods
```javascript
// Get available themes
console.log(ChatPilot.themes); // ['default', 'dark', 'minimal', 'gradient', 'rounded', 'neon', 'glass', 'corporate']

// Get default configuration
console.log(ChatPilot.defaults);

// Get version
console.log(ChatPilot.version); // '1.1.0'
```

## 🔌 Framework Integration

### React
```jsx
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    ChatPilot.init({
      apiKey: process.env.REACT_APP_API_KEY,
      assistantName: 'React Assistant',
      theme: 'dark'
    });
  }, []);

  return <div>Your React app</div>;
}
```

### Vue
```vue
<template>
  <div>Your Vue app</div>
</template>

<script>
export default {
  mounted() {
    ChatPilot.init({
      apiKey: this.$env.API_KEY,
      assistantName: 'Vue Assistant',
      theme: 'gradient'
    });
  }
}
</script>
```

### Angular
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>Your Angular app</div>'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    (window as any).ChatPilot.init({
      apiKey: environment.apiKey,
      assistantName: 'Angular Assistant',
      theme: 'rounded'
    });
  }
}
```

## 📋 Data Templates

ChatPilot includes pre-built data templates for different business types to help you get started quickly:

### Available Templates
- 🏢 **Company Profile**: E-commerce, service businesses
- 🍽️ **Restaurant Profile**: Restaurants, cafes, food delivery
- 🏥 **Healthcare Profile**: Medical practices, clinics
- 🏠 **Real Estate Profile**: Real estate agencies, property management

### Quick Template Usage
```html
<!-- Include template -->
<script src="templates/company-profile.js"></script>

<!-- Initialize with template data -->
<script>
ChatPilot.init({
    apiKey: 'your-api-key',
    data: formatCompanyData(), // Template format function
    assistantName: 'Customer Support'
});
</script>
```

See [templates/README.md](templates/README.md) for detailed template documentation and customization guides.

## 📦 Installation

### NPM
```bash
npm install chatpilot
```

### Yarn
```bash
yarn add chatpilot
```

### Manual Download
1. Download the latest release
2. Include `ChatPilot.js` in your HTML
3. Copy theme CSS files to your project
4. Include template files if needed

## 🚀 Deployment

### CDN (Recommended)
```html
<script src="https://cdn.jsdelivr.net/npm/chatpilot@1.1.0/dist/ChatPilot.min.js"></script>
```

### Self-Hosted
```html
<script src="https://your-domain.com/path/to/ChatPilot.js"></script>
```

### Build for Production
```bash
npm install
npm run build
```

## 🔒 Security

- API keys are stored in memory only
- No data is sent to ChatPilot servers
- All communication goes directly to OpenAI/Gemini APIs
- HTTPS recommended for production use

## 🐛 Troubleshooting

### Common Issues

1. **Chat doesn't appear**: Check if the script is loaded and `ChatPilot.init()` is called
2. **API errors**: Verify your API key and provider settings
3. **Styling issues**: Ensure theme CSS files are accessible
4. **Mobile issues**: Check responsive design settings

### Debug Mode
```javascript
ChatPilot.init({
  // ... your config
  onError: (error) => {
    console.error('ChatPilot Debug:', error);
  }
});
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: israelsoyombo@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/kiingxo/chat-ai/issues)
- 📖 Docs: [Documentation](https://chatpilot.com/docs)

---

Made with ❤️ by [Israel Soyombo (kiingxo)](https://github.com/kiingxo) © 2025 