import { createChatBotMessage } from "react-chatbot-kit";



const botName = "TaxUI";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hello, my name is ${botName}`),
  
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#00C8FF",
    },
    chatButton: {
      backgroundColor: "#68CC21",
    },
  },
  
  widgets: [
    {
      
      
    },
  ],
};

export default config;