import axios from 'axios';
const KEY = 'AIzaSyC-n6k-DQwh9gbzVGwR2sFgXjWcU9hdD6o' ;

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet' ,
        maxResults:5,
        key:KEY,

    }
});