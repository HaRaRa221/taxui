import { createChatBotMessage } from "react-chatbot-kit";


import BegOptions from "../Widgets/begOptions/BegOptions";

const botName = "TaxUI";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hello, my name is ${botName}`),
    createChatBotMessage(`How can I help you today?`, 
      {
        widget: "BegOptions",
        delay: 500,
    } ),
  ],
  state: {
    options: [],
  },
  widgets: [
    {
      widgetName: "BegOptions",
      widgetFunc: (props) => <BegOptions {...props} />,
      mapStateToProps: ["options"],
    },
  ],
};

export default config;