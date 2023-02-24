import { useState, useEffect } from 'react'
import './App.css'
import { EVENTS } from './const .js'

function navigate(href) {
  window.history.pushState({}, '', href) // solo refleja el cambio de url pero no refresca la página
  // crear un evento personalizado para avisar de que ha cambiado la ruta
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

function navigateBack() {
  window.history.back()
}

export function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un react router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a Sobre nosotros</button>
    </>
  )
}

export function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1580217302229860353/YqwVLbjs_400x400.jpg"
          alt="Foto de Víctor"
        />
      </div>
      <p>Hola, me llamo Víctor y estoy creando un clon de React Router.</p>
      <button onClick={() => navigate('/')}>Ir a la Home</button>
      <button onClick={navigateBack}>Back</button>
    </>
  )
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}
