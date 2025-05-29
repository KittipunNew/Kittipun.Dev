import { useContext } from 'react';
import GithubIcon from '../../icons/GithubIcon';
import GlobeIcon from '../../icons/GlobeIcon';
import { ProjectDataContext } from '../../Context/ProjectDataContext';
import { Link, useParams } from 'react-router-dom';

const HeroProject = () => {
  const { id } = useParams();

  const { projects } = useContext(ProjectDataContext);

  const project = projects.find((project) => project.id === parseInt(id));

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white h-14 lg:hidden"></div>
      <div>
        <img src={project.imgCard} alt="" className="rounded-lg" />
      </div>
      <div className="flex gap-5">
        <Link
          to={project.link}
          target="_blank"
          className="btn lg:btn-wide bg-black text-white"
        >
          <GlobeIcon />
          Live Demo
        </Link>
        <Link
          to={project.github}
          target="_blank"
          className="btn lg:btn-wide bg-black text-white"
        >
          <GithubIcon />
          Source Code
        </Link>
      </div>

      <h1 className="font-medium text-yellow-700 bg-yellow-100 rounded px-3 py-2">
        When accessing the website, it may take a moment to wait for the
        back-end to respond. This process may take 2–3 minutes.
      </h1>
    </div>
  );
};
export default HeroProject;
