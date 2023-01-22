
import axios from 'axios';

const fetchApi = async(path,query,part, id, videoId, maxResults) => {
    const baseUrl='https://youtube-v31.p.rapidapi.com';
    const headers= {
        'X-RapidAPI-Key': 'd400401864mshc5b75476ba566cep1dd54ajsn62b5f7f8b231',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }

    try{
        const {data} = await axios.get(`${baseUrl}/${path}`, { 
            params: {
                q: query||null,
                id: id|| null,
                videoId: videoId,
                part: part|| 'snippet,id',
                regionCode: 'US',
                maxResults: maxResults||'50',
                order: 'date'
              },
            headers: headers });
        return data;
        }
    catch(e){   
            console.log(e);
        }
}

export default fetchApi