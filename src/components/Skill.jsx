import { useContext, forwardRef, useEffect } from 'react';
import { ScrollContext } from '../Context/ScrollContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HtmlIcon from '../icons/HtmlIcon';
import CssIcon from '../icons/CssIcon';
import JavascriptIcon from './../icons/JavascriptIcon';
import NodeIcon from './../icons/NodeIcon';
import ViteIcon from './../icons/ViteIcon';
import ReactIcon from './../icons/ReactIcon';
import TailwindIcon from './../icons/TailwindIcon';
import ExpressIcon from './../icons/ExpressIcon';
import DaisyUiIcon from './../icons/DaisyUiIcon';
import MongoDBIcon from '../icons/MongoDBIcon';
import MaterialUILogo from './../icons/MateriaUILogo';

const Skill = forwardRef(function (props, ref) {
  const { skillsRef } = useContext(ScrollContext);

  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลา animation (ms)
      offset: 100, // ระยะห่างก่อนเริ่มแสดง animation
      once: false, // เล่นแค่ครั้งเดียว (true) หรือเล่นทุกครั้งที่ scroll (false)
    });
  }, []);

  return (
    <div className="mt-20 text-sm w-full" ref={skillsRef}>
      <div className="mx-5 lg:mx-16 font-montserrat w-full">
        <h1 className="font-bold text-xl lg:text-3xl ">SKILLS</h1>
        <h1 className="w-full lg:text-lg">
          I like to take responsibility to craft aesthetic user experience using
          modern frontend architecture.
        </h1>
      </div>

      <div className="pt-5 flex flex-col lg:items-start mx-5 lg:mx-12 gap-5 lg:gap-10">
        <div data-aos="fade-up">
          <h1 className="text-lg lg:text-xl font-bold font-montserrat mt-10">
            LANGUAGES AND TOOLS
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-20 mb-10">
            <HtmlIcon />
            <CssIcon />
            <JavascriptIcon />
            <NodeIcon />
            <ViteIcon />
          </div>
        </div>

        <div data-aos="fade-up">
          <h1 className="text-lg lg:text-xl font-bold font-montserrat">
            LIBRAIES AND FRAMEWORKS
          </h1>
          <div
            className="flex flex-wrap justify-center items-center gap-5 lg:gap-20 mb-10"
            data-aos="fade-up"
          >
            <ReactIcon />
            <TailwindIcon />
            <ExpressIcon />
            <DaisyUiIcon />
            <MaterialUILogo />
          </div>
        </div>

        <div data-aos="fade-up">
          <h1 className="text-lg lg:text-xl font-bold font-montserrat">
            DATA BASE
          </h1>
          <div
            className="flex flex-wrap justify-center items-center gap-5 lg:gap-20 mb-10"
            data-aos="fade-up"
          >
            <MongoDBIcon />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skill;
