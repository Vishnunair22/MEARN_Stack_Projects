import React, { useEffect, useState } from 'react';
import './Feed.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment'; 

const Feed = ({ category }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [error, setError] = useState(null); // State for error handling

    const fetchData = async () => {
        try {
            const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
            const response = await fetch(videoList_url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData.items);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='feed'>
            {data.map((item) => (
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="card" key={item.id}>
                    <img src={item.snippet.thumbnails.medium.url} alt="video thumbnail" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
            ))}
        </div>
    );
};

export default Feed;
