import React from 'react'
import './Sidebar.css'
import {Button} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChatIcon from '@material-ui/icons/Chat';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



function Sidebar() {
    return (
        <div className="sidebar">
            {/** Twitter Icon */}
            <TwitterIcon className="tweet__icon"/>

            {/** SidebarOption */}
            <SidebarOptions active text="Home" Icon={HomeIcon} />
            <SidebarOptions text="Explore" Icon={ExploreIcon}/>
            <SidebarOptions text="Notification" Icon={NotificationsIcon}/>
            <SidebarOptions text="Messages" Icon={ChatIcon} />
            <SidebarOptions text="bookmark" Icon={BookmarkIcon} />
            <SidebarOptions text="Lists" Icon={ListIcon} />
            <SidebarOptions text="Profile" Icon={PersonIcon} />
            <SidebarOptions text="See More" Icon={MoreHorizIcon} />

            {/** Sidebar Button */}
            <Button variant="outlined" className="Sidebar__button" fullWidth>Tweet</Button>

            

            
        </div>
    )
}

export default Sidebar
