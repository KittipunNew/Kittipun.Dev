import { useContext, forwardRef, useEffect } from 'react';
import { ScrollContext } from '../Context/ScrollContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg from '../assets/465138558_8613557188692050_7528697857588063327_n.jpg';

const AboutMe = forwardRef(function (props, ref) {
  const { aboutRef } = useContext(ScrollContext);

  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลา animation (ms)
      offset: 100, // ระยะห่างก่อนเริ่มแสดง animation
      once: false, // เล่นแค่ครั้งเดียว (true) หรือเล่นทุกครั้งที่ scroll (false)
    });
  }, []);

  return (
    <div ref={aboutRef}>
      <h1 className="font-montserrat font-bold text-xl lg:text-3xl mt-10 lg:mt-20 mb-10 mx-5 lg:mx-16">
        ABOUT ME
      </h1>
      <div className="px-5 lg:flex justify-around">
        <div>
          <img
            src={aboutImg}
            alt=""
            className="w-52 mt-5 lg:w-72"
            data-aos="fade-up"
          />
        </div>
        <div
          className="lg:w-[60%] lg:px-20 xl:flex flex-col justify-center"
          data-aos="fade-up"
        >
          <h1 className="font-bogart text-2xl mt-5 lg:text-4xl">
            I am a Full Stack Developer.
          </h1>
          <p className="font-montserrat text-sm mt-5 lg:text-lg">
            I’m a full-stack developer passionate about creating smooth and
            dynamic web experiences, especially in building full-stack
            applications using the MERN Stack (MongoDB, Express, ReactJS,
            Node.js). I also have a strong foundation in front-end technologies
            like TailwindCSS and JavaScript. I graduated from the Junior
            Software Development course at Generation Thailand, where I worked
            on an e-commerce furniture store project with my team. This
            experience helped me hone my problem-solving skills and learn how to
            collaborate effectively in a team. You can check out some of my
            projects on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
