import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";

const iconSize = 24;

export const PROJECTSLISTS = [
  {
    id: 5,
    title: "PodoMoro",
    description:
      "Simple Pomodoro and Todo List App built with Next.js, JS, Tailwind CSS",
    slug: "podomoro",
    link_demo: "https://podo-moro.vercel.app/",
    link_github: "https://github.com/ryznoxy/PodoMoro",
    tech_stack: [
      {
        title: "Nextjs",
        icon: <SiNextdotjs size={iconSize} />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
      },
      {
        title: "Javascript",
        icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
      },
    ],

    tooltip: ["Next.js", "Tailwind CSS", "Javascript"],
    aos_delay: 200,

    image:
      "https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/h1y75yzv0qeqfkhngmbk",
    is_show: true,
    is_featured: true,
    params: {
      slug: "podomoro",
    },
  },
  {
    id: 4,
    title: "ryznox.my.id",
    description:
      "Personal website and portfolio built with Next Js, Javascript and Tailwind CSS",
    slug: "ryznoxy-my-id",
    link_demo: "https://ryznox.my.id",
    link_github: "https://github.com/ryznoxy/portfolio-next",
    tech_stack: [
      {
        title: "Nextjs",
        icon: <SiNextdotjs size={iconSize} />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
      },
      {
        title: "Javascript",
        icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
      },
      {
        title: "Framer",
        icon: <SiFramer size={iconSize} />,
      },
    ],

    tooltip: ["Next.js", "Tailwind CSS", "Javascript", "Framer Motion"],
    aos_delay: 200,

    image:
      "https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/vihpx80m63fqrk20luul",
    is_show: true,
    is_featured: true,
    params: {
      slug: "ryznoxy-my-id",
    },
  },
  {
    id: 3,
    title: "Linktree",
    description:
      "Personal landing page built with Next.js 13 App Router, Javascript and Tailwind CSS.    ",
    slug: "link-tree-clone-reza",
    link_demo: "https://linktree-reza.vercel.app",
    link_github: "https://github.com/ryznoxy/linktreeNext",
    tech_stack: [
      {
        title: "Nextjs",
        icon: <SiNextdotjs size={iconSize} />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
      },
      {
        title: "Javascript",
        icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
      },
      {
        title: null,
        icon: null,
      },
    ],

    tooltip: ["Next.js", "Tailwind CSS", "Javascript"],
    aos_delay: 400,

    image:
      "https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/dqcdnrrkrbr74iwbvatw",
    is_show: true,
    is_featured: false,
    params: {
      slug: "linktree",
    },
  },
  {
    id: 2,
    title: "v3 Reza Portfolio",
    description: "Personal website and portfolio built with HTML, Tailwind CSS",
    slug: "v3-reza-portfolio",
    link_demo: "https://v3reza.vercel.app",
    link_github: "https://github.com/ryznoxy/v3reza",
    tech_stack: [
      {
        title: "HTML",
        icon: <SiHtml5 size={iconSize} className="text-orange-500" />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
      },
      {
        title: null,
        icon: null,
      },
      {
        title: null,
        icon: null,
      },
    ],

    tooltip: ["HTML", "Tailwind CSS"],
    aos_delay: 600,
    image:
      "https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/bnfurne6wxl6rpjhmtrx",
    is_show: true,
    is_featured: false,
    params: {
      slug: "v3",
    },
  },
  {
    id: 1,
    title: "v2 Reza Portfolio",
    description: "Personal website and portfolio built with HTML, Tailwind CSS",
    slug: "v2-reza-portfolio",
    link_demo: "https://v2portfolio.vercel.app/",
    link_github: "https://github.com/ryznoxy/v2portfolio",
    tech_stack: [
      {
        title: "HTML",
        icon: <SiHtml5 size={iconSize} className="text-orange-500" />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
      },
      {
        title: null,
        icon: null,
      },
      {
        title: null,
        icon: null,
      },
    ],

    tooltip: ["HTML", "Tailwind CSS"],
    aos_delay: 800,
    image:
      "https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/vod8aeji876pm4xc4icj",
    is_show: true,
    is_featured: false,
    params: {
      slug: "v2",
    },
  },
];
