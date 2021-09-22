import React from 'react'
import "./SidebarOptions.css"

function SidebarOptions({active , text , Icon }) {
    return (
        <div className={`sidebarOption ${active && "sidebar__active"}`}>
            <Icon />
            <h2>{text}</h2>
            
        </div>
    )
}

export default SidebarOptions
