import './App.css'

import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Router from './Router.jsx'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'
import Route from './Route.jsx'

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

export default function App() {
  return (
    <main>
      <Router routes={routes} DefaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}
