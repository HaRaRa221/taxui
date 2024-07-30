class messageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowerCase= message.toLowerCase();

      if (lowerCase.includes("hello")) {
        this.actionProvider.handleBegOptions();
      }
    }

  
  }

export default messageParser;