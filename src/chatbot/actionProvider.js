class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      

    }

    handleBegOptions = () => {
        const message = [this.createChatBotMessage(
          "Here are the following options for you:",
          { widget: "BegOptions", withAvatar: true }
        )];
    
    this.addMessageToState(message);
    
  };

  addMessageToState = (message) => {
    this.setState((state) => ({ messages: [...state.messages, ...message] }));
  };


  
}
export default ActionProvider;