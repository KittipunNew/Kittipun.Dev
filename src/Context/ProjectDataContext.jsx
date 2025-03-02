import { createContext, useState } from 'react';
import imageCard from '../assets/project1/img1.png';
import imageCard2 from '../assets/project2/Screenshot 2025-03-02 171839.png';

export const ProjectDataContext = createContext();

export const ProjectDataProvider = ({ children }) => {
  const projects = [
    {
      id: 1,
      name: 'Online Furniture Ecommerce (Group Project)',
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
    {
      id: 2,
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
  ];

  return (
    <ProjectDataContext.Provider value={{ projects }}>
      {children}
    </ProjectDataContext.Provider>
  );
};
