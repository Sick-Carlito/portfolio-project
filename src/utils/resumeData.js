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
