
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Use Layout in App.tsx, not here
createRoot(document.getElementById("root")!).render(<App />);
