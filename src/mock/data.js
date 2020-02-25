import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'RAD portfolio', // e.g: Welcome to my website
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
      svg: false,
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
    img: 'challengesapp.png',
    title: 'Challengator Alpha',
    info:
      'Work in progress social App conceived to be a hub for the users to challenge themselfs and their friends against the most popular viral challenges on the internet. Users can register and access to a catalog of challenges distributed by categories, accept a challenge and send it to their friends to become challengees or validators. Challenges accepted can be turned into public so other users can check your progression and vote on them. Users can modify their data at the user page, check pending and completed challenges or view their statistics... ',
    info2:
      'Frontend: react.js, react-redux, redux-saga, react-router-dom, react-redux-firebase, redux-firestore, reselect, styled-components.',
    info3:
      'Backend: firebase-auth, firestore, firebase-storage, google cloud functions, google cloud tasks, node.js, ffmpeg, sharp.',
    url: 'https://react-redux-firebase-fir-2fc76.firebaseapp.com/',
    repo: 'https://github.com/ralonsodeniz/react-redux-firebase-firestore', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'ecommerce.png',
    title: 'CRWN Clothing',
    info:
      'Ecommerce platform developed with React and Firebase. Users can register, add items to their carts from different collections, manage the items at the cart, make payments using Stripe platform and access their user page to modify personal data, directions and check orders.',
    info2:
      'Frontend: react.js, react-redux, redux-saga, react-router-dom, redux-persist, reselect, styled-components.',
    info3: 'Backend: firebase-auth, firestore, firebase-storage, node.js.',
    info4:
      'Extended version of the final project from the Complete React Developer in 2020 Udemy course.',
    sourceUrl: 'https://www.udemy.com/course/complete-react-developer-zero-to-mastery/',
    url: 'https://crw-clothing-rad.herokuapp.com/',
    repo:
      'https://github.com/ralonsodeniz/react-ecom-project-redux-persist-styledComponents-saga-hooks-backend-cartitemsdb', // if no repo, the button will not show up
  },

  {
    id: uuidv1(),
    img: 'socialape.png',
    title: 'Social Ape',
    info:
      'Twitter like social app where users can register, post screams, comment and like them. On build notification for new comments and likes and editing user details',
    info2:
      'Frontend: react.js, react-redux, redux-saga, react-router-dom, reselect, styled-components, dayjs, material-ui, axios, jwt-decode.',
    info3:
      'Backend: firebase-auth, firestore, firebase-storage, google cloud functions, node.js, express.js.',
    info4:
      'Rework based on the tutorial Full Stack React & Firebase Tutorial - Build a social media app from freeCodeCamp and Classed to update it to the last React version using functional components and hooks',
    sourceUrl: 'https://www.youtube.com/watch?v=m_u6P5k0vP0',
    url: 'https://fbintegration-7e5f6.firebaseapp.com/',
    repo: 'https://github.com/ralonsodeniz/react-firebase-socialmediaapp', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'nevernote.png',
    title: 'NeverNote',
    info:
      'Evernote like app that stores in real time your notes in the database. It allows the user to create, delete and modify both the body of the note and the title',
    info2: 'Frontend: react.js, reselect, react-quill, material-ui.',
    info3: 'Backend: firestore.',
    info4:
      'Rework based on the tutorial Intermediate React and Firebase Tutorial - Build an Evernote Clone from freeCodeCamp to update it to the last React version using functional, hooks and contextAPI to mimic redux functionality',
    sourceUrl: 'https://www.youtube.com/watch?v=I250xdtUvy8&t=1s',
    url: 'https://nevernotetodoapp.firebaseapp.com/',
    repo: 'https://github.com/ralonsodeniz/react-firebase-noteapp', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'faceRecognition.png',
    title: 'Smart Brain',
    info:
      'Face recognition app using clarifai API. Users can register and upload images to recognize faces and store a count of how many recognitions they have relized',
    info2: 'Frontend: react.js, tachyons, react-tilt, react-particles.',
    info3: 'Backend: node.js, bcrypt, postgreSQL, express.js, knex.',
    info4:
      'Final project of the course The Complete Web Developer in 2020: Zero to Mastery Udemy course',
    sourceUrl: 'https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/',
    url: 'https://facerecognitionrad.herokuapp.com/',
    repo: 'https://github.com/ralonsodeniz/faceRecognition', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: '',
  email: 'ralonsodeniz@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ra%C3%BAl-alonso-d%C3%A9niz-2703863a/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/ralonsodeniz',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
