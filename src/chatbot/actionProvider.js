class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      

    }

    handleBegOptions = () => {
        const message = [this.createChatBotMessage(
          "Here are the following options for you:",
          { widget: "BegOptions", withAvatar: true }
        )];
    
    this.addMessageToBotState(message);
    
  };


  
}
export default ActionProvider;