import React from 'react'
import classes from './SuggestedVideos.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';

const SuggestedVideos = ({relatedVideos}) => {
  return (
    <div className={classes.container}>
      {relatedVideos.map((video, index) => (
            <Link href={`/videoDetail/${video.id.videoId}`} key={index}>
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
                <div className={classes.videoUploadDateContainer}>
                  <p className={classes.channelTitle} >{new Date(video.snippet.publishTime).toLocaleDateString("en-US", {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                  })}</p>
                </div>
              </div>
            </div>
            </Link>
          ))}
    </div>
  )
}

export default SuggestedVideos