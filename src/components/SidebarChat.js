import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
import avatar from "../avatar.png"
import db from "../firebase";

function SidebarChat({ id, name, addNewChart }) {
  const createChatRoom = () => {
    const roomName = prompt("Please Enter Name For The Chat Room");

    if (roomName) {
        db.collection('rooms').add({
          name:roomName,
      })
    }
  };

  return !addNewChart ? (
    <div className="sidebarChat">
          <Avatar src={ avatar} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>This Is The Last Message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChatRoom} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
