import { getRockets } from "./components/api.js";

import showAlert from "./components/showAlert.js";

const infoSection = document.querySelector("#info__section");

try {
  const rockets = await getRockets();
  rockets.forEach((rocket) => {
    const container = document.createElement("div");
    container.classList.add("container");
    const rocketContainer = document.createElement("div");
    rocketContainer.classList.add("info__container");
    rocketContainer.innerHTML = `
      <p class="info__name">${rocket.name}</p>
      <img 
        src="${rocket.flickr_images[0]}" 
        alt="${rocket.name}" 
        class="info__image"
      />
      <p class="info__desc">${rocket.description}</p>
      <ul class="info__details">
      <li>
          <span>Active: </span>
          <span class="info__details-text">${
            rocket.active
              ? "<span class='info__activestate-true'>Yes</span>"
              : "<span class='info__activestate-false'>No</span>"
          }</span>
        </li>
        <li>
          <span>Diameter: </span>
          <span class="info__details-text">${rocket.diameter.meters} meters / ${
      rocket.diameter.feet
    } feet</span>
        </li>
        <li>
          <span>Height: </span>
          <span class="info__details-text">
            ${rocket.height.meters} meters / 
            ${rocket.height.feet} feet
          </span>
        </li>
        <li>
          <span>Mass: </span>
          <span class="info__details-text">
            ${rocket.mass.kg.toLocaleString("no-NO")} kg / 
            ${rocket.mass.lb.toLocaleString("en-GB")} lb
          </span>
        </li>
        <li>
          <span>Cost per launch: </span>
          <span class="info__details-text">
            ${rocket.cost_per_launch.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </li>
      </ul>
    `;
    container.appendChild(rocketContainer);
    infoSection.appendChild(container);
  });
} catch (error) {
  showAlert(
    infoSection,
    "fail",
    "Failed to fetch resources, please try again later"
  );
}
