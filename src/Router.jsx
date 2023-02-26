import { useEffect, useState } from 'react'
import { EVENTS } from './consts'
import { match } from 'path-to-regexp'

export default function Router({ routes = [], DefaultComponent }) {
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

  let routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    // hemos usado path-to-regexp
    // para poder detectar rtutas dinámicas como por ejemplo
    // /search/:query <- :query es una ruta dinámica

    const matchedUrl = match(path, { decode: decodeURIComponent })
    const matched = matchedUrl(currentPath)
    if (!matched) return false

    // guardar los parámetros de la url que eran dinámicos
    // y que hemos extraído con path-to-regexp
    // por ejemplo si la ruta es /search/:query
    // y la url es /search/javascript
    // matchedd.params.query === 'javascript'

    // /search/:query
    routeParams = matched.params // {query: 'javascript} // /search/javascript
    return true
  })?.Component

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  )
}
