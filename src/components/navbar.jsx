/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = ({ handleSidebar, renderTheme }) => {
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
    <div className="flex items-center justify-between px-10 pt-[45px]">
      <div className="flex gap-x-[100px]">
        <div className="w-[50px] h-[50px] bg-accent rounded-lg flex items-center justify-center">
          <a
            href={'/'}
            className="font-poppins font-bold hover:bg-accent lg:text-lg xl:text-2xl text-white/80"
          >
            B.
          </a>
        </div>
        <div className="hidden items-center gap-x-[50px] font-roboto font-semibold text-white/80 lg:flex lg:text-base xl:text-xl">
          {navbarMenu.map((menu, i) => (
            <a href={menu.link} key={i} className="hover:text-white">
              {menu.name}
            </a>
          ))}
        </div>
      </div>
      <div className="hidden gap-x-[30px] text-white lg:flex items-center justify-center">
        <div>
          <a
          href={'/#contact-me'}
          className="rounded-lg bg-accent/90 px-4 py-2 font-poppins font-bold hover:bg-accent lg:text-base xl:text-base"
        >
          Contact Me
        </a>
        </div>
      </div>
      <div className="block lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl text-white"
          onClick={handleSidebar}
        />
      </div>
    </div>
  )
}

export default Navbar
