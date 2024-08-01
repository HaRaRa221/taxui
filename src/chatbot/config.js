import { createChatBotMessage } from "react-chatbot-kit";


import begOptions from "../Widgets/begOptions/begOptions";

const botName = "TaxUI";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hello, my name is ${botName}`),
    createChatBotMessage(`How can I help you today?`, 
      {
        widget: "begOptions",
        delay: 500,
    } ),
  ],
  state: {
    options: [],
  },
  widgets: [
    {
      widgetName: 'begOptions',
      widgetFunc: (props) => <begOptions {...props} />,
      
    },
  ],
};

export default config;