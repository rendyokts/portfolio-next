import { BiQuestionMark } from "react-icons/bi";
import logoImage from '../public/zki.png';

const ICON_SIZE = '30'
export const CareerLists = [
  {
    name: 'Zona Kreatif ID',
    link: '',
    // logo: <BiQuestionMark size={ICON_SIZE}/>,
    logo: <img src={logoImage} alt={"Zona Kreatif ID" width={ICON_SIZE} height={ICON_SIZE} />,
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