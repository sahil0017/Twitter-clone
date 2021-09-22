import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    userName,
    verified,
    timestamp,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__avatar">
                    <Avatar src={avatar} />
                </div>
                <div className="post__headertext">
                    <h3>{displayName}{" "} <span className="user__name"><VerifiedUserIcon className="post__badge" />{userName}</span></h3>
                </div>
            </div>
            <div className="post__body">
                <div className="post__desc">
                    <p>{text}
                    </p>
                </div>
                <img src={image} alt=" " />
            </div>
            <div className="post__footer">
                <ChatBubbleIcon fontSize="small" className="footer__icon"/>
                <RepeatIcon fontSize="small" className="footer__icon"/>
                <FavoriteBorderIcon fontSize="small"className="footer__icon" />
                <PublishIcon fontSize="small" className="footer__icon" />
            </div>

           

        </div>
    )
}

export default Post
