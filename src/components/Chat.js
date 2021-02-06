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
import avatar from "../avatar.png";
import { useStateValue } from "../StateProvider";
import firebase from "firebase";

function Chat() {
  const [input, setInput] = useState("");
  const { id } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);
  //console.log(`this is room ${roomName} and id ${id}`);
  const sendMessage = (e) => {

     e.preventDefault();
    
    db.collection("rooms").doc(id).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={avatar} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last Seen At {" "}{new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
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

        {messages.map(message => (
          <p className={`chat__message ${message.name === user.displayName && "chat__reciever"}`}>
            <span className="chat__name">{ message.name}</span>
          {message.message}
            <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
        </p>
        ))}
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
