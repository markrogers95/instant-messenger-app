import React from 'react';
import "./Toolbar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import { IconButton, Avatar } from '@material-ui/core';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";

function Toolbar() {
    return (
        <div className='toolbar'>
            <div className="toolbar-header">
                
                <Avatar src="http://i.huffpost.com/gen/1401186/images/o-SEA-TURTLE-facebook.jpg"/>
                <div className="toolbar-header-right">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="toolbar-search">
                    <div className="toolbar-search-container">
                        <SearchOutlined/>
                        <input placeholder="Find a message" type="text"/>
                    </div>
            </div>
        </div>
    )
}

export default Toolbar;