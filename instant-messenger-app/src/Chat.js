import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined} from "@material-ui/icons";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import React, {useState, useEffect} from 'react';
import axios from "./axios.js";
import './Chat.css';

function Chat({messages}) {

    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new', {
            "message": input,
            "name": "Demo App",
            "timestamp": "Demo timestamp",
            "received": false,
        });

        setInput('');
    };

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
                {messages.map((message) => (
                    <p className={`chat-message ${message.received && "chat-receiver"}`}>
                        <span className="chat-name">{message.name}</span>
                        {message.message}
                        <span className="chat-timestamp">
                        {message.timestamp}
                        </span>
                    </p>
                ))}
            </div>

            <div className="chat-footer">
                <InsertEmoticon/>  
                <form>
                    <input value={input} 
                           onChange = {(e) => setInput(e.target.value)} 
                           placeholder="Type a message .. " type="text"/>
                    <button onClick={sendMessage} type="submit">Send a Message</button>
                </form>
                <MicIcon/>
            </div>            
        </div>
    )
}

export default Chat;