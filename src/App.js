//Chatbot App 
import React from 'react';
import  Chatbot  from 'react-chatbot-kit'; //Chatbot function
import 'react-chatbot-kit/build/main.css'; //Chatbot css


import './App.css';

import MessageParser  from './Chatbot/MessageParser.js'; //MessageParser function
import ActionProvider from './Chatbot/ActionProvider.js'; //ActionProvider function
import config from './Chatbot/config.js'; //config function

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Chatbot config={config} MessageParser= {MessageParser} ActionProvider={ActionProvider}/>
       </header>
    </div>
  );
}

export default App;
