import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'



const anotherElement=(
  <a href="www.google.com" target="_blank">visit google </a>
)

createRoot(document.getElementById('root')).render(

 anotherElement
 
)
