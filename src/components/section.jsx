/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

const Section = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={`container p-4 mx-auto space-y-16 sm:p-10 ${
              isVisible ? 'animate__animated animate__backInLeft' : ''
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold leadi sm:text-5xl text-white">
                My Skills
              </h3>
              <p className="max-w-2xl text-gray-400">
                Bringing client’s vision into reality by providing high quality products in the shortest time!
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex space-x-6">
                <img
                  alt=""
                  className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3-f6MUz5x9dRMqMgDYAjXgVD9f9R0zj_xw&usqp=CAU"
                />
                <div className="flex-col hidden lg:flex">
                  <h4 className="text-xl font-semibold">ReactJS | NuxtJS</h4>
                  <p className="text-sm dark:text-gray-400">Frontend Development</p>
                  
                </div>
              </div>
              <div className="flex space-x-6">
                <img
                  className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBS2slrS2CcKV7YUbbf4-DCpKo60hSeyFxzA&usqp=CAU"
                />
                <div className="flex-col hidden lg:flex">
                  <h4 className="text-xl font-semibold">Vue | Prisma | Nuxt</h4>
                  <p className="text-sm dark:text-gray-400">Frontend Development</p>
                 
                </div>
              </div>
              <div className="flex space-x-6">
                <img
                  alt=""
                  className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUeNhj5f0LqX0ksCdkDIKFErlXKT9F2JRisg&usqp=CAU"
                />
                <div className="flex-col hidden lg:flex">
                  <h4 className="text-xl font-semibold">NodeJS | MongDB</h4>
                  <p className="text-sm dark:text-gray-400">Backend Development</p>
                 
                </div>
              </div>
              <div className="flex space-x-6">
                <img
                  alt=""
                  className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDiA-Dn5ClcRi7PEDTh6e8pSNPYEeZAkk7CQ&usqp=CAU"
                />
                <div className="flex-col hidden lg:flex">
                  <h4 className="text-xl font-semibold">GraphQL</h4>
                  <p className="text-sm dark:text-gray-400">Query language for your API</p>
                  
                </div>
              </div>
              <div className="flex space-x-6">
                <img
                  alt=""
                  className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src="data:image/png;base64,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"
                />
                <div className="flex-col hidden lg:flex">
                  <h4 className="text-xl font-semibold">Microservices | Eng</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                  
                </div>
              </div>
              <div className="flex space-x-6">
                <img
                  alt=""
                  className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXaviscOAtBO4ESw7Cg-5iqhVSzoOxy0gFWg&usqp=CAU"
                />
                <div className="flex-col hidden lg:flex">
                  <h4 className="text-xl font-semibold">Git | VSCode | Figma</h4>
                  <p className="text-sm dark:text-gray-400">Developmet Tools</p>
                  
                </div>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </section>
  )
}

export default Section
