const changeInputState = (input, isValid) => {
  if (!isValid) {
    input.classList.remove("success");
    input.classList.add("fail");
    input.nextSibling.nextSibling.classList.remove("hidden");
  } else {
    input.classList.remove("fail");
    input.nextSibling.nextSibling.classList.add("hidden");
    input.classList.add("success");
  }
};

export default changeInputState;
