import {
  SiYoutube,
  SiGithub,
  SiInstagram,
  SiTiktok,
  SiDiscord,
} from "react-icons/si";

const iconSize = 24;

export const CONTACTLIST = [
  {
    name: "Github",
    logo: <SiGithub size={iconSize} />,
    href: "https://github.com/ryznoxy",
    color: 'bg-neutral-800',
  },
  {
    name: "Instagram",
    logo: <SiInstagram size={iconSize} />,
    href: "https://www.instagram.com/r7zaa_/",
    color: 'bg-pink-600',
  },
  {
    name: "Tiktok",
    logo: <SiTiktok size={iconSize} />,
    href: "https://www.tiktok.com/@ryznoxy",
    color: 'bg-neutral-800',
  },
  {
    name: "Discord",
    logo: <SiDiscord size={iconSize} />,
    href: "https://discord.com/users/274076893240754176",
    color: 'bg-purple-700',
  },
  {
    name: "Youtube",
    logo: <SiYoutube size={iconSize} />,
    href: "https://www.youtube.com/@ryznoxy",
    color: 'bg-red-600',
  },
];
