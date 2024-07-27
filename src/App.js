//Chatbot App 
import React from 'react';
import  Chatbot  from 'react-chatbot-kit'; //Chatbot function
import 'react-chatbot-kit/build/mai n.css'; //Chatbot css

import config from './Chatbot/config.js';
import MessageParser from './Chatbot/MessageParser.js';
import ActionProvider from './Chatbot/ActionProvider.js';

import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
       </header>
    </div>
  );
}

export default App;
