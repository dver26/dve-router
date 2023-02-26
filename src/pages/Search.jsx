import { useEffect } from 'react'

export default function Search({ routeParams }) {
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [])
  return <h1>Buscador de: {routeParams.query}</h1>
}
