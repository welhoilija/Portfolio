import { AboutMeIcon, ContactIcon, DashBoardIcon, ProjectsIcon, StarIcon } from "./Icons";

const navbarList = [
  {
    icon: DashBoardIcon,
    desc: 'Home',
    secondDesc: '',
    badge: 0,
    subList: [],
    redirect_to: "/",
  },
  {
    icon: AboutMeIcon,
    desc: 'About Me',
    secondDesc: '',
    badge: 0,
    subList: [],
    redirect_to: "/Aboutme",
  },
  {
    icon: ProjectsIcon,
    desc: 'Projects',
    secondDesc: '',
    badge: 0,
    subList: [],
    redirect_to: "/Projects",
  },
  {
    icon: StarIcon,
    desc: 'Skills',
    secondDesc: '',
    badge: 0,
    subList: [],
    redirect_to: "/Skills",
  },
  {
    icon: ContactIcon,
    desc: 'Contact me!',
    secondDesc: '',
    redirect_to: "/Contact",
  },
];

export default navbarList;
