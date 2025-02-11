import CardProject from './CardProject';
import { ScrollContext } from '../Context/ScrollContext';
import { useContext, forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ProjectDataContext } from '../Context/ProjectDataContext';

const MyProject = forwardRef(function (props, ref) {
  const { projectRef } = useContext(ScrollContext);

  const { projects } = useContext(ProjectDataContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลา animation (ms)
      offset: 100, // ระยะห่างก่อนเริ่มแสดง animation
      once: false, // เล่นแค่ครั้งเดียว (true) หรือเล่นทุกครั้งที่ scroll (false)
    });
  }, []);

  return (
    <div className="flex flex-col gap-10" ref={projectRef}>
      <h1 className="mx-5 lg:mx-16 font-montserrat font-bold text-xl lg:text-3xl">
        Project
      </h1>
      <div className="mx-5 lg:mx-16">
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 "
          data-aos="fade-up"
        >
          {projects.map((item) => (
            <Link
              to={`/project/${item.id}`}
              key={item.id}
              onClick={scrollToTop}
            >
              <CardProject
                img={item.imgCard}
                name={item.name}
                description={item.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});

export default MyProject;
