import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Raul Alonso Deniz portfolio', // e.g: Welcome to my website
  siteUrl: 'https://radportfolio.netlify.com/',
  locale: 'en_GB',
  localeAlt: 'es_ES',
  imageUrl: 'https://i.imgur.com/JwcFNsg.png',
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
    'I am a former Industrial Automation Engineer. After years of PLC programming and SCADA systems integrations I have found my true passion, trying to create useful and enjoyable applications to make poeple everyday easier.',
  paragraphThree:
    'I am an open minded, proactive and teamwork oriented person who loves to work in international enviorments',
  resume: 'https://drive.google.com/drive/folders/1z6gvpx8aVclF2w68LludB2st2Y2HOHA9?usp=sharing', // if no resume, the button will not show up
};

// SKILLS DATA
export const skillsData = {
  'Front end': [
    {
      id: uuidv1(),
      icon: 'html5',
      iconType: 'fab',
      name: 'HTML5',
      description: 'Using new semantic, graphical and multimedia elements and APIs.',
    },
    {
      id: uuidv1(),
      icon: 'css3',
      iconType: 'fab',
      name: 'CSS3',
      description: 'Styling with CSS using SASS and SCSS syntaxes.',
    },
    {
      id: uuidv1(),
      icon: 'js',
      iconType: 'fab',
      name: 'JavaScript',
      description: 'Modern JS including ES5 to 10.',
    },
  ],
  'Back end': [
    {
      id: uuidv1(),
      icon: 'node',
      iconType: 'fab',
      name: 'Node.js',
      description: 'RESTful api using expressjs, middlewares and JWT.',
    },
    {
      id: uuidv1(),
      icon: 'firebase',
      iconType: 'svg',
      name: 'Firebase',
      description:
        'Backend integration using firebase auth, firestore NoSQL database, firebase storage, cloud functions, cloud tasks and others google cloud APIs.',
    },
    {
      id: uuidv1(),
      icon: 'database',
      iconType: 'fas',
      name: 'SQL and NoSQL databases',
      description: 'Basic acknowledge of PostgreSQL and Redis. ',
    },
  ],
  'JS Frameworks, Libraries and Ecosystem': [
    {
      id: uuidv1(),
      icon: 'react',
      iconType: 'fab',
      name: 'React.js',
      description:
        "Design of user interfaces using React's latest features like Hooks, ContextAPI, lazy... and its rich ecosystem.",
    },
    {
      id: uuidv1(),
      icon: 'redux',
      iconType: 'svg',
      name: 'Redux',
      description:
        'Powerful state container and management using the new version of react-redux hooks, redux-saga or redux-thunk to manage side effects, redux-persist to store data in the local storage, reselect for memoized selectors...',
    },
    {
      id: uuidv1(),
      icon: 'router',
      iconType: 'svg',
      name: 'React Router',
      description:
        'Handle React single page applications routes using react-router-dom components and hooks',
    },
    {
      id: uuidv1(),
      icon: 'typescript',
      iconType: 'svg',
      name: 'Typescript',
      description: 'Basic acknowledge of the strict syntactical superset of JavaScript',
    },
    {
      id: uuidv1(),
      icon: 'gatsby',
      iconType: 'svg',
      name: 'Gatsby',
      description:
        'Basic acknowledge of the static single pages aplication framework using GraphQL and React',
    },
    {
      id: uuidv1(),
      icon: 'bundler',
      iconType: 'svg',
      name: 'Bundlers, linters and compilers',
      description: 'Create react app, webpack, babel, prettier, eslint and husky',
    },
    {
      id: uuidv1(),
      icon: 'book',
      iconType: 'fas',
      name: 'Other libraries',
      description:
        'react-redux-firebase, redux-firestore, styled-components, axios, materialui, bootstrap, react-bootstrap, react-reveal, stripe...',
    },
  ],
  'Version control, Package managing and Hosting': [
    {
      id: uuidv1(),
      icon: 'github',
      iconType: 'fab',
      name: 'Version control',
      description: 'GitHub',
    },
    {
      id: uuidv1(),
      icon: 'yarn',
      icon2: 'npm',
      iconType: 'fab',
      name: 'Package managing',
      description: 'yarn and npm',
    },
    {
      id: uuidv1(),
      icon: 'server',
      iconType: 'fas',
      name: 'Hosting',
      description: 'Firebase hosting, Heroku, Netlify ',
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
    // info4:
    //   'Extended version of the final project from the Complete React Developer in 2020 Udemy course.',
    // sourceUrl: 'https://www.udemy.com/course/complete-react-developer-zero-to-mastery/',
    url: 'https://crw-clothing-rad.herokuapp.com/',
    repo:
      'https://github.com/ralonsodeniz/react-ecom-project-redux-persist-styledComponents-saga-hooks-backend-cartitemsdb', // if no repo, the button will not show up
  },

  {
    id: uuidv1(),
    img: 'socialape.png',
    title: 'Social Ape',
    info:
      'Twitter like social app where users can register, post screams, comment and like them. On build notification for new comments and likes and editing user details.',
    info2:
      'Frontend: react.js, react-redux, redux-saga, react-router-dom, reselect, styled-components, dayjs, material-ui, axios, jwt-decode.',
    info3:
      'Backend: firebase-auth, firestore, firebase-storage, google cloud functions, node.js, express.js.',
    // info4:
    //   'Rework based on the tutorial Full Stack React & Firebase Tutorial - Build a social media app from freeCodeCamp and Classed to update it to the last React version using functional components and hooks',
    // sourceUrl: 'https://www.youtube.com/watch?v=m_u6P5k0vP0',
    url: 'https://fbintegration-7e5f6.firebaseapp.com/',
    repo: 'https://github.com/ralonsodeniz/react-firebase-socialmediaapp', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'nevernote.png',
    title: 'NeverNote',
    info:
      'Evernote like app that stores in real time your notes in the database. It allows the user to create, delete and modify both the body of the note and the title.',
    info2: 'Frontend: react.js, reselect, react-quill, material-ui.',
    info3: 'Backend: firestore.',
    // info4:
    //   'Rework based on the tutorial Intermediate React and Firebase Tutorial - Build an Evernote Clone from freeCodeCamp to update it to the last React version using functional components, hooks and contextAPI to mimic redux functionality',
    // sourceUrl: 'https://www.youtube.com/watch?v=I250xdtUvy8&t=1s',
    url: 'https://nevernotetodoapp.firebaseapp.com/',
    repo: 'https://github.com/ralonsodeniz/react-firebase-noteapp', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'faceRecognition.png',
    title: 'Smart Brain',
    info:
      'Face recognition app using clarifai API. Users can register and upload images to recognize faces and store a count of how many recognitions they have relized.',
    info2: 'Frontend: react.js, tachyons, react-tilt, react-particles.',
    info3: 'Backend: node.js, bcrypt, postgreSQL, express.js, knex.',
    // info4:
    //   'Final project of the course The Complete Web Developer in 2020: Zero to Mastery Udemy course',
    // sourceUrl: 'https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/',
    url: 'https://facerecognitionrad.herokuapp.com/',
    repo: 'https://github.com/ralonsodeniz/faceRecognition', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: "Let's Talk",
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
