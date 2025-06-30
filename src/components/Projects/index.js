import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import project1 from '../../assets/images/project-1.jpg'
import project2 from '../../assets/images/project-2.jpg'
import project3 from '../../assets/images/project-3.jpg'
import project4 from '../../assets/images/project-4.jpg'
import project5 from '../../assets/images/project-5.jpg'
import project6 from '../../assets/images/project-6.jpg'
import project7 from '../../assets/images/project-7.jpg'
import project8 from '../../assets/images/project-8.jpg'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div className="projects-img">
          <img src={project1} alt="projects1" />
          <img src={project2} alt="projects2" />
          <img src={project3} alt="projects3" />
          <img src={project4} alt="projects4" />
          <img src={project5} alt="projects5" />
          <img src={project6} alt="projects6" />
          <img src={project7} alt="projects7" />
          <img src={project8} alt="projects8" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
