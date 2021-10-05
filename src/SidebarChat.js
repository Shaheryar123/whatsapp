import './SidebarChat.css'
import { Avatar } from '@material-ui/core'
function SidebarChat()
{
    return (
        <div className = 'SidebarChat'>
            <Avatar />
            <div className ='SidebarChatInfo'>
            <h2>Chat Name</h2>
                <p>Message is here</p>
                </div>
        </div>
        
    )
}

export default SidebarChat
