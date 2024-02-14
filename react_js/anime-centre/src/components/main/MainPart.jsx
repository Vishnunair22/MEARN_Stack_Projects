import React from 'react'
import './main.css';

const main = () => {
  return (
    <>
    {/* trending */}
    <div className='trend' id='trendind'>
        <h2>Trending Today</h2>
        <p>Catch the top trending animes here.</p>
        <div className="flex-container">
            {/* first item */}
            <div className="flex-item">
               <img src="https://img.flawlessfiles.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg" alt="one piece" />
               <span>One Piece</span>
               <span>YA/Drama</span>
               <span>24 min</span>
               <button>Play Now</button>
               <button>Watch Later</button>
            </div>
            {/* second item */}
            <div className="flex-item">
              <img src="https://img.flawlessfiles.com/_r/300x400/100/b1/47/b147d331e311a5d5c8ee81269725fc92/b147d331e311a5d5c8ee81269725fc92.png" alt="solo levelins" />
            <span>Solo Leveling</span>
               <span>YA/Drama</span>
               <span>24 min</span>
               <button>Play Now</button>
               <button>Watch Later</button>
            </div>
            {/* third item */}
            <div className="flex-item">
              <img src="https://img.flawlessfiles.com/_r/300x400/100/04/76/047641b442c41ae964a1b860ac16ed75/047641b442c41ae964a1b860ac16ed75.jpg" alt="shownan king" />
              <span>Shownan King</span>
               <span>YA/Drama</span>
               <span>24 min</span>
               <button>Play Now</button>
               <button>Watch Later</button>
            </div>
            {/* fourth item */}
            <div className="flex-item">
              <img src="https://img.flawlessfiles.com/_r/300x400/100/88/bd/88bd17534dc4884f23027035d23d74e5/88bd17534dc4884f23027035d23d74e5.jpg" alt="spy x family" />
              <span>Spy X Family</span>
               <span>YA/Drama</span>
               <span>24 min</span>
               <button>Play Now</button>
               <button>Watch Later</button>
            </div>
            {/* fifth item */}
            <div className="flex-item">
              <img src="https://img.flawlessfiles.com/_r/300x400/100/de/bf/debf027d032c6d40b91fab16b2ff9bd4/debf027d032c6d40b91fab16b2ff9bd4.jpg" alt="attack on titans" />
            <span>Attack On Titans</span>
               <span>YA/Drama</span>
               <span>24 min</span>
               <button>Play Now</button>
               <button>Watch Later</button>
            </div>
        </div>
    </div>
    {/* popular */}
    <div className="poplr" id='popular'>
      <h2>Popular On Anime Hub</h2>
      <p>See what are the most viewed shows here</p>
      <div className="flex-container">
        {/* first container */}
        <div className="flex-item">
          <img src="https://img.flawlessfiles.com/_r/300x400/100/ec/d3/ecd3e711e8b8d78306bdcbb0a595baf1/ecd3e711e8b8d78306bdcbb0a595baf1.jpg" alt="Monster" />
        <span>Monster</span>
               <span>YA/Drama</span>
               <span>24 min</span>
               <button>Play Now</button>
               <button>Watch Later</button>
        </div>
        {/* second container */}
        <div className="flex-item">
          <img src="https://img.flawlessfiles.com/_r/300x400/100/30/df/30df93feaa422101659e14d0a2a2f582/30df93feaa422101659e14d0a2a2f582.jpg" alt="demon slayer" />
        <span>Demon Slayer</span>
               <span>YA/Drama</span>
               <span>24 min</span>
               <button>Play Now</button>
               <button>Watch Later</button>
        </div>
        {/* third container */}
        <div className="flex-item">
        <img src="https://img.flawlessfiles.com/_r/300x400/100/99/d7/99d7c753d9535c0d91858e4dd2a8d939/99d7c753d9535c0d91858e4dd2a8d939.jpg" alt="naruto" />
        <span>Naruto</span>
               <span>YA/Drama</span>
               <span>24 min</span>
               <button>Play Now</button>
               <button>Watch Later</button>
        </div>
        {/* fourth container */}
        <div className="flex-item">
          <img src="https://img.flawlessfiles.com/_r/300x400/100/f5/d1/f5d173f8317f592c6c70d594829b89e4/f5d173f8317f592c6c70d594829b89e4.jpg" alt="one punch man" />
        <span>One Punch Man</span>
               <span>YA/Drama</span>
               <span>24 min</span>
               <button>Play Now</button>
               <button>Watch Later</button>
        </div>
        {/* fifth container */}
        <div className="flex-item">
          <img src="https://img.flawlessfiles.com/_r/300x400/100/37/f9/37f9348bd0d3dfc158225e4176d3587b/37f9348bd0d3dfc158225e4176d3587b.jpg" alt="my hero academia" />
        <span>My Hero Academia</span>
               <span>U/Kids</span>
               <span>24 min</span>
               <button>Play Now</button>
               <button>Watch Later</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default main