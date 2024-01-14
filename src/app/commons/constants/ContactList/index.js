import {
  SiGithub,
  SiInstagram,
  SiDiscord,
  SiWhatsapp,
} from "react-icons/si";

const iconSize = 24;

export const CONTACTLIST = [
  {
    name: "Github",
    logo: <SiGithub size={iconSize} />,
    href: "https://github.com/rendyokts",
    color: 'bg-neutral-800',
  },
  {
    name: "Instagram",
    logo: <SiInstagram size={iconSize} />,
    href: "https://www.instagram.com/rndokts/",
    color: 'bg-pink-600',
  },
  {
    name: "Discord",
    logo: <SiDiscord size={iconSize} />,
    href: "https://www.discord.com",
    color: 'bg-purple-700',
  },
  {
    name: "Whatsapp",
    logo: <SiWhatsapp size={iconSize} />,
    href: "https://wa.me/6285770387100",
    color: 'bg-green-700',
  }
];
