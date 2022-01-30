import formState from "./contactformState.js";

const validateInput = (input) => {
  const userInput = input.value.trim();
  if (input.id === "name") {
    formState.nameInput.validate(input, userInput);
  }
  if (input.id === "subject") {
    formState.subjectInput.validate(input, userInput);
  }
  if (input.id === "email") {
    formState.emailInput.validate(input, userInput);
  }
  if (input.id === "messageInput") {
    formState.messageInput.validate(input, userInput);
  }
};

export default validateInput;
