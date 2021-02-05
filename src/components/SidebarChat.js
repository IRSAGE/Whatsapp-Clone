import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";

function SidebarChat({ addNewChart }) {
    
    const createChat = () => {
        const roomName = prompt("Please Enter Name For The Chat");

        if (roomName) {
            // do this
        }
    };

    return !addNewChart ? (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>This Is The Last Message</p>
                
            </div>
        </div>
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2>Add New Chat</h2>
       </div>     
    );
}

export default SidebarChat
