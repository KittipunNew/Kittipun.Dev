import { useContext } from 'react';
import { ProjectDataContext } from '../../Context/ProjectDataContext';
import { useParams } from 'react-router-dom';

const Main = () => {
  const { id } = useParams();

  const { projects } = useContext(ProjectDataContext);

  const project = projects.find((project) => project.id === parseInt(id));

  return (
    <div className="mt-14 flex flex-col lg:flex-row gap-5">
      <div className="font-montserrat flex flex-col gap-3 w-full lg:w-[70%]">
        <h1 className="text-3xl font-bold">Project Overview</h1>
        <p>{project.overview}</p>
        <h1 className="text-3xl font-bold">Key Features</h1>
        <ul className="list-disc ml-5">
          {project.keyFeatures.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="border-2 w-full lg:w-[30%] lg:ml-10 p-5 rounded-md">
        <h1 className="text-3xl font-bold mb-3">Technologies Used</h1>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((item, index) => (
            <li key={index} className="badge badge-neutral">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Main;
