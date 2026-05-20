# Toolbox — Stopwatch & Calculator

A sleek, modern web application featuring a fully functional **Stopwatch** and **Calculator**, built with React and Vite. Designed with a glassmorphism aesthetic, smooth animations, and full dark mode support.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Features

### Stopwatch
- Precision timing with centisecond accuracy (10ms intervals)
- Animated circular progress ring that tracks elapsed seconds
- Lap recording with animated list entries
- Start, Stop, Lap, and Reset controls
- Responsive design for mobile and desktop

### Calculator
- Standard arithmetic operations: addition, subtraction, multiplication, division
- Percentage calculations
- Decimal support
- Backspace/delete functionality
- Expression display showing the current equation
- Error handling for invalid expressions
- Glassmorphism card design with gradient operator buttons

### UI/UX
- Tabbed navigation with smooth transitions
- Dark mode support (follows system preference)
- Fully responsive layout
- Accessible — ARIA labels, roles, and live regions
- Gradient accent colors and subtle shadows
- Monospace font for numeric displays

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev) | UI framework |
| [Vite 6](https://vite.dev) | Build tool & dev server |
| CSS3 | Styling with custom properties, grid, flexbox |
| AWS Amplify | Hosting & CI/CD |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9+ (comes with Node.js)

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/toolbox-app.git
cd toolbox-app
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Calculator.jsx      # Calculator component
│   │   ├── Calculator.css      # Calculator styles
│   │   ├── Stopwatch.jsx       # Stopwatch component
│   │   └── Stopwatch.css       # Stopwatch styles
│   ├── App.jsx                 # Main app with tab navigation
│   ├── App.css                 # App layout styles
│   ├── index.css               # Global styles & CSS variables
│   └── main.jsx                # Entry point
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── amplify.yml                 # AWS Amplify build spec
├── package.json
└── README.md
```

---

## Deployment to AWS Amplify

This project is configured for deployment on [AWS Amplify Hosting](https://aws.amazon.com/amplify/).

### Option 1: Git-based Deployment (Recommended)

1. Push this repository to GitHub/GitLab/Bitbucket
2. Open the [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
3. Click **"Host web app"**
4. Connect your Git provider and select this repository
5. Amplify will auto-detect the `amplify.yml` build settings
6. Click **"Save and deploy"**

Every push to `main` will trigger an automatic deployment.

### Option 2: Manual Deployment

```bash
npm run build
# Upload the dist/ folder via the Amplify Console
```

### Build Specification

The `amplify.yml` file configures the build pipeline:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

## Customization

### Theming

All colors are defined as CSS custom properties in `src/index.css`. Modify the `:root` block to change the light theme, and the `@media (prefers-color-scheme: dark)` block for dark mode.

Key variables:
- `--accent` — Primary brand color (purple)
- `--bg` — Background color
- `--text` — Body text color
- `--text-h` — Heading/emphasis text color
- `--border` — Border color
- `--shadow` — Box shadow definition

---

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

---

## License

MIT — feel free to use this for anything.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
