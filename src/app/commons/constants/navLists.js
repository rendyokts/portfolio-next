import {
  BiHome,
  BiEditAlt,
  BiCategoryAlt,
  BiLeaf,
  BiPaperPlane,
  BiBox,
  BiPackage,
  BiSitemap,
  BiPlay,
} from "react-icons/bi";

const icon_size = 20;

export const navLists = [
  {
    name: "home",
    link: "/",
    icon: <BiHome size={icon_size} />,
  },
  {
    name: "about",
    link: "/about",
    icon: <BiLeaf size={icon_size} />,
  },
  {
    name: "roadmap",
    link: "/roadmap",
    icon: <BiSitemap size={icon_size} />,
  },
  {
    name: "projects",
    link: "/projects",
    icon: <BiBox size={icon_size} />,
  },
  {
    name: "dashboard",
    link: "/dashboard",
    icon: <BiCategoryAlt size={icon_size} />,
  },
  {
    name: "contact",
    link: "/contact",
    icon: <BiPaperPlane size={icon_size} />,
  },
  // {
  //   name: "player",
  //   link: "/player",
  //   icon: <BiPlay size={icon_size} />,
  // }
];
