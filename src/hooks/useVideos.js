// const { useState } = require("react");

import React,{useState,useEffect} from 'react';
import youtube from '../api/youtube';

const useVideos =(defaultSearchTerm) => {
    const [videos ,setVideos ] = useState([]);
   
    useEffect(() =>{
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
             params:{
                 q:term,
             },
         });
            setVideos(response.data.items);
            //setSelectedVideo(response.data.items[0]);
        };
        return [videos, search];
};

export default useVideos;