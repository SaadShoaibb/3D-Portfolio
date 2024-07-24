import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    reception,
    coffeeshop,
    admarc,
    baardana,
    codealpha,
    youtube,
    hms,
    capcut,
    python,
    cpp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "3D Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name:"python",
      icon:python,
    },
    {
      name:"C++",
      icon: cpp,
    },
   
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Baardana",
      icon: baardana,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other technologies.",
        "Collaborating with cross-functional teams sales managers, product managers, and other team members to achieve the required revenue",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Admarc",
      icon: admarc,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Jan 2023",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Performing prototype driven development, with consistent and clear communication",
        "Implementing responsive and sleek designs for the E-commerce sites.",
        "Marketing and branding the product to enhance company revenue",
      ],
    },
    {
      title: "Content Creator",
      company_name: "Youtube",
      icon: youtube,
      iconBg: "#383E56",
      date: "Nov 2022 - Present",
      points: [
        "Creating engaging and entertaining videos",
        "Developing a personality and brand for marketing.",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "Code Alpha",
      icon: codealpha,
      iconBg: "#E6DEDD",
      date: "Jul 2024 - Present",
      points: [
        "Creating web applications using react ",
        "Collaborating with experienced developers to enhance my knowledge and skills on web development.",
        "helped the team as an internee to develop sleek 3D designs using threeJs",
        "Helped assure the quality of software through additional reviews and spotting bugs.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Saad proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their client's success like Saad does.",
      name: "Huzaifa Rehan",
      designation: "CEO",
      company: "Rangoli",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Saad optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "cyan-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Galaxys",
      description:
        "Front end web application for a coffee shop, that allows customers to book a table, order their favorite coffee, subscribe to the newsletter, or view the aesthetics of the coffee shop.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "cyan-text-gradient",
        },
      ],
      image: coffeeshop,
      source_code_link: "https://github.com/",
    },
    {
      name: "Hospital Reception System",
      description:
        "A comprehensive reception management platform that allows users to book appointments, register patients, view doctors, and create,print and email invoices with their respective bills.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "cyan-text-gradient",
        },
      ],
      image: hms,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };