import React from 'react';
import './ToolbarChat.css';

import { Avatar } from "@material-ui/core";

function ToolbarChat() {
    return <div className = "toolbar-chat">
        <Avatar/>
        <div className="toolbar-chat-info">
            <h2>Room Name</h2>
            <p>Last message on room.</p>
        </div>
    </div>;  
}

export default ToolbarChat;