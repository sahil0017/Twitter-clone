import React from 'react'
import "./Widget.css";
import SearchIcon from '@material-ui/icons/Search';
import {TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed";


function Widget() {
    return (
        <div className="widget">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twiiter" type="text" />


            </div>
            <div className="widgets__widgetContainer">
                <h2>Whats Happening</h2>

                <TwitterTweetEmbed tweetId={"1438145523853053955"} />

                <TwitterTimelineEmbed 
                  sourceType="profile"
                  screenName="elonmusk"
                  options={ { height: 400}} className="tweet_id"
                  />

                 <TwitterShareButton className="share__button"
                  url={"https://www.facebook.com/sahil.kanungo.771"} 
                  options={{text:"hey follow me on Instagram", via:"@kanungosahil123"} }/>
            </div>
            
        </div>
    )
}

export default Widget
