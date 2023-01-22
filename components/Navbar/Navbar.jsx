import Image from "next/image";
import React from "react";
import classes from "./Navbar.module.css";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logoTextIconContainer}>
        <div className={classes.logoContainer}>
          <Image src={"/assets/logo.png"} alt="logo" layout="fill" objectFit="contain" />
        </div>
        <h2 className={classes.logoText}>YouTube 2.O</h2>
      </div>
      <div className={classes.searchContainer}>
        <input className={classes.input} type='text' placeholder="search..."/>
        <div className={classes.searchIconContainer}>
          <BiSearchAlt color="red" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
