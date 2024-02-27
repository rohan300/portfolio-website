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
    tedxyouth,
    tcs,
    valuelabs,
    tripguide,
    threejs,
    slingshot,
    solidity,
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
      title: "Backend Developer",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Intern",
      company_name: "Tata Consultancy Services",
      icon: tcs,
      iconBg: "#E6DEDD",
      date: "July 2023 - September 2023",
      points: [
        "Used spatiotemporal snapshots of crop stress prediction profiles stored as tabular data to generate text advisories for efficient human interpretation, adopted by 15 agricultural organisations, reaching over 5,000 farmers.",
    "Implemented a Table Question Answering model using TAPAS, spaCy and RegEx, that converted the user’s query to SQL, and then retrieved the answer from the table accordingly.",
    "Enhanced the framework to combine and expand advisories efficiently based on the entropy of the available data, resulting in more contextually relevant advisories.",
    "Developed a user-friendly Natural Language Processing (NLP) interface using Flask, allowing the user to query the framework easily.",
      ],
    },
    {
      title: "Artificial Intelligence Intern",
      company_name: "ValueLabs",
      icon: valuelabs,
      iconBg: "#383E56",
      date: "May 2022 - September 2022",
      points: [
        "Implemented a podcast and video summariser using BERT and GPT-3 to provide users with concise summaries.",
    "Collaborated with a team to develop a resume screener that classified and scored resumes based on recruiter-specified keywords, streamlining the hiring process.",
    "Performed search queries and analysed resume data using Elasticsearch.",
    "Built an API with FastAPI to allow employees to input search terms and retrieve resumes that match their criteria.",
      ],
    },
    {
      title: "Head of Technology",
      company_name: "TEDxYouth@Chirec",
      icon: tedxyouth,
      iconBg: "#E6DEDD",
      date: "June 2019 - September 2019",
      points: [
        "Designed and developed a website using HTML, CSS, and JavaScript to spread awareness about the event and to allow students to sign up for the event.",
    "Gathered user feedback and iteratively improved the website's user interface, leading to a 20% increase in sign-up conversions.",
    "Led and delegated work to a team of 5 members responsible for the design and technology for the event."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Slingshot Simulation",
      description:
        "Gravity simulation that models spaceships slingshotting around a massive planet. Demonstrates gravitational assist trajectory mechanics by visually accelerating ships using accurate physics.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pygame",
          color: "green-text-gradient",
        },
        {
          name: "Numpy",
          color: "pink-text-gradient",
        },
      ],
      image: slingshot,
      source_code_link: "https://github.com/rohan300/slingshot-simulation",
    },
    {
      name: "Number Game Smart Contract",
      description:
        "Implementation of a commit-reveal style game where two players pick a private number and bet on whether the sum is odd or even. Winner takes the pot. Features secure cryptography, custom events, timeout handling, and automatic game reset.",
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
      ],
      image: solidity,
      source_code_link: "https://github.com/rohan300/numbers-solidity-contract",
    },
    {
      name: "FitBud (Coming Soon)",
      description:
        "An App that connects you with a fitness buddy at your university. Find a 'gym bro' to keep you accountable and make big gains.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "/#",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };