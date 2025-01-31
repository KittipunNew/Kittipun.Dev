import { useContext, forwardRef } from "react";
import { ScrollContext } from "../Context/ScrollContext";

const AboutMe = forwardRef(function (props, ref) {
  const { aboutRef } = useContext(ScrollContext);
  return (
    <div ref={aboutRef}>
      <h1 className="font-montserrat font-bold text-sm lg:text-lg mt-10 lg:mt-20 mb-10 mx-5 lg:mx-16">
        ABOUT ME
      </h1>
      <div className="px-5 lg:flex justify-around">
        <div>
          <img
            src="https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/465138558_8613557188692050_7528697857588063327_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGoyZKAAZgPPKeWFRngxKayfwBj8IU4y65_AGPwhTjLrs_Dl_3sShb5CwbcVgtD1YOlpO9sRaeA-PIobzGnkXn7&_nc_ohc=RXw8vsDTvcQQ7kNvgFUtP5S&_nc_oc=Adi4GStd71CtFdqeuNOm8x7BqrY2zG9Q0Xc9b9OrQFn-SCTb4EAT_EOAPMx-J2YARIk&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=A87t4bQMzaeT2RGENobxa2t&oh=00_AYD34Eb7YEUTAVH_tNvciYVMLJIv0mai0IRXaxolVk-Xbg&oe=67A25268"
            alt=""
            className="w-52 mt-5 lg:w-72"
          />
        </div>
        <div className="lg:w-[60%] lg:px-20 xl:flex flex-col justify-center">
          <h1 className="font-bogart text-2xl mt-5 lg:text-4xl">
            I am a Junior Full Stack Developer.
          </h1>
          <p className="font-montserrat text-sm mt-5 lg:text-lg">
            I’m a software developer passionate about creating smooth and
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
