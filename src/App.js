import React, {useEffect} from 'react';
import { io } from "socket.io-client";

function App() {
  useEffect(()=>{
    io('http://localhost:4000')
  },[])
  return (
    <h1>helllo</h1>
  );
}

export default App;
