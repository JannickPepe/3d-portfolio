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
  suitcase,
  study,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  service,
  threejs,
  nextApolloCV,
  fernservice,
  mernjobify,
  WPmid,
  zan,
  kellie,
  avatar,
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
    id: "works",
    title: "Projects",
  },
  {
    id: "diplomas",
    title: "Diplomas",
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
    modaltext: "HTML5, JS Vanilla, CSS, CSS Frameworks and responsive desig. Deploying to Netlify, Vercel, Render or RailwayApp. Make Content Security Policy",
  },
  {
    title: "Analytic tools and Cookies",
    icon: mobile,
    modaltext: "Google Analytics 4, Google Tag Manager and PostHog. So we can get data from user when they have accepted the Cookie banner. As well see click event",
  },
  {
    title: "Fullstack Developer",
    icon: backend,
    modaltext: "MySQL usage in Laravel / PHP projects and NoSQL in the JS frameworks such as, ReactJS, Angular and NextJS. Using NodeJS, Express and server / client structur",
  },
  {
    title: "UI / UX and Plugins",
    icon: creator,
    modaltext: "Figma, PhotoShop and Illustrator + other plugins as Rive for better UI. Doing Prototypes in Figna and research before coding and make re-use components",
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
    name: "figma",
    icon: figma,
  },

];


const experiences = [
  {
    title: "Web Integrator PHP",
    company_name: "Roskilde Techinal School",
    icon: study,
    iconBg: "#383E56",
    date: "Aug 2014 - June 2016",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Computer Science",
    company_name: "Zealand, Roskilde",
    icon: study,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - June 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Internship 5th semestre",
    company_name: "GF Trekroner",
    icon: suitcase,
    iconBg: "#383E56",
    date: "Jan - May, 2021",
    points: [
      "I was working as an intern for the last semeter of my computer science. Where i was going to build a Wordpress site for Trekroner Housing-Union. With booking system, calendar system and event overview. As well for contact form and responsive design. Using Elementor, classic editor for custom coding and more.",
    ],
  },
  {
    title: "PBA in Web & App",
    company_name: "Zealand, Roskilde",
    icon: study,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Internship",
    company_name: "NanoScale Simulations",
    icon: suitcase,
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Freelance",
    company_name: "Orgone Jewels",
    icon: suitcase,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - November 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Jannick made an amazing E-shop site, with admin panel, responsive design and emailing",
    name: "Kellie Fisher",
    designation: "Owner",
    company: "Orgone Jewels",
    image: kellie,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jannick does.",
    name: "Zan Mahmoud",
    designation: "Owner",
    company: "NanoScaleSimulation",
    image: zan,
  },
  {
    testimonial:
      "After Jannick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Per Jensen",
    designation: "CEO",
    company: "GF Trekroner",
    image: avatar,
  },
];


const projects = [
  {
    name: "NanoScaleSimulations",
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
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/JannickPepe",
    deploy_link: "https://nanoscalesimulations.com",
  },
  {
    name: "Orgone Jewels",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/JannickPepe",
    deploy_link: "https://next-js-13-e-shop.vercel.app/",
  },
  {
    name: "Serverless Blog",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/JannickPepe",
    deploy_link: "https://udemynextjsserverlessblog.vercel.app/",
  },
  {
    name: "Service SPA",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: service,
    source_code_link: "https://github.com/JannickPepe",
    deploy_link: "https://jannickservice.netlify.app/",
  },
];


const diplomas = [
  {
    title: "Udemy: ReactJS + Firebase",
    icon: web,
    diplomaIMG: fernservice,
  },
  {
    title: "Udemy: NextJS + MongoDB",
    icon: mobile,
    diplomaIMG: nextApolloCV,
  },
  {
    title: "Udemy: Wordpress Advance",
    icon: backend,
    diplomaIMG: WPmid,
  },
  {
    title: "Udemy: MERN Job App",
    icon: creator,
    diplomaIMG: mernjobify,
  },
];

export { services, technologies, experiences, testimonials, projects, diplomas };
