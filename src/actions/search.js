import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (videos) => {

return (dispatch) => {
dispatch(changeVideo(true));
fetch(videos)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        dispatch(changeVideo(false));
        return response;
    })
    .then((response) => response.json())
    .then((items) => dispatch(changeVideoList(items)))
    .catch(() => dispatch(searchYouTube({YOUTUBE_API_KEY, videos}, changeVideo)));
  };

  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
