//Chatbot App 
import React from 'react';
import  Chatbot  from 'react-chatbot-kit'; //Chatbot function
import 'react-chatbot-kit/build/main.css'; //Chatbot css

import config from './Chatbot/config';
import messageParser from './Chatbot/MessageParser';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Chatbot />
       </header>
    </div>
  );
}

export default App;
