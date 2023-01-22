import React, { useCallback, useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Router from "next/router";
import Navbar from "./Navbar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const [showLoader, setShowLoader] = useState(false);

  Router.events.on(
    "routeChangeStart",
    useCallback(() => {
      setShowLoader(true);
      console.log("router change started");
    })
  );
  Router.events.on(
    "routeChangeComplete",
    useCallback(() => setShowLoader(false))
  );

  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.loaderContainer}>
        <ClimbingBoxLoader
          loading={showLoader}
          color="#36d7b7"
          size={15}
          cssOverride={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50,-50)",
            zIndex: 10,
          }}
        />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
