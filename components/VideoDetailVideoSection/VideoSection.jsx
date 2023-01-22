import React, { useEffect, useState } from "react";
import classes from "./VideoSection.module.css";
import ReactPlayer from "react-player/youtube";
import fetchChannel from "../../utils/fetchChannel";
import Image from "next/image";
import Link from "next/link";

const VideoSection = ({ videoId, videoTextData, videoStatistics }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [channel, setChannel]= useState();

  // console.log(videoTextData.channelId);
  useEffect(()=>{
      fetchChannel(videoTextData.channelId).then(channel=> setChannel(channel.items[0].snippet)).catch(e=>console.log(e))
  },[videoTextData.channelId])

  if(channel){
    console.log(channel);
  }

  return (
    <div className={classes.reactPlayerContainer}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        width={700}
        height={400}
      />
      <div className={classes.videoDetailContainer}>
        <div className={classes.videoTagsContainer}>
        { videoTextData.tags.slice(0,5).map((tag, ind) => (
            <p key={ind} style={{ color: "blue",fontSize:'13px', marginRight: "4px" }}>
              #{tag}
            </p>
          ))}
        </div>
        <h1 style={{ margin: 0,     fontSize: '1.5rem' }}>{videoTextData.title}</h1>
        <div className={classes.videoStatisticsAndDetailContainer}>
          <h5 style={{ margin: "0 8px 0 0" }}>{videoStatistics.viewCount} views</h5>
          <h5 style={{ margin: "0 8px 0 0" }}>
            {new Date(videoTextData.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h5>
          <p style={{margin:0}}>
            {videoTextData.description.length < 25
              ? videoTextData.description
              : !showDetail
              ? <div> {videoTextData.description.slice(0, 25) +"..." }
                  <button
                    className={classes.btn}
                    onClick={() => setShowDetail((prevState) => !prevState)}
                    style={{cursor:'pointer'}}
                  >
                    more
                  </button></div>
              : <div> {videoTextData.description}
                  <button
                    className={classes.btn}
                    onClick={() => setShowDetail((prevState) => !prevState)}
                    style={{ marginLeft: "4px", cursor:'pointer' }}
                  >
                    ..... show less
                  </button></div>
                }
          </p>
        </div>
        {channel && <div className={classes.channelContainer}>
            <div className={classes.channelAvatarAndNameContainer} style={{cursor:'pointer'}}>
              <Link href={`/channelDetail/${videoTextData.channelId}`}>
              <div className={classes.channelAvatarContainer}>
                <Image src={channel.thumbnails.high.url} layout='fill' objectFit="cover" style={{borderRadius:'50%'}}/>
              </div>
              </Link>
              <div className={classes.channelNameContainer} style={{marginLeft:'8px'}}>
                <p>{channel.title}</p>
              </div>
            </div>
            <button className={classes.subscribeBtn}>Subscribe</button>
        </div>}
      </div>
    </div>
  );
};

export default VideoSection;
