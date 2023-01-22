import React, { useEffect, useState } from "react";
import classes from "./VideosSection.module.css";
import fetchApi from "../../utils/fetchApi";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { useContext } from "react";
import LinksContext from "../../utils/Store";
import Link from "next/link";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Router from "next/router";

const VideosSection = () => {
  const [videos, setVideos] = React.useState([]);
  const [isHovered, setIsHovered] = React.useState();
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(LinksContext);

  useEffect(() => {
    // console.log(ctx.searchItem+'videoSection');
    setIsLoading(true);
    fetchApi("search", ctx.searchItem)
      .then((data) => {
        // console.log(data);
        setIsLoading(false);
        setVideos(data.items);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err || "something wrong with fetchApi");
      });
  }, [ctx.searchItem]);

  return (
    <div className={classes.container}>
      <h2 className={classes.title} style={{ marginLeft: "1rem" }}>
        Videos
      </h2>
      <div className={classes.videoList}>
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <Link href={`/videoDetail/${video.id.videoId}`} key={index}>
              <div
                className={classes.videoCard}
                //   onMouseOver={() => setIsHovered(video.id.videoId)}
                //   onMouseLeave={() => setIsHovered(null)}
              >
                <div className={classes.videoContainer}>
                  {isHovered === video.id.videoId ? (
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${isHovered}`}
                      // controls
                      width={320}
                      height={180}
                      playing
                      muted
                    />
                  ) : (
                    <Image
                      src={`${video.snippet.thumbnails.high.url}`}
                      layout="fill"
                      objectFit="cover"
                      alt="youtube"
                    />
                  )}
                </div>
                <div className={classes.videoDetailContainer}>
                  <p className={classes.videoTitle}>{`${
                    video.snippet.title.length > 70
                      ? video.snippet.title.slice(0, 70) + "..."
                      : video.snippet.title
                  }`}</p>
                  <div className={classes.channelNameContainer}>
                    <p className={classes.channelTitle}>
                      {" "}
                      {`${video.snippet.channelTitle}`}{" "}
                    </p>
                    <MdVerified color="grey" />
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div
            className={classes.loaderContainer}
            style={{ width: "100%", position: "relative",height:'90vh' }}
          >
            <ClimbingBoxLoader
              loading={isLoading}
              size={30}
              color="#36d7b7"
              cssOverride={{ position: "absolute", top:'50%', left:'50%', transform:'translate(-50%,-50%)' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideosSection;
