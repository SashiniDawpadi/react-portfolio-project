import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' index element={<About />} />
          <Route path='technologies' index element={<Technologies />} />
          <Route path='projects' index element={<Projects />} />
          <Route path='contact' index element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
