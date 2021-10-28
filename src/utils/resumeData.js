import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default {
  name: "Carl",
  title: "Front-end developer",

  birthday: "20th April 1994",
  email: "carlb1319@gmail.com",
  address: "12 tetef St",
  phone: "+254 704 965 601",

  about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  socials: {
    Facebook: {
      link: "https://www.facebook.com",
      text: "My facebook",
      icon: <FacebookIcon />,
    },
    Twitter: {
      link: "https://www.twitter.com",
      text: "My twitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com",
      text: "My LinkedIn",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://www.github.com",
      text: "My Github",
      icon: <GitHubIcon />,
    },
  },
};
