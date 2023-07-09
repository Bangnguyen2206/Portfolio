/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({ handleSidebar, renderTheme }) => {
  const navbarMenu = [
     {
      name: "Home",
      link: "#",
    },
    {
      name: "Experiences",
      link: "#services",
    },
    {
      name: "Education",
      link: "#timeline",
    },
    {
      name: "About",
      link: "#testimonials",
    },
  ]

  return (
    <div className="flex items-center justify-center px-10  py-2 bg-accent">
     <h1 className="text-white/90 font-xl">@Created by Bang Nguyen</h1>
    </div>
  )
}

export default Footer
