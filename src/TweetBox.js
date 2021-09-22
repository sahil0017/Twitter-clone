import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./TweetBox.css";
import db from "./firebase"

function TweetBox() {
    const [tweetmessage,settweetmessage]=useState("");
    const [tweetimage,settweetimage]=useState("")

    const sendTweet = (e) =>{

        e.preventDefault();

        db.collection('posts').add({
            diplayName:"Sahil kanungo" ,
            userName: "@kanungosahil123",
            verified:true,
            text:tweetmessage,
            image:tweetimage,
            avatar:"https://lh3.googleusercontent.com/a-/AOh14GgdB2d2HKp3JzCP1-zAlVPoN43qSbD0HyARYs7RsA=s96-c"
        });

        settweetimage("");
        settweetmessage("");
    }

    return (
        <div className="tweet__box">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GgdB2d2HKp3JzCP1-zAlVPoN43qSbD0HyARYs7RsA=s96-c"/>

                    <input onChange={
                        e => settweetmessage(e.target.value)
                    } value={tweetmessage} placeholder="Whats Happening ............." type="text"/>
                </div>
                <input onChange={e => settweetimage(e.target.value)} value={tweetimage} placeholder="Image URL" type="text"  className="input__image"/>
                <Button onClick={sendTweet} type="submit" className="tweet__button">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
