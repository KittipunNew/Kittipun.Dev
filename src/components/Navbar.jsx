import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ScrollContext } from '../Context/ScrollContext';
import 'boxicons';

function Navbar() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { scrollToSection, aboutRef, skillsRef, projectRef, contactRef } =
    useContext(ScrollContext);

  return (
    <>
      {/* Mobile */}
      <nav className="flex justify-between p-3 bg-white fixed w-screen z-50 shadow-md lg:hidden">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button">
            <box-icon name="menu" size="lg"></box-icon>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow font-bogart font-bold md:text-xl md:gap-5"
          >
            <li>
              <button onClick={scrollToTop}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection(aboutRef)}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
            </li>
            <li>
              <button onClick={() => scrollToSection(projectRef)}>
                Project
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(contactRef)}>
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <Link
            to="https://github.com/KittipunNew?tab=repositories"
            className="btn btn-ghost flex items-center justify-center p-0"
            target="_Blank"
          >
            <box-icon
              type="logo"
              name="github"
              size="lg"
              animation="tada-hover"
            ></box-icon>
          </Link>
          <Link
            to="https://www.linkedin.com/in/kittipun-teerachokdumrongkul-348887330/"
            className="btn btn-ghost flex items-center justify-center p-0"
            target="_Blank"
          >
            <box-icon
              type="logo"
              name="linkedin-square"
              size="lg"
              animation="tada-hover"
            ></box-icon>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
