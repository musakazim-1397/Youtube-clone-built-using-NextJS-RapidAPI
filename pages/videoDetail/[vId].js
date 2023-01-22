import React from 'react'
import Comments from '../../components/CommentsSection/Comments';

import SuggestedVideos from '../../components/SuggestedVideosSection/SuggestedVideos';
import VideoSection from '../../components/VideoDetailVideoSection/VideoSection';
import classes from '../../styles/VideoDetail.module.css';
import fetchApi from '../../utils/fetchApi';
import fetchRelatedVideosApi from '../../utils/fetchRelatedVideos';


const VideoDetailPage = ({videoId, videoTextData, videoStatistics, videoComments, relatedVideos}) => {
    // console.log('relatedc'+ relatedVideos);
  return (
    <div className={classes.container}>
        <div className={classes.videoAndCommentsContainer}>
        <VideoSection videoId={videoId} videoTextData={videoTextData} videoStatistics={videoStatistics}/>
        <Comments videoComments={videoComments}/>
        </div>
        <div className={classes.suggestedVideosContainer}>
            <SuggestedVideos relatedVideos={relatedVideos}/>
        </div>
    </div>
  )
}

export default VideoDetailPage;

export async function getServerSideProps(context){
    const videoId= context.params.vId;
    const videoData= await fetchApi('videos',null, 'snippet,statistics',videoId);
    const videoComments= await fetchApi('commentThreads',null, 'snippet',null,videoId,100);
    const relatedVideos = await fetchRelatedVideosApi(videoId);

    
    return{
        props: {
            videoId,
            videoTextData:  videoData.items[0].snippet,
            videoStatistics: videoData.items[0].statistics,
            videoComments: videoComments.items,
            relatedVideos: relatedVideos.items,
            }
    }
}