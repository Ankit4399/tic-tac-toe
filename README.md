# Tic Tac Toe — Chai & Cookies Edition

A modern and cozy Tic Tac Toe game built with React.  
This project focuses on clean component architecture, reusable logic with custom hooks, and a beautifully designed UI inspired by warm pastel aesthetics.

The game includes smooth interactions, winner detection, draw handling, responsive design, and a structured React codebase suitable for beginners learning real-world React patterns.

---

## Preview

Features a cozy themed interface with:

- Chai ☕ vs Cookies 🍪
- Soft pastel gradients
- Glassmorphism inspired card UI
- Interactive hover animations
- Winner highlighting
- Responsive layout

---

## Features

- 3x3 Tic Tac Toe board
- Two-player turn system
- Winner detection
- Draw detection
- Reset game functionality
- Winning cell highlight
- Component-based architecture
- Custom React hook for game logic
- Responsive modern UI

---

## Project Structure

```txt
src
│
├── components
│   ├── Board.jsx
│   ├── Cell.jsx
│   ├── Status.jsx
│   └── Buttons.jsx
│
├── hooks
│   └── useGameLogic.js
│
├── styles
│   └── App.css
│
├── App.jsx
└── main.jsx
```

---

## Tech Stack

- React
- JavaScript
- CSS3
- Vite

---

## Game Logic

The game uses:

- Array-based board state
- Conditional rendering
- Turn switching
- Winning pattern checks
- Draw detection
- React state management with hooks

Winning combinations are checked using predefined board patterns.

---

## Component Architecture

### App.jsx

Main layout component responsible for assembling the UI.

### useGameLogic.js

Custom hook that contains:

- Board state
- Turn logic
- Winner detection
- Draw logic
- Reset functionality

### Board.jsx

Renders the 3x3 board grid.

### Cell.jsx

Represents a single playable cell.

### Status.jsx

Displays:

- Current turn
- Winner
- Draw state

### Buttons.jsx

Contains reset and action buttons.

---

## Learning Outcomes

This project helps practice:

- React fundamentals
- Component architecture
- Custom hooks
- State management
- Props
- Event handling
- Conditional rendering
- Clean folder structure
- Reusable UI components

---

## Future Improvements

Possible enhancements:

- Score tracking
- Sound effects
- AI opponent
- Dark/light mode
- Multiplayer support
- Move history
- Animations with Framer Motion

---

## License

This project is open source and available for learning and personal use.