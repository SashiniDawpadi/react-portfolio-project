import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
} from './imports'
import Project from '../Project'

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

        <div className="work-list">
          <Project
            imgUrl={project1}
            title={'Trading Platform'}
            description={
              'Polygon, Solidity, Python, OpenAI, NodeJS'
            }
          />
          <Project
            imgUrl={project2}
            title={'Portfolio Project'}
            description={'wefheuehbi fefienvvrn'}
          />
          <Project
            imgUrl={project3}
            title={'Weather Reporter App'}
            description={
              'React, Vercel'
            }
          />

          <Project
            imgUrl={project4}
            title={'GPT-3 App'}
            description={
              'React, Vercel'
            }
          />
          <Project
            imgUrl={project5}
            title={'Microservices Project'}
            description={'wefheuehbi fefienvvrn'}
          />
          <Project
            imgUrl={project6}
            title={'Todo App'}
            description={
              'Fast API, React, MongoDB'
            }
          />
          <Project
            imgUrl={project7}
            title={' WebPortal for the Career Guidance Unit '}
            description={
              'Angular,NodeJS, MySQL, AWS'
            }
          />
          <Project
            imgUrl={project8}
            title={'COVID-19 Tracking System'}
            description={
              'PHP, HTML, CSS'
            }
          />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
