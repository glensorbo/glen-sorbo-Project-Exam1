const showAlert = (
  htmlElement,
  alertType = "fail",
  message = "Unknown Error"
) => {
  if (!htmlElement) return;
  let alertBox = document.querySelector(".alertbox");
  if (alertBox) {
    htmlElement.removeChild(alertBox);
  }
  alertBox = document.createElement("div");
  alertBox.classList.add("alertbox", `alertbox__${alertType}`);
  htmlElement.prepend(alertBox);
  alertBox.innerHTML = `
      <h3>${message}</h3>
    `;
  const alertTimer = setTimeout(() => {
    htmlElement.removeChild(alertBox);
    clearTimeout(alertTimer);
  }, 5000);
};

export default showAlert;
