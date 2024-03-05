import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Recommended.css';
import { API_KEY, value_converter } from '../../data';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';

const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);
    
    const fetchApiData = async () => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=45&videoCategoryId=${categoryId}&key=${API_KEY}`;
        
        try {
            const response = await fetch(relatedVideo_url);
            const data = await response.json();
            setApiData(data.items);
        } catch (error) {
            console.error('Error fetching API data:', error);
        }
    };
    
    useEffect(() => {
        fetchApiData();
    }, [categoryId]);
    
    return (
        <div className='recommended'>
            {apiData.map((item, index) => (
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list" key={index}>
                    <img src={item.snippet.thumbnails.medium.url} alt="video thumbnail" />
                    <div className="vid-info">
                        <h3>{item.snippet.title}</h3>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_converter(item.statistics.viewCount)} views</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Recommended;
