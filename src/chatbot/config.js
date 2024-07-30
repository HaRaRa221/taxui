import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../Widgets/Options/Options";

const botName = "TaxUI";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hello, my name is ${botName}`),
    createChatBotMessage(`How can I help you today?`, 
      {
        widget: "options",
        delay: 500,
    } ),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;