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
            Hi, my name is Kittipun I’m a Junior Full Stack Developer with a
            strong passion for coding and software development. I started
            learning by myself and later joined an intensive full-stack
            bootcamp, where I gained hands-on experience with technologies like
            HTML, CSS, JavaScript, React, Node.js, and MongoDB. I also had the
            opportunity to work closely with teammates, which helped me improve
            both technical and soft skills such as communication,
            problem-solving, and time management. So far, I’ve built practical
            projects like a complete To-Do List application with user
            authentication, and an E-commerce website that supports various
            features from product display to backend management. My career goal
            is to grow steadily as a Full Stack Developer — deepening my
            expertise in both frontend and backend technologies, while also
            expanding my knowledge into broader areas of software development. I
            believe every challenge is an opportunity to learn, and I look
            forward to being part of a team that creates meaningful and
            impactful solutions.
          </p>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
