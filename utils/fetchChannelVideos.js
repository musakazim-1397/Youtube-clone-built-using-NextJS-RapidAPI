import axios from 'axios';

const fetchChannelVideos = async(channelId) => {
    const baseUrl='https://youtube-v31.p.rapidapi.com';
    const headers= {
        'X-RapidAPI-Key': 'd400401864mshc5b75476ba566cep1dd54ajsn62b5f7f8b231',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }

    try{
        const {data} = await axios.get(`${baseUrl}/search`, { 
            params: { channelId: channelId,
            part: 'snippet,id',
            order: 'date',
            maxResults: '50'},
            headers: headers });
        return data;
        }
    catch(e){   
            console.log(e);
        }
}

export default fetchChannelVideos;