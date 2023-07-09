/* eslint-disable react/jsx-key */
import portfolio from '../data/portfolio.js'
import PortfolioItem from './projectItem'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-10">
    <section>
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${
              isVisible ? 'animate__animated animate__backInLeft' : ''
            }`}
          >
            {portfolio.map((project) => (
              <PortfolioItem
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
              />
            ))}
          </div>
        )}
      </TrackVisibility>
      </section>
     
    </div>
  )
}

export default Portfolio
