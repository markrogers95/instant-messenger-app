import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined} from "@material-ui/icons";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import React from 'react';
import './Chat.css';

function Chat() {
    return (
        <div className='chat'>
            <div className="chat-header">
                <Avatar/>

                <div className="chat-header-info">
                    <h3>Room Name</h3>
                    <p>Last online at ..</p>
                </div>

                <div className="chat-header-right">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat-body">
                <p className="chat-message">
                    <span className="chat-name">Mark</span>
                    Message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat-message chat-receiver">
                    <span className="chat-name">Mark</span>
                    Message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat-message">
                    <span className="chat-name">Mark</span>
                    Message.
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>

            <div className="chat-footer">
                <InsertEmoticon/>  
                <form>
                    <input placeholder="Type a message .. " type="text"/>
                    <button type="submit">Send a Message</button>
                </form>
                <MicIcon/>
            </div>            
        </div>
    )
}

export default Chat;