import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WebOutlined from "@material-ui/icons/WebOutlined";
import { AssignmentOutlined, YouTube } from "@material-ui/icons";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';




export default {
  name: "Carl Bond",
  title: "Front-end developer",

  birthday: "20th April 1994",
  email: "carlb1319@gmail.com",

  github: 'https://github.com/Sick-Carlito',
  twitter: 'https://twitter.com/cbond_420',
  linkedin: 'https://www.linkedin.com/in/carlb420/',
  
  phone: "+254 704 965 601",

  about: " Experienced writer and content creator with 5+ years of experience writing and creating great quality content for several clients in different industries in the USA and Europe. \n\n Also, I love taking new challenges. Currently, I'm exploring new opportunities in the Tech field with a few projects under my belt already. I have skills as a full stack developer using various technologies including; Ruby on Rails, Ruby, HTML5, CSS, Python, Flask, Javascript, and React.js. I'm also good at problem-solving, innovation, and teamwork skills. I'm currently looking for an opportunity. Feel free to contact me at carlb1319@gmail.com. Thank you.",
  experiences: [
    
    {
      title: 'CODECADEMY (Remote)',
      role: 'Leaner',
      date: '2019 - present',
      description: <ul>
                      <li>Learned fundamentals of web development using Ruby.</li>
                      <li>Spent more than 100+ hours solving technical challenges and completing various assignments.</li>
                  </ul>
    },
    {
      title: 'MICROVERSE (Remote)',
      role: 'Mentor (Volunteer)',
      date: '2019 - 2020',
      description: <ul>
                      <li>Mentored junior web developers, providing technical support through code reviews.</li>
                      <li>Provided general guidance and help to other students.</li>
                      <li>Provided advice and tips on how to maintain motivation to maintain longevity in the program.</li>
                  </ul>
    },
    {
      title: 'Upwork (Remote)',
      role: 'Freelance Writer/Web Developer',
      date: 'Aug 2015 - present',
      description: <ul>
                      <li>Mastered the art of working with others towards achieving the same goal.</li>
                      <li>Follow instructions as given and complete jobs as requested by clients.</li>
                      <li>Complete jobs on time to beat deadlines</li>
                  </ul>
    },
    {
      title: 'Ngamia Haulers',
      role: 'Front-end Web Developer (Internship)',
      date: 'Sep 2020 - Feb 2021',
      description: <ul>
                      <li>Collaborated with other developers to come up with better designs.</li>
                      <li>Responsible for building the front end of user and admin portals.</li>
                      <li>Conducted and facilitated meetings when required.</li>
                      <li>Tsested and give report about products built by the team.</li>
                  </ul>
    }
  ],

  educations: [
    {
      title: 'MASENO UNIVERSITY1 (Computer Science, BSc)',
      date: '2012 - 2017',
      description: <ul>
                      <li>I have gained great collaborative skills working with other student.</li>
                      <li>Mastered good communication skills and learning to interact with people of different backgrounds</li>
                      <li>Acquired the skill of proper time management as I always strive to complete any given tasks on time.</li>
                      <li>Learned fundamentals of web development: HTML, CSS, Bootstrap, JavaScript.</li>
                      <li>Learned different software development methodologies: Waterfall, Agile.</li>
                  </ul>
    },
    {
      title: 'MICROVERSE (Remote Full Stack Web Development Program, Full Time) ',
      date: '2019 - present',
      description: <ul>
                      <li>Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously
                          developing projects with Ruby, Rails, JavaScript, React, and Redux.</li>
                      <li>Developed skills in remote pair-programming using GitHub, industry-standard gitflow, and daily standups to
                          communicate and collaborate with international remote developers.</li>
                      <li>Learned fundamentals of full-stack web development: git, HTML/CSS, Ruby, Rails, JavaScript, React.</li>
                      <li>Proposed improvements to code organization to improve code quality and overall performance.</li>
                      <li>Spent over 80 hours learning and using algorithms and data structures.</li>
                      <li>Worked via remote pair programming 40 hours/week.</li>
                  </ul>
       
    },
  ],

  socials: {
    
    Twitter: {
      link: "https://twitter.com/cbond_420",
      text: "My twitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/carlb420/",
      text: "My LinkedIn",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/Sick-Carlito",
      text: "My Github",
      icon: <GitHubIcon />,
    },
  },

  services: [{
    title: 'Web Development',
    description: 'Build responsive and nice looking websites. ',
    icon: <WebOutlined/>,
  },
  {
    title: 'Product Reviews',
    description: 'Get the most reliable information about a product',
    icon: <AssignmentOutlined/>,
  },
  {
      title: 'Article Writing',
      description: 'Get articles that are full of facts and are data-driven.',
      icon: <WebOutlined/>,
    }],

  skills: [{
    title: 'FRONT-END',
    description: [
      'HTML/CSS',
      'ReactJS',
      'Redux',
      'JavaScript',
      'Bootstrap',
      'Material UI',
    ],
  },
  {
    title: 'BACK-END',
    description: [ 'Python', 'Ruby', 'Rails', 'MySQL', 'Capybara'],
    
  },
    {
      title: 'DATABASES',
      description: [ 'MySQL', 'Firebase', 'Ms SQL Server', 'Postgresql'],
      
    },
     {
      title: 'SOURCE CONTROL',
      description: ['Git', 'GitHub ', 'SCRUM/Agile', 'Heroku', 'RSpec', 'TDD', 'Chrome Dev Tools'],
      
    },
],

  projects: [{
    tag: 'React',
    images: ['https://miro.medium.com/max/1400/1*YePVzjkjsadOqzQ03wl5kA.png',
            ],
    title: 'First Portfolio Project ',
    caption: 'This was my first ever project in ReactJS',
    description: 'A simple React based personal portfolio app using create-react-app and React Router v4.',
    links: [{
      link: 'https://morning-inlet-14998.herokuapp.com/', icon: <LanguageOutlinedIcon />
    },
    {
      link: 'https://github.com/Sick-Carlito/Portfolio', icon: <GitHub />
    },
    {
      link: 'https://www.linkedin.com/in/carlb420/', icon: <LinkedIn />
    },
  ],
  },
  {
    tag: 'Ruby on rails',
   images: ['https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2016%2F02%2Frubyonraills.jpg&signature=8a5b3c6294a08dac9e7e44a1c8338f59'
            ],
    title: 'Twitter-Redesign',
    caption: 'A simple web application with twitter-like functionalities',
    description: 'This is a simple rails application that implements the use of active records, associations and the CRUD functionalities of rails. The app allows users to Register/Sign-up and post opinions on various topics. Users can also follow one another, edit and delete their posts.',
    links: [{
      link: 'https://young-fortress-46435.herokuapp.com/users/sign_in', icon: <LanguageOutlinedIcon />
    },
    {
      link: 'https://github.com/Sick-Carlito/Twitter-Redesign', icon: <GitHub />
    },
    {
      link: 'https://www.linkedin.com/in/carlb420/', icon: <LinkedIn />
    },
  ],
  },
  {
    tag: 'Ruby on rails',
   images: ['https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2016%2F02%2Frubyonraills.jpg&signature=8a5b3c6294a08dac9e7e44a1c8338f59'
            ],
    title: 'ror-social-scaffold',
    caption: 'This is a simple web app that has basic faebook-like functions.',
    description: 'The app allows users to register new acounts and create posts. They can also comment on the posts and like or dislike them as well. Users can also add other users as friends by sending them a friend request. Which can either be rejected or accepted by the other user.',
    links: [{
      link: 'https://boiling-plateau-13640.herokuapp.com/users/sign_in', icon: <LanguageOutlinedIcon />
    },
    {
      link: 'https://github.com/Sick-Carlito/ror-social-scaffold', icon: <GitHub />
    },
    {
      link: 'https://www.linkedin.com/in/carlb420/', icon: <LinkedIn />
    },
  ],
  },
  {
    tag: 'HTML/CSS & Bootstrap',
    images: ['https://www.filepicker.io/api/file/INZsH6XtRIqQqxvYGP6Q'
            ],
    title: 'The Odin Bootsrap-project',
    caption: 'A simple project working with Bootstrap 4, HTML and CSS',
    description: 'This is my personal project to show how you can combine HTML?CSS & Bootstrap to come up with a nice looking responsive website',
    links: [{
      link: 'https://rawcdn.githack.com/Sick-Carlito/Bootstrap-project/22b07603ea94fd1055448d6f818e766313ee1a23/index.html', icon: <LanguageOutlinedIcon />
    },
    {
      link: 'https://github.com/Sick-Carlito/Bootstrap-project', icon: <GitHub />
    },
    {
      link: 'https://www.linkedin.com/in/carlb420/', icon: <LinkedIn />
    },
  ],
  },
  {
    tag: 'React',
    images: [ 'https://miro.medium.com/max/1400/1*YePVzjkjsadOqzQ03wl5kA.png' ],
    title: 'Second Portfolio Project',
    caption: 'Second portfolio project built using ReactJS ',
    description: 'This project was bootstrapped with Create React App.It is a portfolio project that shows different aspects of coding with ReactJS including working with Grids and building resusable react components',
    links: [{
      link: 'https//www.google.com', icon: <YouTube />
    },
    {
      link: 'https://github.com/Sick-Carlito/portfolio-project', icon: <GitHub />
    },
    {
      link: 'https://www.linkedin.com/in/carlb420/', icon: <LinkedIn />
    },
  ],
  },
  {
    tag: 'React',
    images: [ 'https://miro.medium.com/max/1400/1*YePVzjkjsadOqzQ03wl5kA.png' ],
    title: 'JavaScript Restaurant Page Project',
    caption: 'A simple web app to dislay a resturant page using HTML, JavaScript and Webpack. ',
    description: 'A simple web app to dislay a resturant page using HTML, JavaScript and Webpack. Things covered in this project also include; Factory Functions, Module Pattern, Webpack',
    links: [{
      link: 'https://raw.githack.com/Sick-Carlito/Resturant-Page/feature-1/dist/index.htmlhttps//www.google.com', icon: <LanguageOutlinedIcon />
    },
    {
      link: 'https://github.com/Sick-Carlito/Resturant-Page', icon: <GitHub />
    },
    {
      link: 'https://www.linkedin.com/in/carlb420/', icon: <LinkedIn />
    },
  ],
  }
],
  

};
