import Image from "next/image";
import React from "react";
import classes from "./Comments.module.css";
const Comments = ({ videoComments }) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title} style={{fontSize:'1.6rem'}}>Comments</h1>
      {videoComments.map((comment) => (
        <div className={classes.comment}>
          <div className={classes.avatarContainer}>
            <Image
              src={
                comment.snippet.topLevelComment.snippet.authorProfileImageUrl
              }
              layout="fill"
              objectFit="contain"
              style={{borderRadius:'100%'}}
              // width={'100%'} height={'100%'}
            />
          </div>
          <div className={classes.avatarNameAndComment}>
            <p style={{ fontWeight: "bold", margin: 0 }}>
              {comment.snippet.topLevelComment.snippet.authorDisplayName}
            </p>
            <p style={{ fontSize: "14px" }}>
              {comment.snippet.topLevelComment.snippet.textOriginal.toString()
                .length > 300
                ? comment.snippet.topLevelComment.snippet.textOriginal
                    .toString()
                    .slice(0, 300) + "..."
                : comment.snippet.topLevelComment.snippet.textOriginal.toString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
