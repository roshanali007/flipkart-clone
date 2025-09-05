import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from './header/FilterContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilterProvider>
  </StrictMode>,
)
