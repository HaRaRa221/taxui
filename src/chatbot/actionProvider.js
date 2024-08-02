
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    greet() {
      const greetingMessage = this.createChatBotMessage("Hello, how are you doing today?");
      this.updateChatbotState(greetingMessage);
    }


  handleForm990 = () => { 
    const message = this.createChatBotMessage(
      "Here are the forms you need for IRS Form 990: Schedule A, Schedule B, Schedule C, Schedule D, Schedule E, Schedule F, Schedule G, Schedule H",
      {
        widget: "formInfo",
        withAvatar: true,
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