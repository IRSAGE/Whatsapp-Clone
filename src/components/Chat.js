import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import db from "../firebase";
import avatar from "../avatar.png"

function Chat() {
  const [input, setInput] = useState("");
  const { id } = useParams();
  const [roomName, setRoomName] = useState("");
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [id]);
    //console.log(`this is room ${roomName} and id ${id}`);
  const sendMessage = () => {
    //e.preventDefault();
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
      <Avatar src={ avatar} />
        <div className="chat__headerInfo">
                  <h3>{roomName}</h3>
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

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a Message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a Message
          </button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
