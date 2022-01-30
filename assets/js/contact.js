import formState from "./components/contactformState.js";
import validateInputs from "./components/validateInputs.js";
import showAlert from "./components/showAlert.js";

const contactForm = document.querySelector("#contact__form");

const formSubmitButton = document.querySelector(".form__submit");

const inputs = document.querySelectorAll("input");

const messageInput = document.querySelector("#messageInput");

const alertArea = document.querySelector(".alert__area");

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    validateInputs(input);
  });
  input.addEventListener("blur", () => {
    validateInputs(input);
  });
});

messageInput.addEventListener("change", () => {
  validateInputs(messageInput);
});

messageInput.addEventListener("blur", () => {
  validateInputs(messageInput);
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    validateInputs(input);
  });

  validateInputs(messageInput);

  if (
    !formState.nameInput.isValid ||
    !formState.subjectInput.isValid ||
    !formState.emailInput.isValid ||
    !formState.messageInput.isValid
  ) {
    showAlert(
      alertArea,
      "fail",
      "Some fields are not correct, please try again"
    );
    formSubmitButton.disabled = true;
    const failedTimer = setTimeout(() => {
      formSubmitButton.disabled = false;
      clearTimeout(failedTimer);
    }, 5000);

    return;
  }
  showAlert(alertArea, "success", "Form successfully submitted, thank you!");
  formSubmitButton.disabled = true;
  const successTimer = setTimeout(() => {
    formSubmitButton.disabled = false;
    clearTimeout(successTimer);
  }, 5000);
});
