import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Toolbar from './Toolbar';
import Pusher from 'pusher-js';
import axios from "./axios.js";

function App() {

  // const instance = axios.create({
  //     baseURL: 'http://localhost:9001',
  // });
  
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      console.log(response.data);
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('cedd086a7e00d1d82fe1', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app-body">
        <Toolbar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
