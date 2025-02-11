import { useContext } from 'react';
import { ScrollContext } from '../Context/ScrollContext';
import Profileimg from '../assets/2691251a-69b6-44a2-afe4-c8d3e578da44.jpg';
import imageProfile from '../assets/profile.jpg';

function HeroSection() {
  const { scrollToSection, aboutRef, skillsRef, projectRef, contactRef } =
    useContext(ScrollContext);

  return (
    <div className="lg:flex justify-between bg-gray-50">
      <div className="h-20 lg:hidden"></div>
      <div className="px-5 py-7 flex flex-col gap-3 md:flex-row w-full">
        <div className="flex flex-col w-full">
          {/* Navbar Desktop */}
          <nav className="hidden lg:flex items-center justify-between font-bogart text-2xl xl:text-3xl">
            <ul className="flex gap-10">
              <li>
                <button
                  onClick={() => {
                    scrollToSection(aboutRef);
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection(skillsRef);
                  }}
                >
                  Skill
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection(projectRef);
                  }}
                >
                  Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection(contactRef);
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
            <div className="flex gap-5">
              <a
                href="https://github.com/KittipunNew?tab=repositories"
                className="btn btn-ghost flex items-center justify-center p-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon
                  type="logo"
                  name="github"
                  size="lg"
                  animation="tada-hover"
                ></box-icon>
              </a>
              <a
                href="https://www.linkedin.com/in/kittipun-teerachokdumrongkul-348887330/"
                className="btn btn-ghost flex items-center justify-center p-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon
                  type="logo"
                  name="linkedin-square"
                  size="lg"
                  animation="tada-hover"
                ></box-icon>
              </a>
            </div>
          </nav>
          <div className="flex flex-col gap-10 justify-around items-start h-full">
            <div className="lg:mt-10">
              <h1 className="font-bogart text-5xl text-black mb-5 md:text-7xl lg:text-8xl xl:text-9xl">
                Hello,
                <br />
                I’m Kittipun
              </h1>
              <a
                href="https://drive.google.com/file/d/1kFPC9pTiBkF2qiKiGiklbvlRSwZ5WPJZ/view?usp=sharing"
                className="btn btn-wide font-bogart bg-black text-white rounded-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD CV
              </a>
            </div>
            <div>
              <p className="font-montserrat mt-10 ml-1 text-xs md:text-base lg:text-lg">
                JUNIOR SOFTWARE DEVELOPER
              </p>
            </div>
          </div>
        </div>
        <img
          src={imageProfile}
          alt=""
          className="rounded-3xl md:w-96 md:h-96 lg:hidden"
        />
      </div>
      <img
        src={Profileimg}
        alt=""
        className="hidden lg:flex w-[40%] h-screen rounded-tl-3xl rounded-bl-3xl object-cover object-top"
      />
    </div>
  );
}

export default HeroSection;
