import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {
  faAngular,
  faAws,
  faDocker,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  netCore,
  cSharp,
  spring,
  selenium,
  python,
  java,
  MSSQL,
  Mongo,
  cLang,
  fastAPI,
  polygon,
} from './imports'
import Loader from 'react-loaders'

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
                <img src={cSharp} alt="cSharp" />
                <img src={java} alt="java" />
                <img src={cLang} alt="cLang" />
                <img src={python} alt="python" />
              </div>
            </div>
            <div className="sub-heading">
              <h2>Frameworks</h2>
              <div className="tech-logos">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                <img src={netCore} alt="NETCore" />
                <FontAwesomeIcon icon={faNode} color="#339933" />
                <img src={spring} alt="spring" />
                <img src={fastAPI} alt="fastAPI" />
              </div>
            </div>
            <div className="sub-heading">
              <h2>Others</h2>
              <div className="tech-logos">
                <img src={Mongo} alt="Mongo" />
                <img src={MSSQL} alt="MSSQL" />
                <img src={polygon} alt="polygon" />
                <img src={selenium} alt="Selenium" />
                <FontAwesomeIcon icon={faDocker} color="#049cec" />
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
