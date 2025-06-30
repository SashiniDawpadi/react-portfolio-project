import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
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
            <div>
              <h2>Frontend technologies</h2>
            </div>
            <div>
              {' '}
              <h2>Backend technologies</h2>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Technologies
