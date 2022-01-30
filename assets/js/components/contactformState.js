import changeInputState from "./changeInputState.js";

const formState = {
  nameInput: {
    isValid: false,
    validate: (input, userInput) => {
      if (userInput === "" || userInput.length === 0) {
        formState.nameInput.isValid = false;
        changeInputState(input, formState.nameInput.isValid);
      } else {
        formState.nameInput.isValid = true;
        changeInputState(input, formState.nameInput.isValid);
      }
    },
  },
  subjectInput: {
    isValid: false,
    validate: (input, userInput) => {
      if (userInput === "" || userInput.length < 10) {
        formState.subjectInput.isValid = false;
        changeInputState(input, formState.subjectInput.isValid);
      } else {
        formState.subjectInput.isValid = true;
        changeInputState(input, formState.subjectInput.isValid);
      }
    },
  },
  emailInput: {
    isValid: false,
    validate: (input, userInput) => {
      // https://digitalfortress.tech/tricks/top-15-commonly-used-regex/
      // 3. Email
      // Common email ids
      const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
      const inputIsValid = regEx.test(userInput);
      if (userInput === "" || inputIsValid === false) {
        formState.emailInput.isValid = false;
        changeInputState(input, formState.emailInput.isValid);
      } else {
        formState.emailInput.isValid = true;
        changeInputState(input, formState.emailInput.isValid);
      }
    },
  },
  messageInput: {
    isValid: false,
    validate: (input, userInput) => {
      if (userInput === "" || userInput.length < 10) {
        formState.messageInput.isValid = false;
        changeInputState(input, formState.messageInput.isValid);
      } else {
        formState.messageInput.isValid = true;
        changeInputState(input, formState.messageInput.isValid);
      }
    },
  },
};

export default formState;
