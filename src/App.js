//Chatbot App 
import React from 'react';
import  Chatbot  from 'react-chatbot-kit'; //Chatbot function
import 'react-chatbot-kit/build/main.css'; //Chatbot css

import config from './chatbot/config';
import messageParser from './chatbot/messageParser.js';
import actionProvider from './chatbot/actionProvider.js';

import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Chatbot config={config} messageParser={messageParser} actionProvider={actionProvider}/>
       </header>
    </div>
  );
}

export default App;
