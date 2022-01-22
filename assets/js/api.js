import { apiV5Launches } from "./CONSTANTS.js";

export const getLatestLaunches = async () => {
  try {
    const response = await fetch(`${apiV5Launches}/latest`);
    const latestLauches = await response.json();
    console.log(latestLauches);
  } catch (error) {
    console.log(error);
  }
};

export const getPastLaunches = async () => {
  try {
    const response = await fetch(`${apiV5Launches}/past`);
    const pastLauches = await response.json();
    console.log(pastLauches);
  } catch (error) {
    console.log(error);
  }
};
