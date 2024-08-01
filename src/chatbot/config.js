import { createChatBotMessage } from "react-chatbot-kit";

import Menu from "../Widgets/Menu/Menu.jsx";

const botName = "TaxUI";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hello, how may I offer my services?`, 
      {
        widgets: "menu",
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
      widgetName: "menu",
      widgetFunc: (props) => <Menu {...props} />,
      
    },
  ],
};

export default config;