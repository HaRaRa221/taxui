class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }


  handleForm990 = () => { 
    const message = this.createChatBotMessage(
      "Here are the forms you need for IRS Form 990:",
      {
        widget: "Menu",
      }
    );
    this.updateChatbotState(message);
  }
    
  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))
  }

  
}
export default ActionProvider;