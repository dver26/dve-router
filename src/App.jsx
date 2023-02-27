import './App.css'
import { lazy, Suspense } from 'react'

import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'

import Route from './Route.jsx'
import Router from './Router.jsx'

const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx')) // solo hace el import cuando el componente se vaya a renderizar

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

export default function App() {
  return (
    <main>
      <Suspense fallBack={<div>Loading...</div>}>
        <Router routes={routes} DefaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}
