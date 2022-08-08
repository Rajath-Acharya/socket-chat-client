/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react';
import { io } from "socket.io-client";
import axios from 'axios';
import {v4 as uuidV4} from 'uuid';
import cookie from 'react-cookies';

const socket = io('http://localhost:4040');

function App() {
  const [data, setdata] = useState([]);
  const [message, setMessage] = useState("");
  
  useEffect(async ()=>{
    socket.on("connect", () => {
      console.log('XXX',socket.id);
    });
    socket.on("disconnect", () => {
      console.log('XXX-dis',socket.id); // undefined
    });
    const messages = await axios.get('http://localhost:4040/api/v1/messages');
    setdata(messages);
    },[]);

    socket.on("message", async () => {
      const messages = await axios.get('http://localhost:4040/api/v1/messages');
      setdata(messages);
    })

    const sendMessage = async () => {
      await axios.post('http://localhost:4040/api/v1/messages', {
        messageId: uuidV4(),
        userId: cookie.load("user_name"),
        message,
      });
    }

  return (
    <div style={{margin: "40px"}}>
    <div style={{display: "flex",alignItems: "center", gap: "32px", marginBottom: "32px"}}>
    <input
      style={{height: "80px", padding: "16px", width: "100%"}}
      onChange={(e)=>setMessage(e.target.value)}
    />
  <button style={{height: '60px', width: "100px"}} onClick={sendMessage}>send</button>
    </div>
  {data?.data?.length >0 && data.data.map((ele)=> {
    return <div key={ele.messageId} style={{border: '1px solid gray', padding: "20px", marginBottom: "24px"}}>
    <p>{ele.userId}</p>
    <p>{ele.message}</p>
    </div>
  })
  }
    </div>
  );
}

export default App;
