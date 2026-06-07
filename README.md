# Reviews App

A modern, responsive React application built with TypeScript and Vite that displays customer reviews in an interactive carousel format.

## 🚀 Features

- **Interactive Review Carousel**: Navigate through customer reviews with smooth animations and keyboard support
- **Review Progress Dots**: Visual indicator showing your position in the review list — click to jump
- **Random Review Selection**: "Surprise Me" button to display a random review
- **Keyboard Navigation**: Use left/right arrow keys to browse reviews
- **Responsive Design**: Optimized for all device sizes with a modern gradient UI
- **Glass Card Design**: Modern glassmorphism card with backdrop blur and gradient accents
- **TypeScript Support**: Fully typed for better development experience
- **React Compiler**: Automatic memoization for optimal performance

## 🛠️ Technologies Used

- **React 19** — Modern React with hooks and the new React Compiler
- **TypeScript** — Type-safe JavaScript
- **Vite** — Fast build tool and development server
- **React Icons** — Beautiful icons from Font Awesome
- **ESLint** — Code linting with flat config
- **ESLint Plugin React Compiler** — Enforces Rules of React for compiler optimization
- **Husky** — Git hooks for automated linting on commit
- **Commitlint** — Conventional commit message validation

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HamedSadim1/reviews.git
   cd reviews
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎯 Usage

The application displays customer reviews with the following features:

- **Arrow Buttons**: Use the left/right buttons to browse reviews
- **Progress Dots**: Click any dot to jump to a specific review
- **Surprise Me**: Click the gradient button to view a random review
- **Keyboard**: Press `←` and `→` arrow keys to navigate

## 📁 Project Structure

```
src/
├── components/
│   └── Review/
│       ├── index.ts              # Component exports
│       ├── Review.tsx             # Main carousel component
│       ├── ReviewAvatar.tsx       # Avatar with quote icon
│       ├── ReviewInfo.tsx         # Name, job, review text
│       ├── ReviewNavigation.tsx   # Previous/next buttons
│       ├── ReviewProgress.tsx     # Progress dot indicators
│       ├── ReviewTitle.tsx        # Page title section
│       └── RandomButton.tsx       # Surprise Me button
├── hooks/
│   └── useReviewCarousel.ts       # Custom hook for carousel logic
├── utils/
│   └── index.ts                   # Shared helper functions
├── data/
│   └── index.ts                   # Review data and types
├── constants.ts                   # Single source of truth for constants
├── App.tsx                        # Root application component
├── main.tsx                       # Application entry point
└── index.css                      # Global styles with design tokens
```

## 🤝 Contributing

This is an educational project for the AP Hogeschool Webframeworks course. Contributions are welcome for learning purposes.

---

Built with ❤️ for AP Hogeschool Webframeworks
