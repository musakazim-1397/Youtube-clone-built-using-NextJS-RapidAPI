import React from "react";
import ChannelCover from "../../components/ChannelCover/ChannelCover";
import ChannelNameVideos from "../../components/ChannelNameAndVideos/ChannelNameVideos";
import classes from "../../styles/ChannelDetail.module.css";
import fetchChannel from "../../utils/fetchChannel";
import fetchChannelVideos from "../../utils/fetchChannelVideos";

const channelDetail = ({ channelDetail, channelStatistics, channelVideos }) => {
  return (
    <div className={classes.container}>
      <ChannelCover />
      <ChannelNameVideos
        channelDetail={channelDetail}
        channelStatistics={channelStatistics}
        channelVideos={channelVideos}
      />
    </div>
  );
};

export default channelDetail;

export async function getServerSideProps(context) {
  const channelId = context.params.channelId;
  const channelDetail = await fetchChannel(channelId);
  const channelVideos = await fetchChannelVideos(channelId);

  return {
    props: {
      channelDetail: channelDetail.items[0].snippet,
      channelStatistics: channelDetail.items[0].statistics,
      channelVideos: channelVideos.items,
    },
  };
}
