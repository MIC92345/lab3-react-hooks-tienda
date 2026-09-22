import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Tienda } from './components/Tienda'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tienda />
  </StrictMode>,
)