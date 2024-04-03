import { GoHome } from "../assets/index";
import { IoSettingsOutline } from "../assets/index";
import { HiOutlineWrenchScrewdriver } from "../assets/index";
import { AiOutlineDatabase } from "../assets/index";
import { TfiHeadphoneAlt } from "../assets/index";
import { PiScroll } from "../assets/index";

export const navLinks = [
  { name: "Dashboard", link: "/", icon: GoHome },
  {
    name: "Troubleshoot",
    link: "/troubleshoot",
    icon: HiOutlineWrenchScrewdriver,
  },
  { name: "Database", link: "/database", icon: AiOutlineDatabase },
  { name: "Set Parameters", link: "/setparameters", icon: IoSettingsOutline },
  { name: "Instructions", link: "/instructions", icon: PiScroll },
  { name: "Support Desk", link: "/supportdesk", icon: TfiHeadphoneAlt },
];
