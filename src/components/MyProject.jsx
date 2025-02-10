import CardProject from './CardProject';
import ImageProject from '../assets/Recording-2025-02-04-210305.gif';
import { ScrollContext } from '../Context/ScrollContext';
import { useContext, forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyProject = forwardRef(function (props, ref) {
  const { projectRef } = useContext(ScrollContext);

  const project = [
    {
      id: 1,
      name: 'โปรเจค 1',
      description: 'รายละเอียดโปรเจค...',
      img: ImageProject,
    },
    {
      id: 2,
      name: 'โปรเจค 2',
      description: 'รายละเอียดโปรเจค...',
      img: ImageProject,
    },
    {
      id: 3,
      name: 'โปรเจค 3',
      description: 'รายละเอียดโปรเจค...',
      img: ImageProject,
    },
    {
      id: 4,
      name: 'โปรเจค 4',
      description: 'รายละเอียดโปรเจค...',
      img: ImageProject,
    },
  ];

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
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          data-aos="fade-up"
        >
          {project.map((item) => (
            <Link to={`/project/${item.id}`} key={item.id}>
              <CardProject
                img={item.img}
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
