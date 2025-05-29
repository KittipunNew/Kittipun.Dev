import { createContext, useState } from 'react';
import imageCard from '../assets/project1/img1.png';
import imageCard2 from '../assets/project2/Screenshot 2025-03-02 171839.png';
import imageCard3 from '../assets/Gearup/Screenshot 2025-05-19 172750.png';

export const ProjectDataContext = createContext();

export const ProjectDataProvider = ({ children }) => {
  const projects = [
    {
      id: 1,
      name: 'To-Do List Web Application (Personal Projects)',
      description:
        'A simple and user-friendly platform for keeping track of to-do lists, with the ability to securely manage your personal tasks.',
      imgCard: imageCard2,
      overview:
        'To-Do List Web Application is a web app designed to help users manage their tasks more conveniently. With a simple and user-friendly interface, the app is built using the MERN Stack (MongoDB, Express.js, React, and Node.js). It supports creating, editing, and deleting tasks while securely storing user data, ensuring that each user has access to their own personalized task list.',
      keyFeatures: [
        'User Authentication – Secure login and registration with JWT',
        'Task Management – Add, delete, edit, and mark tasks as completed',
        'Personalized To-Do List – Each user has their own task list',
        'Responsive Design – Optimized for all devices',
      ],
      link: 'https://frontend-miniproject-todolist-app.vercel.app/',
      github: 'https://github.com/KittipunNew/Frontend-Miniproject_TodolistApp',
      technologies: [
        'React',
        'TailwindCSS',
        'DaisyUI',
        'Node.js',
        'Express.js',
        'Mongoose',
        'JWT',
        'MongoDB',
      ],
    },
    {
      id: 2,
      name: 'GearUp Tech E-commerce (Personal Projects)',
      description:
        'A responsive e-commerce website for computers and IT accessories with user authentication, wishlist, cart, and Stripe/COD payment.',
      imgCard: imageCard3,
      overview:
        'GearUp Tech E-commerce is a comprehensive web application for selling computers and IT accessories. It features user authentication via Firebase, product browsing by category, bestseller highlights, advanced product filtering and search, wishlist and cart management, and order placement with Stripe or Cash on Delivery (COD). The profile section allows users to manage their account, addresses, wishlist, and order status. The cart page supports quantity adjustments, address selection, and payment method choice. The website is fully responsive and optimized for all device sizes.',
      keyFeatures: [
        'Login/Logout system using Firebase Authentication',
        'Product listing page with category filtering',
        'Dynamic search and product filtering',
        'Wishlist, Add to Cart, and Checkout system',
        'User profile page with account management',
        'Responsive design compatible with mobile and tablets',
      ],
      link: 'https://gearuptech.vercel.app/',
      github:
        'https://github.com/KittipunNew/GearUp-Tech/tree/main?tab=readme-ov-file#',
      technologies: [
        'React',
        'TailwindCSS',
        'DaisyUI',
        'Node.js',
        'Express.js',
        'Mongoose',
        'firebase',
        'MongoDB',
        'stripe',
        'cloudinary',
        'multer',
      ],
    },
  ];

  return (
    <ProjectDataContext.Provider value={{ projects }}>
      {children}
    </ProjectDataContext.Provider>
  );
};
