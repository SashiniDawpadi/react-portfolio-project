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
              'Trading Platform which has imporoved the efficiency & security using Blockchain, ML & NLP'
            }
          />
          <Project
            imgUrl={project2}
            title={'Portfolio Project'}
            description={
              ' A personal portfolio website which showcases projects, skills, and professional experiences.'
            }
          />
          <Project
            imgUrl={project3}
            title={'Weather Reporter App'}
            description={
              'Real time weather reporing app for selected Sri Lankan towns.'
            }
          />

          <Project
            imgUrl={project4}
            title={'GPT-3 App'}
            description={
              'A web application which enhances the impact of GPT-3 on technology.'
            }
          />
          <Project
            imgUrl={project5}
            title={'Play Economy system'}
            description={
              'A full-stack application which is built using React and .NET core microservices architecture.'
            }
          />
          <Project
            imgUrl={project6}
            title={'Todo App'}
            description={'A simple CRUD app using FARM stack.'}
          />
          <Project
            imgUrl={project7}
            title={' WebPortal for the CGU '}
            description={
              'A comprehensive web application for the CGU, increasing student engagement.'
            }
          />
          <Project
            imgUrl={project8}
            title={'COVID-19 Tracking System'}
            description={
              'A tracking system to monitor pre-diagnosis movements of COVID-19 patients, enhancing early detection.'
            }
          />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
