import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
import db from "./firebase"

function Feed() {

    const [post, setpost] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(
            snapshot => (
                setpost(snapshot.docs.map(doc => doc.data()))
            )
        )

    }, [])

    return (
        <div className="feed">
            {/** Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>



            {/** TweetBox */}
            <TweetBox />

            {/** Post */}

            {
                post.map( (pos) => (
                    <Post displayName={pos.displayName}
                        userName={pos.userName}
                        verified={pos.verified}
                        text={pos.text}
                        image={pos.image}
                        avatar={pos.avatar}/>

                ))
            }

            {/** Post */}
            {/** Post */}
            {/** Post */}
            {/** Post */}
            {/** Post */}
        </div>
    )
}

export default Feed
