import { createContext, useState } from 'react';
import imageCard from '../assets/project1/img1.png';

export const ProjectDataContext = createContext();

export const ProjectDataProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Online Furniture Ecommerce Project',
      description:
        'An Ecommerce platform for online furniture sales that allows users to view newly arrived products, browse the complete furniture catalog, and purchase furniture of interest.',
      imgCard: imageCard,
      overview:
        'This project is a minimalist-style furniture e-commerce website developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js) to provide a seamless and user-friendly shopping experience. Users can browse new arrivals, add products to their cart, and complete their purchases with ease.',
      keyFeatures: [
        'Responsive design for all screen sizes',
        'Homepage: Displays new arrivals',
        'Product Listing Page: Shows all available products',
        'Authentication: Login and registration system for customers',
        'Shopping Cart: Add products to the cart',
        'Chatbot: Automated customer support system',
      ],
      link: 'https://orbit-rex-living.vercel.app/',
      github: 'https://github.com/orgs/VelociKepler/repositories',
      technologies: [
        'React',
        'TailwindCSS',
        'MaterialUI',
        'Node.js',
        'Express.js',
        'Mongoose',
        'JWT',
        'MongoDB',
      ],
    },
  ]);

  return (
    <ProjectDataContext.Provider value={{ projects }}>
      {children}
    </ProjectDataContext.Provider>
  );
};
