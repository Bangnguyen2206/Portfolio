/* eslint-disable react/no-unescaped-entities */
import Person from "../assets/IMG_1426_2-removebg-preview.png";

const Hero = () => {
  const socialMedia = [
    {
      initial: "LinkedIn",
      link: "https://www.linkedin.com/in/bang-nguyen-750802273/",
    },
    {
      initial: "Github",
      link: "https://github.com/Bangnguyen2206",
    },
    {
      initial: "Instagram",
      link: "https://www.instagram.com/tuyet4902/",
    },
  ];

  return (
    <div className="relative">
      <div className="inset-x-0 mt-8 flex items-center justify-center font-roboto-slab text-[30px] font-black uppercase tracking-tighter text-white md:absolute md:top-[2%] md:mt-[unset] md:text-[135px] lg:top-[0%] lg:text-[170px] xl:top-[5%] xl:text-[250px]">
        <span>NG. Bang</span>
      </div>
      <div className="relative mx-auto flex h-full flex-col-reverse justify-center md:mt-8 md:max-w-none md:flex-row md:gap-x-6 xl:-mt-2">
        <div className="flex flex-none">
          <img
            src={Person}
            alt="Person"
            className="-mt-14 w-[250px] object-contain sm:w-[345px] md:mt-auto md:w-[400px] lg:w-[450px] xl:w-[560px]"
          />
        </div>
        <div className="relative mx-10 self-end font-poppins sm:mx-14 md:mx-0 md:pr-8 lg:pr-0 lg:pb-13">
          <div className="relative mb-4 ml-auto w-max text-2xl font-extrabold uppercase text-accent md:text-[32px] lg:mb-6 lg:text-[50px]">
            <div className="absolute top-full right-0 h-[2px] w-3/4 bg-accent md:top-[120%] lg:top-[150%]" />
            <span>Frontend Developer</span>
          </div>
          <div className="mb-4 text-justify text-[13px] font-medium text-light lg:max-w-[479px] lg:text-[15px]">
            <span>
             I'm a Frontend Developer with many years of experience in Web development. I have gained experience in Frontend and Backend development during my previous roles. With my knowledge of UX/UI design, I enjoy solving Frontend problems and creating the best user experience for users. I also spend time learning new technologies and best practices to become a better engineer. 
            </span>
          </div>
          <div className="text-right text-[13px] font-semibold text-accent md:mb-20 md:text-left lg:text-base">
            <div>
              <span>P: 0357911329</span>
            </div>
            <div>
              <span>E: bangtuyet2269@gmail.com</span>
            </div>
          </div>
          <div className="absolute top-[170%] right-0 flex flex-col items-center justify-end gap-y-[13px] gap-x-[30px] text-[15px] font-medium text-white/80 md:relative md:flex-row">
            {socialMedia.map((list, i) => (
              // eslint-disable-next-line react/jsx-no-target-blank
              <a
                key={i}
                href={list.link}
                target="_blank"
                className="transition-all hover:text-accent"
              >
                {list.initial}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
