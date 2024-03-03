import { BiQuestionMark } from "react-icons/bi";
// import logoImage from '/zki.webp';
// import Image from 'next/image';

const ICON_SIZE = '30'
const LOGO_SIZE = '40'
const logoZKI = '/zki.webp'
export const CareerLists = [
  {
    name: 'Zona Kreatif ID',
    link: 'https://zonakreatif.id/',
    logo: <img src={logoZKI} alt="Zona Kreatif ID" width={LOGO_SIZE} height={LOGO_SIZE} />,
    location: 'Depok',
    date: 'Maret 2023 - Present',
    during: '~ 1 Year',
    profession: 'Front End Developer',
  },
  {
    name: 'Coming Soon',
    link: '',
    logo: <BiQuestionMark size={ICON_SIZE}/>,
    location: 'Jakarta',
    date: 'July 2023 - Present',
    during: '~ 6 Months',
    profession: 'Cyber Security - Blue Team',
  },
  {
    name: 'Coming Soon',
    link: '',
    logo: <BiQuestionMark size={ICON_SIZE}/>,
    location: 'Jakarta',
    date: 'July 2023 - Present',
    during: '~ 6 Months',
    profession: 'Front End Developer',
  },
  // {
  //   name: 'Coming Soon',
  //   link: '',
  //   logo: <BiQuestionMark size={ICON_SIZE}/>,
  //   location: 'Jakarta',
  //   date: 'July 2023 - Present',
  //   during: '~ 6 Months',
  //   profession: 'Fullstack Developer',
  // },
]