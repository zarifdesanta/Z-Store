import OneBullet from "../assets/games/one_bullet.png";
import EDGE from "../assets/games/edge.png";
import HyperChute from "../assets/games/hyperchute.png";
import PICOTO from "../assets/games/picoto.png";
import VOID from "../assets/games/void.png";
import Lost_Dungeon from "../assets/games/lost_dungeon.png";
import TowerOne from "../assets/games/towerone.png";

import { SiWindows11 } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { BsBrowserChrome } from "react-icons/bs";

export const gameList = [
  {
    name: "VOID",
    details: "Top down sruvival shooter",
    coverImage: VOID,
    downloadLink: "https://zarifdesanta.itch.io/void",
    platform: <SiWindows11 size={15}></SiWindows11>,
  },
  {
    name: "EDGE",
    details: "Story driven atmospheric",
    coverImage: EDGE,
    downloadLink: "https://zarifdesanta.itch.io/edge",
    platform: <SiWindows11 size={15}></SiWindows11>,
  },
  {
    name: "HyperChute",
    details: "Hypercasual",
    coverImage: HyperChute,
    downloadCount: 1,
    downloadLink: "https://zarifdesanta.itch.io/hyperchute",
    platform: <IoLogoAndroid size={20}></IoLogoAndroid>,
  },
  {
    name: "Tower One",
    details: "Tower defence",
    coverImage: TowerOne,
    downloadCount: 1,
    downloadLink: "https://zarifdesanta.itch.io/towerone",
    platform: <IoLogoAndroid size={20}></IoLogoAndroid>,
  },
  {
    name: "Lost Dungeon",
    details: "Platformer side scroller",
    coverImage: Lost_Dungeon,
    downloadCount: 1,
    downloadLink: "https://zarifdesanta.itch.io/lost-dungeon",
    platform: <SiWindows11 size={15}></SiWindows11>,
  },
  {
    name: "PICOTO",
    details: "Platformer side scroller",
    coverImage: PICOTO,
    downloadCount: 1,
    downloadLink: "https://zarifdesanta.itch.io/picoto",
    platform: <BsBrowserChrome size={15}></BsBrowserChrome>,
  },
];
