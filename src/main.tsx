import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { loadGA, trackPageView } from './utils/gtag.ts';

// ✅ Load Google Analytics when the app starts
loadGA();

// ✅ Optionally track initial page load
trackPageView(window.location.pathname);

createRoot(document.getElementById("root")!).render(<App />);
