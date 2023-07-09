/* eslint-disable react/jsx-key */
import timeline from '../data/timeline.js'
import TimelineItem from './timelineItem'
import Title from './title'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

function Timeline() {
  return (
    <div className="my-10">
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={`flex flex-col md:flex-row justify-center my-20" id="timeline ${
              isVisible ? 'animate__animated animate__backInLeft' : ''
            }`}
          >
            <div className="w-full md:w-7/12 px-10">
              <Title>Experiences</Title>
              {timeline.map((item) => (
                <TimelineItem
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
                />
              ))}
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
  )
}

export default Timeline
