import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { AiOutlineDatabase } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { PiScroll } from "react-icons/pi";

export const navLinks = [
  { name: "Dashboard", link: "/", icon: GoHome },
  { name: "Troubleshoot", link: "/troubleshoot", icon: HiOutlineWrenchScrewdriver },
  { name: "Database", link: "/database", icon: AiOutlineDatabase },
  { name: "Set Parameters", link: "/setparameters", icon: IoSettingsOutline },
  { name: "Instructions", link: "/instructions", icon: PiScroll },
  { name: "Support Desk", link: "/supportdesk", icon: TfiHeadphoneAlt },
];
