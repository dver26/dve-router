import './App.css'

import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Router from './Router'

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
  }
]

export default function App() {
  return (
    <main>
      <Router routes={routes} />
    </main>
  )
}
