import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";


export const HERO_CONTENT = `I’m an aspiring full-stack developer and current Software Engineering Intern at Impiger Technologies, building real-world web applications using React and TypeScript. With a strong interest in backend development, I’m actively growing my expertise in Java, Spring Boot, and software design principles.

My journey combines front-end creativity and backend logic — from crafting responsive user interfaces in React to building secure APIs and mastering core Java fundamentals. I also enjoy exploring tools like Git, MySQL, and Firebase, and I'm passionate about writing clean, maintainable code that solves real problems.

Right now, I’m focused on improving my Data Structures & Algorithms (DSA), multithreading in Java, and project-based learning. My goal is to become a confident backend developer with full-stack flexibility.
What drives me: Curiosity, code quality, and the thrill of solving tough bugs!
`;

export const ABOUT_TEXT = '';

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Sep 2023",
    role: "Web Developer Intern",
    company: "Zenanvibe",
    description: `collaborated with a team of developers to build a real-time web development project using ReactJS, enhancing my understanding of modern front-end development practies.`,
    point2:"Implemented responsive design principles to ensure the project's compatibility across various devices and screen sizes, improving user experience.",
    technologies: ["Javascript", "React.js", "Tailwind CSS"],
  },
  {
    year: "April 2024 - Nov 2024",
    role: "Software Engineer Intern",
    company: "Colakin",
    description: `Contributed to design and optimze prompts for generating linkedin inmail.`,
    point2:"Assisted in functional and usability testing of the mobile application, ensuring seamless user experience and bug-free functionality.",
    technologies: ["Python","Chatgpt","Web Scraping"],
  }, {
    year: "Feb 2025 - Persent",
    role: "Software Engineer Intern",
    company: "Impiger",
    description: `Contributing to the development of web applications using React.js and TypeScript, focusing on creating clean, modular, and responsive UI components.`,
    point2:"Implemented end-to-end workflows for certificate generation and renewal using EJBCA, handling secure communication between client and server using .p12 keystores and certificate-based encryption.",
    technologies: ["Java","ReactJs","Typescript","Certificates"],
  },
];

export const PROJECTS = [
  {
    title: "AnnResort",
   image: project1,
    description:
      "Responsive design for seamless browsing on desktops, tablets, and mobile devices. Stunning visual content showcasing our resort's amenities, accommodations, and natural beauty.",
    point2 :"Integrated a seamless booking system, allowing visitors to reserve accommodations and dining options directly through the platform.",
    technologies: ["Html","Javascript","CSS","API"],
    live: "https://ann-resort.vercel.app/",
    github:"https://github.com/MikeJeba/AnnResort.git",
  },
  {
    title: "JSBook",
   image: project2,
    description:
      "Developed a web-based code editor using React, TypeScript, and Monaco Editor, allowing real-time code editing and previewing of HTML/CSS/JS — inspired by CodePen. ",
    point2 : "Published the core editor as an npm package for broader developer use.",
    technologies: ["Typescript","ReactJs"],
    live: "https://iavx-js-book-local-client.vercel.app/",
    github: "https://github.com/MikeJeba/iavxJSBook",
  },
  {
    title: "Wity",
    image: project3,
    description:
       "Developed a sleek and responsive cake shop website using ReactJS and TailwindCSS, ensuring a visually appealing design and seamless navigation for users.",
    point2: "Focused on delivering a highly user-friendly interface optimized for various screen sizes, providing a delightful browsing experience on desktops, tablets, and smartphones.",
    technologies: ["React", "Tailwind CSS", "API"],
    live:"https://wity-mikejeba.vercel.app/",
    github:"https://github.com/MikeJeba/wity.git",
  },
  {
    title: "Cafe",
    //image: project4,
    description:
      "This cafe management system is designed to handle various aspects of running a cafe, including managing different types of items such as beverages, pastries, and orders.",
      point2:"It utilizes inheritance to create a hierarchy of classes that represent different items in the cafe, and constructors to initialize objects with relevant data.",
    technologies: ["Java", "Intellji"],
    live: "",
    github: "https://github.com/MikeJeba/Cafe.git",
  },
  {
    title: "NotesApp",
   // image: project5,
    description:
      "Developed a NotesApp for Android, allowing users to effortlessly add and delete notes with an intuitive and user-friendly interface.",
      point2: "This project serves as a practical demonstration of Firebase integration in Android apps and provides a solid foundation for building similar applications.",
    technologies: ["Java","Firebase","Android"],
    live: "https://drive.google.com/file/d/1c2ew7ymMRhPBmvXq_sPo9bea5_m1RrEc/view?usp=drive_link",
    github: "https://github.com/MikeJeba/NotesApp.git",
  },
];

export const CONTACT = {
  email: "jebajovitha@gmail.com",
};

export const EDUCATION = [
  {
    year: "2021 - 2025",
    std: "B.E - Computer Science",
    marks: "8.9 GPA",
    institute: "Francis Xavier Engineering College",
    place: "Tirunelveli",
  },
  {
    year: "2019 - 2021",
    std: "Higher Seconday",
    marks: "92%",
    institute: "Balakrishna Matric.Hr.Sec School",
    place: "Tirunelveli",
  },
  {
    year: "2018 - 2019",
    std: "SSLC",
    marks: "92%",
    institute: "Balakrishna Matric.Hr.Sec School",
    place: "Tirunelveli",
  },
];
