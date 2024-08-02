class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse = (message) => {
      console.log(message);
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        return this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("irs form 990")) {
        return this.actionProvider.handleForm990();
      }
    };

  
  }

export default MessageParser;