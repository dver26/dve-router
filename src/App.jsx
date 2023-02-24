import { useState } from 'react'
import './App.css'

export function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un react router desde cero</p>
      <a href="/about">Ir a Sobre nosotros</a>
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
      <a href="/">Ir a la Home</a>
    </>
  )
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}
