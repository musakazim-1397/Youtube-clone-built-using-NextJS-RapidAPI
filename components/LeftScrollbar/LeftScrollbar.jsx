import React, { useState } from "react";
import classes from "./LeftScrollbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { IoMdMusicalNote } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { SiGooglepodcasts } from "react-icons/si";
import { MdOutlineOndemandVideo, MdLiveTv } from "react-icons/md";
import { CgGym, CgGirl } from "react-icons/cg";
import { TbHanger } from "react-icons/tb";
import { MdChildCare } from "react-icons/md";
import { GiGamepad } from "react-icons/gi";
import { useContext } from "react";
import LinksContext from "../../utils/Store";

const LeftScrollbar = () => {
  const [selected, setSelected] = useState(0);
  const [isHovered, setIsHovered] = useState();
  const ctx= useContext(LinksContext);

  const scrollArray = [
    {
      ind: 0,
      itemName: "Home",
      q: "",
      itemLogoRed: <AiFillHome color="red" />,
      itemLogoWhite: <AiFillHome color="white" />,
    },
    {
      ind: 1,
      itemName: "Music",
      q: "music",
      itemLogoRed: <IoMdMusicalNote color="red" />,
      itemLogoWhite: <IoMdMusicalNote color="white" />,
    },
    {
      ind: 2,
      itemName: "Education",
      q: "education",
      itemLogoRed: <FaGraduationCap color="red" />,
      itemLogoWhite: <FaGraduationCap color="white" />,
    },
    {
      ind: 3,
      itemName: "Podcast",
      q: "podcast",
      itemLogoRed: <SiGooglepodcasts color="red" />,
      itemLogoWhite: <SiGooglepodcasts color="white" />,
    },
    {
      ind: 4,
      itemName: "Movie",
      q: "movie",
      itemLogoRed: <MdOutlineOndemandVideo color="red" />,
      itemLogoWhite: <MdOutlineOndemandVideo color="white" />,
    },
    {
      ind: 5,
      itemName: "Live",
      q: "live",
      itemLogoRed: <MdLiveTv color="red" />,
      itemLogoWhite: <MdLiveTv color="white" />,
    },
    {
      itemName: "Gaming",
      q: "gaming",
      itemLogoRed: <GiGamepad color="red" />,
      itemLogoWhite: <GiGamepad color="white" />,
      ind: 6,
    },
    {
      itemName: "Sport",
      q: "sport",
      itemLogoRed: <CgGym color="red" />,
      itemLogoWhite: <CgGym color="white" />,
      ind: 7,
    },
    {
      itemName: "Fashion",
      q: "fashion",
      itemLogoRed: <TbHanger color="red" />,
      itemLogoWhite: <TbHanger color="white" />,
      ind: 8,
    },
    {
      itemName: "Beauty",
      q: "beauty",
      itemLogoRed: <CgGirl color="red" />,
      itemLogoWhite: <CgGirl color="white" />,
      ind: 9,
    },
    {
      ind: 10,
      itemName: "Youtube Kids",
      q: "kids",
      itemLogoRed: <MdChildCare color="red" />,
      itemLogoWhite: <MdChildCare color="white" />,
    },
  ];

  // console.log(ctx.searchItem, 'left scroll ');

  return (
    <div className={classes.container} id={"scrollContainer"}>
      {scrollArray.map((item, index) => (
        <div
          className={classes.navItem}
          key={item.q}
          id={item.q}
          onClick={() => {setSelected(index); ctx.searchItemFtn(item.q); }}
          onMouseOver={() => setIsHovered(index)}
          onMouseOut={() => setIsHovered(null)}
          style={{
            background:
              selected === item.ind || isHovered === item.ind ? "red" : "black",
          }}
        >
          <div className={classes.iconContainer}>
            {selected === item.ind || isHovered === item.ind
              ? item.itemLogoWhite
              : item.itemLogoRed}
          </div>
          <div className={classes.itemTextContainer}>{item.itemName}</div>
        </div>
      ))}
    </div>
  );
};

export default LeftScrollbar;
