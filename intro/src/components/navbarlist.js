import DashboardOutlined from "@mui/icons-material/DashboardOutlined";
import Person from "@mui/icons-material/Person";
import Forum from "@mui/icons-material/Forum";
import Analytics from "@mui/icons-material/Analytics";
import FolderOpen from "@mui/icons-material/FolderOpen";
import StarIcon from "@mui/icons-material/Star";
const navbarList = [
  {
    icon: DashboardOutlined,
    desc: "Home",
    secondDesc: "",
    badge: 0,
    subList: [],
    redirect_to: "/",
  },
  {
    icon: Person,
    desc: "About Me",
    secondDesc: "",
    badge: 0,
    subList: [],
    redirect_to: "/Aboutme",
  },
  {
    icon: Analytics,
    desc: "Projects",
    secondDesc: "",
    badge: 0,
    subList: [],
    redirect_to: "/Projects",
  },
  {
    icon: StarIcon,
    desc: "Skills",
    secondDesc: "",
    badge: 0,
    subList: [],
    redirect_to: "/Skills",
  },
  {
    icon: Forum,
    desc: "Contact me!",
    secondDesc: "",
    redirect_to: "/Contact",
  },
];

export default navbarList;
