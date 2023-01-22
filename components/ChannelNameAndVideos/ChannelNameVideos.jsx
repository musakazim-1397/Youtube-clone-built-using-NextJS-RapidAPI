import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./ChannelName.module.css";
import { MdVerified } from "react-icons/md";
import millify from "millify";

const ChannelNameVideos = ({
  channelDetail,
  channelStatistics,
  channelVideos,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.channelAvatarContainer}>
        <Image
          src={channelDetail.thumbnails.high.url}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className={classes.channelNameAndStats}>
        <h3 style={{ margin: 0 }}>{channelDetail.title}</h3>
        {channelStatistics.subscriberCount && (
          <p style={{ color: "grey", margin:0 }}>
            Subscribers{' '}{millify(channelStatistics.subscriberCount)}
          </p>
        )}
      </div>
      <div className={classes.channelVideosContainer}>
        {channelVideos.map((video) => (
          <Link href={""} key={video.id.videoId}>
            <div className={classes.videoCard}>
              <div className={classes.videoContainer}>
                <Image
                  src={`${video.snippet.thumbnails.high.url}`}
                  layout="fill"
                  objectFit="cover"
                  alt="youtube"
                />
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
        ))}
      </div>
    </div>
  );
};

export default ChannelNameVideos;
