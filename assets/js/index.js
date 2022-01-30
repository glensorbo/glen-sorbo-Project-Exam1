import { getPastLaunches, getLaunchpads } from "./components/api.js";

import showAlert from "./components/showAlert.js";

const launchList = document.querySelector("#launch__list");

try {
  const pastLaunches = await getPastLaunches();
  console.log(pastLaunches);
  pastLaunches.forEach((launch, i) => {
    if (!launch.links.patch.small) return;
    const evenOrOdd = i % 2 === 0 ? "odd" : "even";
    const launchDate = new Date(launch.date_utc);
    const formattedLaunchDate = launchDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    if (evenOrOdd === "odd") {
      launchList.innerHTML += `
        <li>
          <div class="launch__card">
            <div class="launch__wrapper">
              <a
                href="${launch.links.patch.small}"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="${launch.links.patch.small}"
                  alt="SpaceX patch"
                  class="launch__patchimage"
                />
              </a>
              <a href="">
                <p class="launch__heading">${launch.name}</p>
              </a>
              <span class="launch__date">
                ${formattedLaunchDate}
              </span>
            </div>
            <div class="launch__wrapper">
              <a 
                target="_blank"
                rel="noopener noreferrer" 
                href="${launch.links.wikipedia || "./index.html"}" 
                class="launch__link">
                Wikipedia
              </a>
              <a 
                target="_blank"
                rel="noopener noreferrer" 
                href="${launch.links.webcast || "./index.html"}" 
                class="launch__link">
                Webcast
              </a>
              <a 
                target="_blank"
                rel="noopener noreferrer" 
                href="${launch.links.reddit.launch || "./index.html"}" 
                class="launch__link">
                Reddit
              </a>
              <a 
                target="_blank"
                rel="noopener noreferrer" 
                href="${launch.rocket.wikipedia || "./index.html"}" 
                class="launch__link">
                ${launch.rocket.name}
              </a>
            </div>
          </div>
        </li>
      `;
    }
    if (evenOrOdd === "odd") {
      launchList.innerHTML += `
        <li>
          <div class="launch__card">
            <div class="launch__wrapper">
              <span class="launch__date launch__date-left">
                ${formattedLaunchDate}
              </span>
              <a href="">
                <p class="launch__heading launch__heading-left">
                  ${launch.name}
                </p>
              </a>
              <a
                href="${launch.links.patch.small}"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="${launch.links.patch.small}"
                  alt="SpaceX patch"
                  class="launch__patchimage"
                />
              </a>
            </div>
            <div class="launch__wrapper">
              <a 
                target="_blank"
                rel="noopener noreferrer" 
                href="${launch.links.wikipedia || "./index.html"}" 
                class="launch__link">
                Wikipedia
              </a>
              <a 
                target="_blank"
                rel="noopener noreferrer" 
                href="${launch.links.webcast || "./index.html"}"  
                class="launch__link">
                Webcast
              </a>
              <a 
                target="_blank"
                rel="noopener noreferrer" 
                href="${launch.links.reddit.launch || "./index.html"}"  
                class="launch__link">
                Reddit
              </a>
              <a 
                target="_blank"
                rel="noopener noreferrer"
                href="${launch.rocket.wikipedia || "./index.html"}"
                class="launch__link">
                ${launch.rocket.name}
              </a>
            </div>
          </div>
        </li>
      `;
    }
  });
} catch (error) {
  showAlert(
    launchList,
    "fail",
    "Failed to load resources, please try again later"
  );
}
