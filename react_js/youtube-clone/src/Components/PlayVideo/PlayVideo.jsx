import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import user_profile from '../../assets/user_profile.jpg';
import megan from '../../assets/megan.png';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const PlayVideo = ({ videoId }) => {
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]); 

    const fetchVideoData = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        try {
            const response = await fetch(videoDetails_url);
            const data = await response.json();
            setApiData(data.items[0]);
        } catch (error) {
            console.error('Error fetching video data:', error);
        }
    };

    const fetchOtherData = async () => {
        if (apiData && apiData.snippet && apiData.snippet.channelId) {
            const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
            try {
                const response = await fetch(channelData_url);
                const data = await response.json();
                setChannelData(data.items[0]);
            } catch (error) {
                console.error('Error fetching channel data:', error);
            }
        }
    };

    const fetchCommentData = async () => {
        const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        try {
            const response = await fetch(commentData_url);
            const data = await response.json();
            setCommentData(data.items);
        } catch (error) {
            console.error('Error fetching comment data:', error);
        }
    };

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        fetchOtherData();
    }, [apiData]);

    useEffect(() => {
        if (apiData) {
            fetchCommentData();
        }
    }, [apiData]);

    return (
        <div className='play-video'>
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="video" allowFullScreen></iframe>
            <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : "No Views"} &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "Published date"}</p>
                <div>
                    <span><img src={like} alt="like button" />{apiData ? value_converter(apiData.statistics.likeCount) : "212"}</span>
                    <span><img src={dislike} alt="dislike button" /></span>
                    <span><img src={share} alt="share button" />Share</span>
                    <span><img src={save} alt="save button" />Save</span>
                </div>
            </div>

            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : megan} alt="publisher" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "1.78M"} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "There is no available description for this video"}</p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : "0"} Comments</h4>
                {commentData.map((item, index) => (
                    <div className="comment" key={index}>
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user profile image" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                            <div className="comment-actions">
                                <img src={like} alt="like button" />
                                <span>Like</span>
                                <img src={dislike} alt="dislike button" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayVideo;