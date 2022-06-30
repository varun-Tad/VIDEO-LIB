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
    icon: <AiFillHome />,
    cName: "sideBar-text",
  },
  {
    title: "Explore",
    path: "explore",
    icon: <MdOutlineExplore />,
    cName: "sideBar-text",
  },
  {
    title: "Playlist",
    path: "/playlist",
    icon: <MdPlaylistPlay />,
    cName: "sideBar-text",
  },
  {
    title: "Liked Videos",
    path: "/likedVidoes",
    icon: <AiFillHeart />,
    cName: "sideBar-text",
  },
  {
    title: "Watch Later",
    path: "/watchLater",
    icon: <AiOutlineClockCircle />,
    cName: "sideBar-text",
  },
  {
    title: "History",
    path: "/history",
    icon: <FaHistory />,
    cName: "sideBar-text",
  },
];
