import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
import avatar from "../avatar.png"

function SidebarChat({ id, name, addNewChart }) {
  const createChat = () => {
    const roomName = prompt("Please Enter Name For The Chat");

    if (roomName) {
      // do this
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
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
