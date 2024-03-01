import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import user_profile from '../../assets/user_profile.jpg'
import megan from '../../assets/megan.png'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Top Places to Visit in UK</h3>
        <div className="play-video-info">
            <p>1.4M views &bull; 3 weeks ago</p>
            <div>
            <span><img src={like} alt="like button" />200k</span>
            <span><img src={dislike} alt="dislike button" />2.1k</span>
            <span><img src={share} alt="share button" />Share</span>            
            <span><img src={save} alt="save button" />Save</span>
        </div>
        </div>   

        <div className="publisher">
            <img src={megan} alt="megan" />
            <div>
                <p>5 Minutes Crafts</p>
                <span>1.78M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-discription">
            <p>This Channel focus on Arts & Crafts.Enter the world of color and beauty.</p>
            <p>Follow us for more such videos</p>
            <hr />
            <h4>1.8k Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="user profile imege" />
                <div>
                    <h3>Steve Willson <span>2 days ago</span></h3>
                    <p>Really interesting video.Will check more of your videos.</p>
                    <div className="comment-actions">
                        <img src={like} alt="like button" />
                        <span>2.1k</span>
                        <img src={dislike} alt="dislike button" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="user profile imege" />
                <div>
                    <h3>Steve Willson <span>2 days ago</span></h3>
                    <p>Really interesting video.Will check more of your videos.</p>
                    <div className="comment-actions">
                        <img src={like} alt="like button" />
                        <span>2.1k</span>
                        <img src={dislike} alt="dislike button" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="user profile imege" />
                <div>
                    <h3>Steve Willson <span>2 days ago</span></h3>
                    <p>Really interesting video.Will check more of your videos.</p>
                    <div className="comment-actions">
                        <img src={like} alt="like button" />
                        <span>2.1k</span>
                        <img src={dislike} alt="dislike button" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="user profile imege" />
                <div>
                    <h3>Steve Willson <span>2 days ago</span></h3>
                    <p>Really interesting video.Will check more of your videos.</p>
                    <div className="comment-actions">
                        <img src={like} alt="like button" />
                        <span>2.1k</span>
                        <img src={dislike} alt="dislike button" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="user profile imege" />
                <div>
                    <h3>Steve Willson <span>2 days ago</span></h3>
                    <p>Really interesting video.Will check more of your videos.</p>
                    <div className="comment-actions">
                        <img src={like} alt="like button" />
                        <span>2.1k</span>
                        <img src={dislike} alt="dislike button" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo