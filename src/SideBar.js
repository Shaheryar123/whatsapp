import React from 'react'
import './SideBar.css'
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import { Avatar, IconButton } from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from './SidebarChat'
const SideBar = () => {
    return (
        <div className='SideBar'>
            <div className='SideBarHeader'>
                <Avatar />
                <div className='SideBarHeaderRight'>
            <IconButton>
            <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
            <ChatIcon />
                    </IconButton>
                    <IconButton>
            <MoreVertIcon />
            </IconButton>
                    </div>
            </div>
            <div className='SideBarSearch'>
                <div className='SideBarSearchContainer'>
                <IconButton>
                <SearchOutlined />
                </IconButton>
                <input placeholder = 'Search or start new chat' type ='text'></input>
                </div>

            </div >
            <div className ='SideBarChat'>
                <SidebarChat />
            </div>
        </div>
    )
}

export default SideBar
