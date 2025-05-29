import HeroProject from './HeroProject';
import Main from './Main';
import { Link } from 'react-router-dom';
import images1 from '../../assets/Gearup/Screenshot 2025-05-19 173320.png';
import images2 from '../../assets/Gearup/Screenshot 2025-05-19 172824.png';
import images3 from '../../assets/Gearup/Screenshot 2025-05-19 172909.png';
import images4 from '../../assets/Gearup/Screenshot 2025-05-22 190049.png';
import images5 from '../../assets/Gearup/Screenshot 2025-05-19 173716.png';
import images6 from '../../assets/Gearup/Screenshot 2025-05-22 190207.png';
import images7 from '../../assets/Gearup/Screenshot 2025-05-19 173843.png';
import images8 from '../../assets/Gearup/Screenshot 2025-05-19 174342.png';
import images9 from '../../assets/Gearup/Screenshot 2025-05-19 174736.png';
import images10 from '../../assets/Gearup/Screenshot 2025-05-19 174916.png';
import images11 from '../../assets/Gearup/Screenshot 2025-05-19 174950.png';
import images12 from '../../assets/Gearup/Screenshot 2025-05-19 175030.png';
import images13 from '../../assets/Gearup/Screenshot 2025-05-19 174252.png';
import images14 from '../../assets/Gearup/Screenshot 2025-05-19 174227.png';
import images15 from '../../assets/Gearup/Screenshot 2025-05-19 174024.png';
import images16 from '../../assets/Gearup/Screenshot 2025-05-19 174049.png';
import images17 from '../../assets/Gearup/Screenshot 2025-05-19 174111.png';
import images18 from '../../assets/Gearup/Screenshot 2025-05-19 174134.png';
import images19 from '../../assets/Gearup/Screenshot 2025-05-19 175102.png';
import images20 from '../../assets/Gearup/Screenshot 2025-05-19 175159.png';
import images21 from '../../assets/Gearup/Screenshot 2025-05-22 190846.png';
import images22 from '../../assets/Gearup/Screenshot 2025-05-21 141055.png';
import images23 from '../../assets/Gearup/Screenshot 2025-05-21 142928.png';
import images24 from '../../assets/Gearup/Screenshot 2025-05-22 191019.png';
import images25 from '../../assets/Gearup/Screenshot 2025-05-19 173320.png';
import images26 from '../../assets/Gearup/Screenshot 2025-05-19 173226.png';
import images27 from '../../assets/Gearup/Screenshot 2025-05-19 173204.png';
import images28 from '../../assets/Gearup/Screenshot 2025-05-22 191202.png';
import images29 from '../../assets/Gearup/Screenshot 2025-05-22 191222.png';
import images30 from '../../assets/Gearup/admindashboard/Screenshot 2025-05-25 171857.png';
import images31 from '../../assets/Gearup/admindashboard/Screenshot 2025-05-25 171926.png';
import images32 from '../../assets/Gearup/admindashboard/Screenshot 2025-05-25 172031.png';
import images33 from '../../assets/Gearup/admindashboard/Screenshot 2025-05-25 172049.png';
import images34 from '../../assets/Gearup/admindashboard/Screenshot 2025-05-25 172104.png';
import images35 from '../../assets/Gearup/admindashboard/Screenshot 2025-05-25 172135.png';

const ProjectDetail2 = () => {
  return (
    <div>
      <div>
        <HeroProject />
        <Main />
      </div>
      <div className="mt-10 flex flex-col gap-10 font-montserrat lg:text-xl">
        <h1 className="text-3xl font-bold">Technical Details</h1>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Home Page</h1>
          <img src={images1} alt="" className="w-[1000px]" />

          <ul className="list-disc ml-5 flex flex-col gap-10 mt-10">
            <li className="space-y-10">
              <h1>Displays best-selling products</h1>
              <img src={images2} alt="" className="w-[1000px]" />
            </li>
            <li className="space-y-10">
              <h1>
                Showcases products by categories such as Notebook, Monitor,
                Accessories, etc.
              </h1>
              <img src={images3} alt="" className="w-[1000px]" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Navbar</h1>

          <ul className="list-disc ml-5 flex flex-col gap-10">
            <li className="space-y-10">
              <h1>Category selection menu</h1>
              <img src={images4} alt="" className="w-[1000px]" />
            </li>
            <li className="space-y-10">
              <h1>Search bar</h1>
              <img src={images5} alt="" className="w-[500px]" />
            </li>
            <li className="space-y-10">
              <h1>
                User dropdown menu (login/logout, profile, wishlist, etc.)
              </h1>
              <img src={images6} alt="" className="w-[400px]" />
            </li>
            <li className="space-y-10">
              <h1>Real-time cart item counter</h1>
              <img src={images7} alt="" className="w-[100px]" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">All Products / Category Page</h1>

          <ul className="list-disc ml-5 flex flex-col gap-10 ">
            <li className="space-y-10">
              <h1>Product list with pagination</h1>
              <img src={images8} alt="" className="w-[1000px]" />
            </li>
            <li className="space-y-10">
              <h1>
                Filters: Search by name, sort by price, price range selector,
                and category filter
              </h1>
              <img src={images9} alt="" className="w-[1000px]" />
            </li>
            <li className="space-y-10">
              <h1>
                When a category is selected, only relevant products are shown
              </h1>
              <img src={images10} alt="" className="w-[1000px]" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Product Detail Page</h1>

          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li className="space-y-10">
              <h1>Shows product info, details, and specifications</h1>
            </li>
            <li className="space-y-10">
              <h1>
                Buttons to adjust quantity, add to cart, and add to wishlist
              </h1>
              <img src={images11} alt="" className="w-[1000px]" />
            </li>
            <li className="space-y-10">
              <h1>Displays “Related Products” section at the bottom</h1>
              <img src={images12} alt="" className="w-[1000px]" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">User Profile Page</h1>

          <ul className="list-disc ml-5 flex flex-col gap-10 ">
            <li className="space-y-10">
              <h1>Account Overview: Displays user summary</h1>
              <img src={images13} alt="" className="w-[1000px]" />
            </li>
            <li className="space-y-10">
              <h1>My Profile: Edit personal information</h1>
              <img src={images14} alt="" className="w-[1000px]" />
            </li>
            <li className="space-y-10">
              <h1>Wishlist: Shows liked/favorite products</h1>
              <img src={images15} alt="" className="w-[1000px]" />
            </li>
            <li className="space-y-10">
              <h1>My Order: View order status</h1>
              <img src={images16} alt="" className="w-[1000px]" />
            </li>
            <li className="space-y-10">
              <h1>Shipping Address: Add/remove/select shipping addresses</h1>
              <img src={images17} alt="" className="w-[1000px]" />
              <img src={images18} alt="" className="w-[1000px]" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Product Detail Page</h1>

          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li className="space-y-10">
              <h1>Displays all added products</h1>
            </li>
            <li className="space-y-10">
              <h1>Increase/decrease item quantity</h1>
              <img src={images19} alt="" className="w-[1000px]" />
            </li>
            <li className="space-y-10">
              <h1>Select shipping address</h1>
              <img src={images20} alt="" className="w-[1000px]" />
            </li>
            <li className="space-y-10">
              <h1>Choose payment method: Credit Card or COD</h1>
              <img src={images21} alt="" className="w-[1000px]" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">
            Credit Card Payment (Stripe Integration)
          </h1>

          <ul className="list-disc ml-5 flex flex-col gap-10 ">
            <li className="space-y-10">
              <h1>Redirects to Stripe Checkout page</h1>
              <img src={images22} alt="" className="w-[1000px]" />
            </li>
            <li className="space-y-10">
              <h1>
                On successful payment, the order is saved and a confirmation
                page is shown
              </h1>
              <img src={images23} alt="" className="w-[1000px]" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Cash on Delivery (COD)</h1>

          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li className="space-y-10">
              <h1>Saves the order instantly</h1>
            </li>
            <li className="space-y-10">
              <h1>Redirects to a success confirmation page</h1>
            </li>
            <li className="space-y-10">
              <h1>Users can track their order status</h1>
              <img src={images24} alt="" className="w-[1000px]" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Responsive Design</h1>

          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li className="space-y-10">
              <h1>Built with TailwindCSS for full responsiveness</h1>
            </li>
            <li className="space-y-10">
              <h1>UX/UI optimized for Desktop, Tablet, and Mobile devices</h1>
              <img src={images25} alt="" className="w-[1000px]" />
              <img src={images26} alt="" className="w-[500px]" />
              <img src={images27} alt="" className="w-[300px]" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Authentication System</h1>

          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li className="space-y-10">
              <h1>Uses Firebase Authentication</h1>
            </li>
            <li className="space-y-10">
              <h1>Stores token to verify user roles and login status</h1>
              <img src={images28} alt="" className="w-[1000px]" />
              <img src={images29} alt="" className="w-[1000px]" />
            </li>
          </ul>
        </div>

        <div className="mt-20">
          <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>
          <p>
            Accessible only to users with the role of Admin, secured with
            Firebase Authentication and Firestore-based role access control.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Login Page (Admin Only)</h1>

          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li className="space-y-10">
              <h1>
                Uses Firebase Authentication and Firestore for managing
                role-based access
              </h1>
            </li>
            <li className="space-y-10">
              <h1>
                Only users with the role admin can access the admin dashboard
              </h1>
            </li>
            <li className="space-y-10">
              <h1>Login/Logout functionality is restricted to admin users</h1>
            </li>
            <li className="space-y-10">
              <h1>Admin accounts are managed via the Firebase Console</h1>
            </li>
            <li className="space-y-10">
              <h1>
                Firestore is used to store roles and verify user access before
                entering the dashboard
              </h1>
              <img src={images30} alt="" className="w-[1000px]" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Product List Page</h1>

          <h1>Search products by</h1>
          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li className="space-y-10">
              <h1>Product name</h1>
            </li>
            <li className="space-y-10">
              <h1>Category</h1>
            </li>
            <li className="space-y-10">
              <h1>Date added</h1>
            </li>
          </ul>

          <h1>Product table includes </h1>
          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li className="space-y-10">
              <h1>Edit button</h1>
            </li>
            <li className="space-y-10">
              <h1>Add to Best Sellers button</h1>
            </li>
            <li className="space-y-10">
              <h1>Delete button</h1>
            </li>
            <li className="space-y-10">
              <h1>View Details button</h1>
            </li>
            <img src={images31} alt="" className="w-[1000px]" />
          </ul>

          <h1>Best Sellers Table</h1>
          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li className="space-y-10">
              <h1>Limited to a maximum of 8 products</h1>
            </li>
            <li className="space-y-10">
              <h1>Includes Remove from Best Sellers button</h1>
            </li>
            <img src={images32} alt="" className="w-[1000px]" />
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Add New Product Page</h1>

          <h1>Product creation form includes</h1>
          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li className="space-y-10">
              <h1>Product name</h1>
            </li>
            <li className="space-y-10">
              <h1>Price</h1>
            </li>
            <li className="space-y-10">
              <h1>Product description</h1>
            </li>
            <li className="space-y-10">
              <h1>Category</h1>
            </li>
            <li className="space-y-10">
              <h1>Product image upload</h1>
            </li>
          </ul>

          <h1>All product data is stored in MongoDB</h1>
          <img src={images33} alt="" className="w-[1000px]" />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Order Management Page</h1>

          <h1>Displays a table of all customer orders</h1>
          <img src={images34} alt="" className="w-[1000px]" />

          <h1>Each order shows</h1>
          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li className="space-y-10">
              <h1>Customer name</h1>
            </li>
            <li className="space-y-10">
              <h1>Product details</h1>
            </li>
            <li className="space-y-10">
              <h1>Shipping address</h1>
            </li>
            <li className="space-y-10">
              <h1>Payment method (Credit Card / COD)</h1>
            </li>
            <li className="space-y-10">
              <h1>Order status (Pending, Shipped, Delivered, etc.)</h1>
            </li>
          </ul>

          <h1>Key functionalities</h1>
          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li className="space-y-10">
              <h1>Search orders by Order ID or customer name</h1>
            </li>
            <li className="space-y-10">
              <h1>Filter by order status</h1>
            </li>
            <li className="space-y-10">
              <h1>Filter by payment method</h1>
            </li>
            <li className="space-y-10">
              <h1>Buttons to update order status</h1>
            </li>
            <img src={images35} alt="" className="w-[1000px]" />
          </ul>
        </div>

        <div className="mt-20">
          <h1 className="text-2xl font-bold mb-5">Back-end API</h1>
          <p>
            The back-end system for the E-Commerce website is designed to
            support both customer and admin operations. It is built using
            Node.js + Express with MongoDB as the primary database. The system
            also integrates third-party services such as Firebase
            Authentication, Stripe, and Cloudinary.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">API Documentation</h1>

          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li className="space-y-10">
              <Link
                to="https://backend-gearuptech.onrender.com/api-docs/"
                className="text-blue-500 hover:text-blue-900"
              >
                Swagger UI (API Docs)
              </Link>
            </li>
          </ul>

          <h1 className="text-xl">How to Use Token with Swagger UI</h1>
          <p>
            To test protected routes using Swagger UI, you need to log in using
            Firebase Authentication first and retrieve your JWT token (ID token)
            to use as a Bearer Token.
          </p>

          <h1>Admin Test Account</h1>
          <div className="bg-gray-100 p-5 rounded-lg">
            <p className="mb-5">
              If you're testing the API as an admin, you can use the following
              test credentials
            </p>
            <ul className="list-disc ml-5 flex flex-col gap-5 ">
              <li>
                Email:{' '}
                <span className="text-red-900 font-bold">test@email.com</span>
              </li>
              <li>
                Password:{' '}
                <span className="text-red-900 font-bold">testadmin1234</span>
              </li>
            </ul>
            <p className="mt-5">
              ⚠️ Admin sign-up is disabled on the website. Please use the above
              credentials to log in.
            </p>
          </div>

          <h1 className="text-xl">Steps to Get Your Firebase Token</h1>
          <h1>1. Sign Up / Log In on the website or your front-end app.</h1>
          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li>
              Use the admin test account (see above) if you want to test admin
              routes.
            </li>
            <li>Or register a new account normally for client access.</li>
          </ul>
          <h1>
            2. Open the browser’s DevTools Console (e.g., right-click → Inspect
            → Console).
          </h1>
          <h1>3. Run this JavaScript snippet to retrieve the token</h1>
          <h1>4. Copy the token printed in the console.</h1>
          <h1>
            5. Go to{' '}
            <Link
              to="https://backend-gearuptech.onrender.com/api-docs/"
              className="text-blue-500 hover:text-blue-900"
            >
              Swagger UI
            </Link>
          </h1>
          <h1>6. Click on Authorize 🔒 at the top right.</h1>
          <h1>
            7. Paste the token in this format:{' '}
            <span className="text-red-900 font-bold">
              Bearer YOUR_TOKEN_HERE
            </span>
          </h1>
          <h1>8. Now you’re ready to test authenticated endpoints like:</h1>
          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li>Add product (admin only)</li>
            <li>Create orders</li>
            <li>Manage user profile, etc.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Key Features</h1>

          <ul className="list-disc ml-5 flex flex-col gap-5">
            <li>Authentication: User registration and login via Firebase</li>
            <li className="space-y-10">
              Product Management: Full CRUD operations, image upload, mark as
              Bestseller
            </li>
            <li>
              Cart & Wishlist: Add, remove, and update items in the cart and
              wishlist
            </li>
            <li>
              Order Management: Create orders, support COD or Stripe payment,
              update order status
            </li>
            <li>
              User Profile & Address: Manage user profile and multiple shipping
              addresses
            </li>
            <li>
              API Documentation: Comes with Swagger UI for interactive API
              testing and reference
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Sample Endpoints</h1>

          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li>
              <span className="text-red-900 font-bold">POST /api/register</span>
              – Register a new user
            </li>
            <li>
              <span className="text-red-900 font-bold">GET /api/product</span> –
              Fetch all products
            </li>
            <li>
              <span className="text-red-900 font-bold">POST /api/product</span>{' '}
              – Add a new product (admin only)
            </li>
            <li>
              <span className="text-red-900 font-bold">POST /api/add-cart</span>{' '}
              – Add a product to the cart
            </li>
            <li>
              <span className="text-red-900 font-bold">
                POST /api/create-cod-order/:userId
              </span>{' '}
              – Create a COD order
            </li>
            <li>
              <span className="text-red-900 font-bold">
                POST /api/create-checkout-session/:userId
              </span>{' '}
              – Create an order via Stripe
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="underline font-bold">Image Upload</h1>

          <ul className="list-disc ml-5 flex flex-col gap-5 ">
            <li>Uses Multer to receive files from the client</li>
            <li>Stores product images on Cloudinary</li>
            <li>Supports multiple images per product</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail2;
