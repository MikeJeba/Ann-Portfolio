import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
//import project4 from "../assets/projects/project4.png";
// import project5 from "../assets/projects/project5.png";


export const HERO_CONTENT = `I am a dynamic and detail-oriented software engineer with a passion for crafting innovative, high-performance solutions. With deep expertise in Java, HTML, CSS, and JavaScript, I seamlessly bridge backend efficiency and frontend elegance. My mastery of Spring Boot powers robust server-side architectures, while my proficiency in ReactJS enables engaging and intuitive user interfaces. Whether building immersive experiences with the Vuforia Android SDK or architecting scalable data solutions with MongoDB, MySQL, SQL, and Firebase, I thrive on delivering excellence that empowers developers and drives impactful outcomes.`;

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
    title: "Kidsapp",
   image: project2,
    description:
      "Built a KidsApp with a focus on learning addition, featuring dynamic question generation and a seamless, visually engaging interface.",
    point2 : "Incorporated a feature to save scores in the database by prompting users for a username, ensuring a smooth and interactive experience.",
    technologies: ["Html","CSS","Javascript","Java"],
    live: "https://www.awesomescreenshot.com/video/35165431?key=5f4f081eaad064f5714a797fea760e87",
    github: "https://github.com/MikeJeba/kidsapp-frontend.git",
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
    year: "2021 - Present",
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
