module.exports = {
  siteTitle: 'Samin Israr Ravi',
  siteDescription:
    'Samin Israr Ravi is a MERN Stack Web Developer, based in Bangladesh, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Samin Israr Ravi, Samin, Israr, saminravi, software engineer, web developer, javascript, node, mongo, express, Dhaka',
  siteUrl: 'https://yashitanamdeo.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Samin Israr Ravi',
  location: 'Dhaka, Bangladesh',
  email: 'saminisrar1@gmail.com',
  github: 'https://github.com/saminravi99',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/saminravi99',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/saminravi99/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
