import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = ( defaultSearchTerm ) => {
    const [videos,setVideos] = useState( [] );

    const search = async term => {
        const responseVideos = await youtube.get('/search',{
            params:{
                q:term
            },

        });

        setVideos(responseVideos.data.items);
    }

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    return [videos, search]
};

export default useVideos;