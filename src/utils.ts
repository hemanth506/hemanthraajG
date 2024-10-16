import github from "./assets/github.svg";
import leetcode from "./assets/leetcode.svg";
import linkedIn from "./assets/linkedIn.svg";
import telephone from "./assets/telephone.svg";
import scaler from "./assets/scaler.svg";
import FlexO from "./assets/FlexO.png";
import Techsol from "./assets/Techsol-HomePage.png";
import Chatty from "./assets/Chat-ty-Home.png";

export const myPhoneNumber: string = "+919962644103";

export const myEmailId: string = "hemanthraaj31@gmail.com";

export const socialMediaLinks = [
  { src: github, className: "github", link: "https://github.com/hemanth506" },
  {
    src: leetcode,
    className: "leetcode",
    link: "https://leetcode.com/hemanthraaj31",
  },
  {
    src: linkedIn,
    className: "linkedIn",
    link: "https://www.linkedin.com/in/hemanthraaj31",
  },
  {
    src: scaler,
    className: "scaler",
    link: "https://www.scaler.com/academy/profile/c9461cf63915",
  },
  { src: telephone, className: "telephone", link: `tel://${myPhoneNumber}` },
];

export const aboutSkillSet = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Data Structures",
  "Twilio",
  "GCP Generative AI",
  "Docker",
  "Java",
  "PHP",
  "Git",
  "MongoDB",
  "MySQL",
  "Micro-services",
];

export const experienceArr = [
  {
    name: "Pluralsight",
    role: "Full-stack Web Developer",
    content: {
      fullName: "Pluralsight India Pvt Ltd",
      link: "https://www.pluralsight.com/",
      duration: "June 2024 - Present",
      description: ["WIP"],
      technologies: ["React.js", "Node.js", "PostgreSQL"],
    },
  },
  {
    name: "Factana",
    role: "Full-stack Web Developer",
    content: {
      fullName: "Factana Computing Pvt Ltd",
      link: "https://www.factana.com",
      duration: "Oct 2021 - June 2024",
      description: [
        "Built serverless proxy APIs that act as middleware for the client's API and Twilio IVR.",
        "Developed backend service for each client's program using Node.js and converted to microservices deployed in different ports and made it work independently.",
        "Implemented and maintained PCI compliance measures for the organization, ensuring adherence to security protocols and regulatory requirements.",
        "Developed custom React plugins in the agent-facing interface of Twilio which helped to track calls of the customers.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Twilio serverless",
        "AWS lambda",
        "AWS Connect",
      ],
    },
  },
  // {
  //   name: "FreeLancing",
  //   role: "Full-stack Web Developer - MERN",
  //   content: {
  //     fullName: "",
  //     link: "",
  //     duration: "Oct 2021 - July 2022 | July 2023 - Present",
  //     description: [
  //       "Worked for a small startup company on website development using PHP, HTML, CSS, JavaScript, JQuery, and SQL database.",
  //       "Develop several e-commerce websites tailored to client specifications using the MERN Stack.",
  //     ],
  //     technologies: [],
  //   },
  // },
  {
    name: "Prviga",
    role: "Software developer",
    content: {
      fullName: "Prviga Solution Pvt Ltd",
      link: "https://prviga.com",
      duration: "July 2020 - Sept 2021",
      description: [
        "Wrote server-side and client-side code for a product named 'Widuni' using PHP, HTML, CSS, JavaScript, JQuery, and MySQL.",
        "Handled forms and data reports in various aspects of client requirements using D3.js for graphical representation.",
        "Worked on a client's project in building an e-commerce website using Node/Express and React using React class-based components.",
      ],
      technologies: [
        "PHP",
        "Javascript",
        "Node.js",
        "React.js",
        "D3.js",
        "MySQL",
        "MongoDB",
        "Jquery",
        "HTML",
        "CSS",
      ],
    },
  },
];

export const noteWorthyProjectsArr = [
  {
    title: "Discus-lib",
    description:
      "A ready-to-use React NPM package that seamlessly integrates customizable user comments into your application.",
    links: {
      github: "https://github.com/hemanth506/discus-lib",
      externalLink: "https://www.npmjs.com/package/discus-lib",
    },
    tools: ["React", "NPM Package"],
  },
  {
    title: "Organize Me",
    description:
      "A comprehensive and intuitive organizational app designed to streamline your daily tasks, thoughts, and resources with efficiency and simplicity.",
    links: {
      github: "https://github.com/hemanth506/OrganizeMe-Todo-App",
      externalLink: "https://todo-peach-nine.vercel.app",
    },
    tools: ["React", "MUI", "Styled Component"],
  },
  {
    title: "Personal Website",
    description:
      "My first portfolio website built using React which showcases my interest and my works.",
    links: {
      github: "https://github.com/hemanth506/hemanthraajG",
      externalLink: "https://hemanthraaj.vercel.app",
    },
    tools: ["React", "Typescript", "CSS"],
  },
  {
    title: "Color game on CSS colors",
    description:
      "A game developed just for fun which makes the users study while playing.",
    links: {
      github: "https://github.com/hemanth506/color-quiz-game",
      externalLink: "https://color-quiz-game-delta.vercel.app",
    },
    tools: ["JS", "HTML", "CSS"],
  },
  {
    title: "Netflix clone",
    description:
      "A project which helped me to gain knowledge in CSS and improve my web development skill.",
    links: {
      github: "https://github.com/hemanth506/CSS-Netflix-Clone",
      externalLink: "https://css-netflix-clone.vercel.app",
    },
    tools: ["CSS", "HTML", "JS"],
  },
  {
    title: "Weather forecasting app",
    description:
      "An application which tells us about the climate of a region all over the world.",
    links: {
      github: "https://github.com/hemanth506/weather-app",
      externalLink: "https://weather-app-psi-nine-98.vercel.app",
    },
    tools: ["React", "Weather API"],
  },
  {
    title: "Codepen",
    description:
      "An online development environemnt for testing and showcasing user-created HTML, CSS and JavaScript code snippets.",
    links: {
      github: "https://github.com/hemanth506/codepen-clone",
      externalLink: "https://codepen-clone-olive.vercel.app",
    },
    tools: ["JS", "HTML", "CSS"],
  },
  {
    title: "Nested Comments",
    description:
      "An usual comment section just created for practise which is used in almost all the user interacting websites.",
    links: {
      github: "https://github.com/hemanth506/nested-comment",
      externalLink: "https://nested-comments-eosin.vercel.app",
    },
    tools: ["JS", "CSS"],
  },
  {
    title: "Kanban board",
    description:
      "A tool for visualizing workflows and managing tasks and it can be used to manage work at a personal or organizational level.",
    links: {
      github: "https://github.com/hemanth506/kanban-board",
      externalLink: "https://kanban-board-green-one.vercel.app",
    },
    tools: ["JS", "CSS", "HTML"],
  },
  {
    title: "Otp input validator",
    description:
      "A mini project in which you can input the OTP password for Multi-factor authentication.",
    links: {
      github: "https://github.com/hemanth506/otp-input-validator",
      externalLink: "https://otp-input-validator.vercel.app",
    },
    tools: ["JS", "CSS"],
  },
  {
    title: "Online Grocery Shop",
    description:
      "A mini E-Com website consists of a login portal for users where they can select the groceries which is fetched from the MySQL and generate bill after shopping.",
    links: {
      github: "https://github.com/hemanth506/Online-Grocery-Shop",
      externalLink: "",
    },
    tools: ["PHP", "JS", "Jquery", "MySql"],
  },
  {
    title: "User login Authentication",
    description:
      "A basic express login app which authenticates the user based on the credentials and allowed to hit API if it is valid.",
    links: {
      github: "https://github.com/hemanth506/typescript-backend",
      externalLink: "",
    },
    tools: ["Node", "Express", "Typescript"],
  },
];

export const projectsDetails = [
  {
    title: "TechSol",
    description:
      "The Multilingual Corporate Website is a dynamic and responsive web application designed to represent a company's brand and its client portfolio.",
    toolList: ["React", "Express", "Typescript", "Nodemailer", "MongoDb"],
    links: {
      github: "https://github.com/hemanth506/Techsol",
      externalLink: "https://techsol-beryl.vercel.app",
      image: Techsol,
    },
  },
  {
    title: "FlexO",
    description:
      "FlexO is a lightweight and intuitive movie app designed for the seamless exploration of a diverse range of films. FlexO provides a user-friendly interface to effortlessly discover and manage your movie preferences. With powerful search functionality.",
    toolList: ["React", "Typescript", "MoveiDB API", "AntD"],
    links: {
      github: "https://github.com/hemanth506/FlixO",
      externalLink: "https://flex-o.vercel.app",
      image: FlexO,
    },
  },
  {
    title: "Chat-ty",
    description:
      "Chat-ty is a dynamic chat application that facilitates easy and secure communication using unique room IDs. Users can revisit previous rooms from the home page, providing access to shared conversations and connections.",
    toolList: ["React", "PubNub API", "AntD"],
    links: {
      github: "https://github.com/hemanth506/chat-ty",
      externalLink: "https://chat-ty-theta.vercel.app",
      image: Chatty,
    },
  },
];

export const infoDetails = {
  greetings: "Hi, my name is",
  name: "Hemanth Raaj G.",
  briefMe: "I build things for the web.",
  describeMe:
    "I'm a Full-stack web developer with over four years of experience. I enjoy creating websites, solving problems, and making the internet a more interesting place.",
};

export const contactMeDetails = {
  brief:
    "I'm open to new opportunities, and my inbox is always available for professional discussions or casual hellos. I'll do my best to respond promptly, whether it's about potential opportunities or simply a friendly chat.",
  sayHello: "Say Hello",
  builtBy: "Built by Hemanth Raaj @ 2023 💗",
};

export const aboutDetails = {
  para1:
    "Hello! I'm Hemanth, and I enjoy creating things that live on the internet. My interest in web development began since 2019 ",
  para2: {
    content1: "With over",
    content2: "4 years",
    content3:
      "of experience, I've delved into various technologies such as React.js, Node.js, and Typescript. I've also started exploring React Native gradually. Solving DSA problems is a passion of mine, and I've successfully tackled over",
    content4: "400",
    content5: "problems across various platforms.",
  },
  para3:
    "I've applied my skills in working with Twilio to create IVRs for Contact center solutions, providing enhanced customer experiences. Recently, I had the opportunity to delve into Generative AI tools from Google Cloud and AWS, which deepened my understanding of the basics of AI.",
  para4: "I have experience working with the following technologies",
};
