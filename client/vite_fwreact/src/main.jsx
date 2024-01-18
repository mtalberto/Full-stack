//react es una biblioteca  de javascript  utilizada para el frontend
import React from 'react'
//este paquete es necesario para crear aplicaciones dinámicas en React. Proporciona una función render() crucial, 
//un bloque de construcción esencial de cualquier componente
// de clase.
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

