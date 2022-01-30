import { getLaunchpads } from "./components/api.js";

import showAlert from "./components/showAlert.js";

const infoSection = document.querySelector("#info__section");

try {
  const launchpads = await getLaunchpads();
  console.log(launchpads);
  launchpads.forEach((launchpad) => {
    const container = document.createElement("div");
    container.classList.add("container");
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info__container");
    infoContainer.innerHTML = `
      <p class="info__name">${launchpad.name}</p>
      <img 
        src="${launchpad.images.large[0]}" 
        alt="${launchpad.name}" 
        class="info__image"
      />
      <p class="info__desc">${launchpad.details}</p>
      <ul class="info__details">
        <li>
          <span>Status: </span>
          <span 
            class="info__details-text info__details-text-capitalized 
            ${launchpad.status === "active" && "info__activestate-true"}
            ${launchpad.status === "retired" && "info__activestate-false"}
            "
          >
            ${launchpad.status}
          </span>
        </li>
        <li>
          <span>Launch attempts: </span>
          <span class="info__details-text">${launchpad.launch_attempts}</span>
        </li>
        <li>
          <span>Launch successes: </span>
          <span class="info__details-text ${
            launchpad.launch_successes - launchpad.launch_attempts >= 0
              ? "info__activestate-true"
              : "info__activestate-false"
          }">${launchpad.launch_successes}</span>
        </li>
        <li>
          <span>Region: </span>
          <span class="info__details-text">
            ${launchpad.region}
          </span>
        </li>
        <li>
          <span>Locality: </span>
          <span class="info__details-text">
            ${launchpad.locality}
          </span>
        </li>
      </ul>
    `;
    container.appendChild(infoContainer);
    infoSection.appendChild(container);
  });
} catch (error) {
  showAlert(
    infoSection,
    "fail",
    "Failed to fetch resources, please try again later"
  );
}
