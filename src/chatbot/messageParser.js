class messageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      message= message.toLowerCase();
      console.log(message);

      if (message.includes("hello")) {
        this.actionProvider.handleBegOptions();
      }
    }

  
  }

export default messageParser;