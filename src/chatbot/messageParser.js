class messageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      message= message.toLowerCase();
      console.log(message);

      if (message.includes("hello")) {
        this.actionProvider.handlebegOptions();
      }
    }

  
  }

export default messageParser;