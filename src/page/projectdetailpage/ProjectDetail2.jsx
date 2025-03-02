import HeroProject from '././HeroProject';
import Main from './Main';
import image1 from '../../assets/project2/Screenshot 2025-03-02 164445.png';
import image2 from '../../assets/project2/Screenshot 2025-03-02 164510.png';
import image3 from '../../assets/project2/Screenshot 2025-03-02 164656.png';
import image4 from '../../assets/project2/Screenshot 2025-03-02 164817.png';

const ProjectDetail1 = () => {
  return (
    <div>
      <div>
        <HeroProject />
        <Main />
      </div>
      <div className="mt-10 flex flex-col gap-10 font-montserrat lg:text-xl">
        <h1 className="text-3xl font-bold">Technical Details</h1>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">
            Authentication & Authorization
          </h1>
          <ul className="list-disc ml-5 flex flex-col gap-2">
            <li>When opening the website, users will see the Login page.</li>
            <li>
              If they haven’t registered yet, they can click the Register button
              to sign up first.
            </li>
            <li>
              JWT (JSON Web Token) is used to manage authentication and access
              control.
            </li>
          </ul>
          <img src={image1} alt="" className="w-[1000px]" />
          <img src={image2} alt="" className="w-[1000px]" />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Task Management</h1>
          <ul className="list-disc ml-5 flex flex-col gap-2">
            <li>
              After logging in, users will be redirected to the Task Management
              page.
            </li>
            <li>They can add, edit, delete, and mark tasks as completed.</li>
            <li>
              Task data is stored in MongoDB, ensuring each user has their own
              task list.
            </li>
          </ul>
          <img src={image3} alt="" className="w-[1000px]" />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Dark Mode Toggle</h1>
          <ul className="list-disc ml-5 flex flex-col gap-2">
            <li>Supports Light/Dark Mode for a better user experience.</li>
            <li>Users can switch between modes based on their preference.</li>
          </ul>
          <img src={image4} alt="" className="w-[1000px]" />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Logout</h1>
          <ul className="list-disc ml-5 flex flex-col gap-2">
            <li>A Logout button allows users to sign out anytime.</li>
            <li>
              Upon logging out, the token is removed, and the user is redirected
              back to the Login page.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail1;
