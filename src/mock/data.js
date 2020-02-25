import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'RAD portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, this is',
  name: 'Raúl Alonso Déniz',
  subtitle: 'Full stack developer',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'My name is Raúl Alonso Déniz and I am a full stack developer focused on the frontend React ecosystem and Firebase + Node.js for the backend, but always willing and eager to learn new stacks to improve and grow as developer.',
  paragraphTwo:
    'I am a former Industrial Automation Engineer. After years of PLC programming and SCADA systems integrations I have found my true passion, trying to make poeple everyday easier and more enjoyable through apps and websites.',
  paragraphThree:
    'I am an open minded, proactive and teamwork oriented person who loves to work in international enviorments',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// SKILLS DATA
export const skillsData = {
  'Front end': [
    {
      id: uuidv1(),
      icon: 'html5',
      name: 'HTML5',
      description: 'Using new semantic, graphical, multimedia elements and APIs',
      svg: false,
    },
    {
      id: uuidv1(),
      icon: 'css3',
      name: 'CSS3',
      description: 'Styling with CSS using SASS and SCSS syntaxes',
    },
    {
      id: uuidv1(),
      icon: 'js',
      name: 'JavaScript',
      description: 'Modern JS including ES5 to 10',
      svg: false,
    },
  ],
  'Back end': [
    {
      id: uuidv1(),
      icon: 'node',
      name: 'Node.js',
      description: 'RESTful api using expressjs, middlewares and jwt',
      svg: false,
    },
    {
      id: uuidv1(),
      icon: 'firebase',
      name: 'Firebase',
      description:
        'Backend integration using firebase auth, firestore NoSQL database, firebase storage, cloud functions, cloud tasks and others google cloud api',
      svg: true,
    },
    {
      id: uuidv1(),
      icon: 'database',
      name: 'SQL and NoSQL databases',
      description: 'Basic acknowledge of PostgreSQL and Redis ',
      svg: false,
    },
  ],
  'JS Frameworks and Libraries': [
    {
      id: uuidv1(),
      icon: 'react',
      name: 'React',
      description:
        "Design of user interfaces using React's latest features like Hooks, ContextAPI, lazy... and its rich ecosystem.",
      svg: false,
    },
    {
      id: uuidv1(),
      icon: 'redux',
      name: 'Redux',
      description:
        'Powerful state container and management using the new version of react-redux hooks, Redux-Sagas or Thunk to manage side effects such as async data fetching from API, redux-persist to save store data in the browser local storage, reselect for memoized selectors...',
      svg: true,
    },
    {
      id: uuidv1(),
      icon: 'router',
      name: 'Router',
      description:
        'Handle React single page applications routes using React Router components and hooks',
      svg: true,
    },
    {
      id: uuidv1(),
      icon: 'typescript',
      name: 'Typescript',
      description: 'Basic acknowledge of the strict syntactical superset of JavaScript',
      svg: true,
    },
    {
      id: uuidv1(),
      icon: 'gatsby',
      name: 'Gatsby',
      description:
        'Basic acknowledge of the static single pages aplication framework using GraphQL and React',
      svg: true,
    },
    {
      id: uuidv1(),
      icon: 'book',
      name: 'Other libraries',
      description:
        'react-redux-firebase, redux-firestore, styled-components, axios, materialui, bootstrap, react-bootstrap, react-reveal, stripe, ...',
      svg: true,
    },
  ],
  'Version control, Package managing and Hosting': [
    {
      id: uuidv1(),
      icon: 'github',
      name: 'Version control',
      description: 'GitHub',
      svg: false,
    },
    {
      id: uuidv1(),
      icon: 'yarn',
      icon2: 'npm',
      name: 'Package managing',
      description: 'yarn and npm',
      svg: false,
    },
    {
      id: uuidv1(),
      icon: 'server',
      name: 'Hosting',
      description: 'Firebase hosting, Heroku, Netlify ',
      svg: false,
    },
  ],
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
