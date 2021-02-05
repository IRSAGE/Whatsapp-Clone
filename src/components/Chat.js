import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last Seen At ....</p>
        </div>

        <div className="chat__hearderRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

          <div className="chat__body">
          <p className="chat__message  chat__reciever">
            <span className="chat__name">IR~Sage</span>
           Chat Message
            <span className="chat__timestamp">timestamp</span>
              </p>
              <p className="chat__message">
            <span className="chat__name">IR~Sage</span>
           Chat Message
            <span className="chat__timestamp">timestamp</span>
          </p>
      </div>

      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
