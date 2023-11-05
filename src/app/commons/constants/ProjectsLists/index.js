import { SiJavascript,SiHtml5,SiTailwindcss,SiNextdotjs,SiFramer } from "react-icons/si";

const iconSize = 24

export const PROJECTSLISTS = [
  {
    id: 4,
    title: 'codereza',
    description: 'Personal website and portfolio built with Next Js, Javascript and Tailwind CSS',
    slug: 'code-reza',
    link_demo: 'https://rezareza.vercel.app',
    link_github: 'https://github.com/ryznoxy/portfolio-next',
    tech_stack: [
      <SiNextdotjs size={iconSize} />,
      <SiTailwindcss size={iconSize} className="text-cyan-300" />,
      <SiJavascript size={iconSize} className="text-yellow-400" />,
      <SiFramer size={iconSize} />,
    ],
    tooltip: [
      'Next.js',
      'Tailwind CSS',
      'Javascript',
      'Framer Motion',
    ],
    aos_delay:200,
    
    image: 'https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/vfn7kmzs7pge5qgyeklj',
    is_show: true,
    is_featured: true,
    params: {
      slug:'codereza'
    }
  },
  {
    id: 3,
    title: 'Linktree',
    description: 'Personal landing page built with Next.js 13 App Router, Javascript and Tailwind CSS.    ',
    slug: 'link-tree-clone-reza',
    link_demo: 'https://linktree-reza.vercel.app',
    link_github: 'https://github.com/ryznoxy/linktreeNext',
    tech_stack: [
      <SiNextdotjs size={iconSize} />,
      <SiTailwindcss size={iconSize} className="text-cyan-300" />,
      <SiJavascript size={iconSize} className="text-yellow-400" />,
      null,
    ],
    tooltip: [
      'Next.js',
      'Tailwind CSS',
      'Javascript',
    ],
    aos_delay:400,
    image: 'https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/dqcdnrrkrbr74iwbvatw',
    is_show: true,
    is_featured: true,
    params: {
      slug:'linktree'
    }
  },
  {
    id: 2,
    title: 'v3 Reza Portfolio',
    description: 'Personal website and portfolio built with HTML, Tailwind CSS',
    slug: 'v3-reza-portfolio',
    link_demo: 'https://v3reza.vercel.app',
    link_github: 'https://github.com/ryznoxy/v3reza',
    tech_stack: [
      <SiHtml5 size={iconSize} className="text-orange-500" />,
      <SiTailwindcss size={iconSize} className="text-cyan-300" />,
      null,
      null,
    ],
    tooltip: [
      'HTML',
      'Tailwind CSS',
    ],
    aos_delay:600,
    image: 'https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/bnfurne6wxl6rpjhmtrx',
    is_show: true,
    is_featured: false,
    params: {
      slug:'v3'
    }
  },
  {
    id: 1,
    title: 'v2 Reza Portfolio',
    description: 'Personal website and portfolio built with HTML, Tailwind CSS',
    slug: 'v2-reza-portfolio',
    link_demo: 'https://v2portfolio.vercel.app/',
    link_github: 'https://github.com/ryznoxy/v2portfolio',
    tech_stack:[
      <SiHtml5 size={iconSize} className="text-orange-500" />,
      <SiTailwindcss size={iconSize} className="text-cyan-300" />,
      null,
      null,
    ],
    tooltip: [
      'HTML',
      'Tailwind CSS',
    ],
    aos_delay:800,
    image: 'https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/vod8aeji876pm4xc4icj',
    is_show: true,
    is_featured: false,
    params: {
      slug:'v2'
    }
  },
  
]