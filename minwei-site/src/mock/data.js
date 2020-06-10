import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Minwei | Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a self-motivated web developer with a background requiring strong analysis and problem solving skills.",
  paragraphTwo: 'Satisfying real clients with reliable and creative solutions are what I love.',
  paragraphThree: "I'm eager to update my knowledges and skills to become a full-stack web developer in the next few years.",
  resume: 'https://www.dropbox.com/s/g42he12utxgb5g6/2020_resume_minwei_yao_developer.docx?dl=0', // if no resume, the button will not show up
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
  email: 'minwei.yao42@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'weibo',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/minwei-yao-6b23bb30/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/minwyy',
    },
    {
      id: uuidv1(),
      name: 'google scholar',
      url: 'https://scholar.google.com.au/citations?user=55bgxuIAAAAJ&hl=en',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};