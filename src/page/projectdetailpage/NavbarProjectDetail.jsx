import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProjectDataContext } from '../../Context/ProjectDataContext';

const NavbarProjectDetail = () => {
  const { id } = useParams();

  const { projects } = useContext(ProjectDataContext);

  const project = projects.find((project) => project.id === parseInt(id));

  return (
    <nav className="hidden lg:flex p-5 justify-between items-center">
      <div className="text-3xl font-montserrat font-bold">
        <h1>{project.name}</h1>
      </div>
      <Link to="/" className="btn btn-wide bg-black text-white font-bogart">
        Back
      </Link>
    </nav>
  );
};
export default NavbarProjectDetail;
