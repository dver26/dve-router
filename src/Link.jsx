import { EVENTS } from './consts.js'

export function navigate(href) {
  window.history.pushState({}, '', href) // solo refleja el cambio de url pero no refresca la página
  // crear un evento personalizado para avisar de que ha cambiado la ruta
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function navigateBack() {
  window.history.back()
}

export default function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0 // primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault() // previene que no haga el comportamiento por defecto de el <a> que es navegar entre direcciones URL
      navigate(to) // navegación con SPA
    }

    navigate(to)
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
