@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html,
  body {
    margin: 0;
    min-height: 100vh;
    font-family: Inter, sans-serif;
    color: #fff;
    background: none;
    overflow-x: hidden;
  }
}

@keyframes rocketFlame {
  0% { transform: scaleY(1); opacity: 1; }
  50% { transform: scaleY(1.5); opacity: 0.7; }
  100% { transform: scaleY(1); opacity: 1; }
}

.animate-rocket-flame {
  animation: rocketFlame 0.3s infinite;
}
