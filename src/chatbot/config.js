import { createChatBotMessage } from "react-chatbot-kit";

import Menu from "../Widgets/Menu/Menu.jsx";
import FormInfo from "../Widgets/FormInfo/FormInfo.jsx";

const botName = "TaxUI";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hello, how may I offer my services?`, 
      {
        widget: "menu",
        delay: 500,
        withAvatar: true,
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
    {
      widgetName: "FormInfo",
      widgetFunc: (props) => <FormInfo {...props} />,
    }
  ],
};

export default config;