import { createChatBotMessage } from "react-chatbot-kit";

import Menu from "../components/Menu/Menu";

const botName = "TaxUI";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hello, how may I offer my services?`, 
      {
        widgets: "Menu",
      }),
  
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
      widgetName: "Menu",
      widgetFunc: (props) => <Menu {...props} />,
      
    },
  ],
};

export default config;