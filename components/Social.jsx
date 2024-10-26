"use client";

import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Parthiv2310"},
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/parthiv23/"},
  { icon: <FaTwitter />, path: "https://x.com/ChaharParthiv?t=9EpV1B2HrvE6llyhzk7qkg&s=09"},
];

const Social = ({containerStyles, iconStyles}) => {
return (
  <div className={containerStyles}>
    {socials.map((item, index) => {
      return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
      );
    })}
  </div>
);
};

export default Social;