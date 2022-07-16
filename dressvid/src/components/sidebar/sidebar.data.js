import { AiFillHome } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    altpath: "/",
    icon: <AiFillHome />,
    cName: "sideBar-text",
  },
  {
    title: "Explore",
    path: "/explore",
    altpath: "/explore",
    icon: <MdOutlineExplore />,
    cName: "sideBar-text",
  },
  {
    title: "Playlist",
    path: "/playlist",
    altpath: "/signIn",
    icon: <MdPlaylistPlay />,
    cName: "sideBar-text",
  },
  {
    title: "Liked Videos",
    path: "/likedVideos",
    altpath: "/signIn",
    icon: <AiFillHeart />,
    cName: "sideBar-text",
  },
  {
    title: "Watch Later",
    path: "/watchLater",
    altpath: "/signIn",
    icon: <AiOutlineClockCircle />,
    cName: "sideBar-text",
  },
  {
    title: "History",
    path: "/history",
    altpath: "/signIn",
    icon: <FaHistory />,
    cName: "sideBar-text",
  },
];
