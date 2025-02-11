import HeroProject from '././HeroProject';
import Main from './Main';
import image1 from '../../assets/project1/img1.png';
import image2 from '../../assets/project1/Screenshot 2025-02-04 193432.png';
import image3 from '../../assets/project1/Screenshot 2025-02-04 193556.png';
import image4 from '../../assets/project1/Screenshot 2025-02-04 194926.png';
import image5 from '../../assets/project1/Screenshot 2025-02-04 195013.png';
import image6 from '../../assets/project1/Screenshot 2025-02-04 195117.png';
import image7 from '../../assets/project1/Screenshot 2025-02-04 194321.png';
import image8 from '../../assets/project1/Screenshot 2025-02-04 193354.png';
import image9 from '../../assets/project1/Screenshot 2025-02-04 204330.png';
import image10 from '../../assets/project1/Screenshot 2025-02-04 204242.png';
import image11 from '../../assets/project1/Screenshot 2025-02-04 193432.png';
import image12 from '../../assets/project1/Screenshot 2025-02-04 204421.png';
import image13 from '../../assets/project1/Screenshot 2025-02-04 204400.png';
import image14 from '../../assets/project1/Recording-2025-02-04-210305.gif';
import image15 from '../../assets/project1/Recording-2025-02-04-210338.gif';
import image16 from '../../assets/project1/Screenshot 2025-02-04 210009.png';

const ProjectDetail1 = () => {
  return (
    <div>
      <div>
        <HeroProject />
        <Main />
      </div>
      <div className="mt-10 flex flex-col gap-10 font-montserrat lg:text-xl">
        <h1 className="text-3xl font-bold">Technical Details</h1>

        {/* อธิบาย Homepage */}
        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">1. Homepage</h1>
          <h2>✅ Hero Section</h2>
          <ul className="list-disc ml-5">
            <li>Use a full-width, high-resolution banner to grab attention.</li>
            <li>Add CSS animations for smooth image and text transitions.</li>
          </ul>
          <img src={image1} alt="" className="w-[500px]" />
          <h2>✅ Navigation Bar</h2>
          <ul className="list-disc ml-5">
            <li>
              Implement a sticky and responsive navigation bar for seamless
              browsing.
            </li>
            <li>
              Main categories: Home | Products | Collections | About Us |
              Contact
            </li>
          </ul>
          <img src={image2} alt="" className="w-[800px]" />
          <h2>✅ New Arrival Products Section </h2>
          <img src={image3} alt="" className="w-[500px]" />
        </div>

        {/* อธิบาย productpage */}
        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">2. Product Listing Page</h1>
          <p>
            ✅ Display a grid-based product listing with clear images and
            essential details.
          </p>
          <img src={image4} alt="" className="w-[500px]" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">3. Product Detail Page</h1>
          <p>
            ✅ Include a prominent “Add to Cart” button for easy purchasing.
          </p>
          <img src={image5} alt="" className="w-[500px]" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">
            4. Shopping Cart & Checkout Page
          </h1>
          <h2>✅ Shopping Cart</h2>
          <ul className="list-disc ml-5">
            <li>Allow users to increase/decrease item quantity directly.</li>
            <li>
              Implement automatic price calculation for real-time updates.
            </li>
            <li>Add a remove item button for easy cart management.</li>
          </ul>
          <img src={image6} alt="" className="w-[500px]" />
          <h2>✅ Checkout Page</h2>
          <ul className="list-disc ml-5">
            <li>
              Implement a multi-step form for a smoother checkout process (e.g.,
              Shipping Info → Payment Method → Order Confirmation).
            </li>
          </ul>
          <img src={image7} alt="" className="w-[500px]" />
        </div>
      </div>

      <div className="w-full mt-20 flex flex-col gap-5 font-montserrat">
        <h1 className="text-xl md:text-3xl font-bold lg:ml-52">
          The scope of my work
        </h1>
        <div className="flex flex-col border-l-4 border-black lg:mx-52 px-5 text-sm lg:text-md">
          <div>
            <p>
              For the Homepage, I was responsible for converting the design into
              code while enhancing the user experience with smooth animations. I
              implemented a responsive design to ensure seamless accessibility
              across all devices. Additionally, I developed the navigation bar
              for easy site navigation. I also worked on the “New Arrivals”
              section, integrating it with the database to dynamically display
              products. Lastly, I set up the UI and toggle functionality for the
              Chat Bot, allowing the team to further develop and refine its
              features.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 font-montserrat lg:text-xl flex flex-col gap-20">
        <h1 className="text-lg lg:text-xl font-bold">
          Key Components of the Homepage
        </h1>
        <div className="flex flex-col gap-5">
          <h2 className="underline font-bold">1. Responsive Design</h2>
          <ul>
            <li>
              Designed the layout to adapt seamlessly to different screen sizes
              using CSS Flexbox/Grid and TailwindCSS.
            </li>
            <li>
              Tested responsiveness across various devices, from desktops and
              tablets to mobile screens.
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 lg:gap-0">
            <div>
              <img src={image8} alt="" className="w-[500px]" />
              <p>Desktop</p>
            </div>
            <div>
              <img src={image9} alt="" className="w-[400px]" />
              <p>Tablet</p>
            </div>
            <div>
              <img src={image10} alt="" className="w-[300px]" />
              <p>Mobile</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="underline font-bold">2. Navbar</h2>
          <ul>
            <li>
              The navbar is designed to be responsive, transitioning into a
              dropdown menu on mobile devices.
            </li>
            <li>
              Users can easily open and close the menu with a simple click for a
              better mobile experience.
            </li>
          </ul>
          <div>
            <img src={image11} alt="" />
            <p>Desktop</p>
          </div>
          <div>
            <img src={image12} alt="" />
            <p>Tablet</p>
          </div>
          <div>
            <img src={image13} alt="" />
            <p>Mobile</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="underline font-bold">3. Animation</h2>
          <ul>
            <li>
              Implemented fade-in effects for sections to create a smooth and
              engaging appearance.
            </li>
            <li>
              Used slide-in animations for product displays, enhancing the
              dynamic feel of the page.
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-20">
            <img src={image14} alt="" className="w-[500px]" />
            <img src={image15} alt="" className="w-[500px]" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="underline font-bold">
            4. New Arrivals (Dynamic Data Fetching from the Back-end)
          </h2>
          <ul>
            <li>
              Utilized Fetch API / Axios to dynamically fetch product data from
              the database.
            </li>
            <li>
              The products automatically update when new items are added to the
              system, ensuring real-time accuracy.
            </li>
          </ul>
          <img src={image3} alt="" className="w-[500px]" />
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="underline font-bold">
            5. Chat Bot (Prepared Structure for Team to Continue Development)
          </h2>
          <ul>
            <li>
              Developed the UI and toggle functionality for the Chat Bot using
              JavaScript, allowing the team to easily integrate the bot’s
              features and continue development.
            </li>
          </ul>
          <img src={image16} alt="" className="w-[300px]" />
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail1;
