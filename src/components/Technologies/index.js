import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {
  faAws,
  faEthereum,
  faFigma,
  faGitAlt,
  faJava,
  faNode,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  netCore,
  jQuery,
  cSharp,
  spring,
  javaScript,
  HTML,
  CSS,
  angular,
  selenium,
} from './imports'
import Loader from 'react-loaders'
import { faC, faDatabase } from '@fortawesome/free-solid-svg-icons'

const Technologies = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Return a cleanup function to clear the timer
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container tech-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'T',
                'e',
                'c',
                'h',
                'n',
                'o',
                'l',
                'o',
                'g',
                'i',
                'e',
                's',
              ]}
              idx={15}
            />
          </h1>
          <div>
            <div className="sub-heading">
              <h2>Programming Languages</h2>
              <div className="tech-logos">
                <FontAwesomeIcon icon={faJava} color="#28a4d9" />
                <img src={cSharp} alt="cSharp" />
                <img src={javaScript} alt="js" />
                <FontAwesomeIcon icon={faC} color="#28a4d9" />
                <FontAwesomeIcon icon={faPython} color="#efd81d" />               
              </div>
            </div>
            <div className="sub-heading">
              <h2>Web Development</h2>
              <div className="tech-logos">
                <img src={HTML} alt="html" />
                <img src={CSS} alt="css" />
                <img src={angular} alt="angular" />
                <FontAwesomeIcon icon={faNode} color="#339933" />
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                <img src={jQuery} alt="jquery" />
                <img src={netCore} alt="NETCore" />
                <img src={spring} alt="Spring" />
              </div>
            </div>
            <div className="sub-heading">
              <h2>Others</h2>
              <div className="tech-logos">
                <FontAwesomeIcon icon={faDatabase} color="#fff" />
                <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                <img src={selenium} alt="Selenium" />
                <FontAwesomeIcon icon={faFigma} color="pink" />
                <FontAwesomeIcon icon={faEthereum} color="#5a5454" />
                <FontAwesomeIcon icon={faAws} color="#f06529" />
                <FontAwesomeIcon icon={faAws} color="#f06529" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Technologies
