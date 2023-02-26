import './App.css'

import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Router from './Router'
import Page404 from './pages/404'
import SearchPage from './pages/Search'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/twitch',
    Component: () => <h1>Twitch</h1>
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

export default function App() {
  return (
    <main>
      <Router routes={routes} DefaultComponent={Page404} />
    </main>
  )
}
