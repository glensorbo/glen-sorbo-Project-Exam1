export const getPastLaunches = async () => {
  const query = {
    query: {
      date_utc: {
        $gte: "2021-01-01T00:00:00.000Z",
      },
    },
    options: {
      limit: 100,
      sort: {
        date_utc: "desc",
      },
      populate: [
        {
          path: "rocket",
        },
      ],
    },
  };
  try {
    const response = await fetch(
      "https://api.spacexdata.com/v5/launches/query",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      }
    );
    const pastLauches = await response.json();
    return pastLauches.docs;
  } catch (error) {
    throw new Error(error);
  }
};

export const getRockets = async () => {
  const query = {
    query: {},
    options: {
      sort: {
        active: "desc",
      },
    },
  };
  try {
    const response = await fetch(
      "https://api.spacexdata.com/v4/rockets/query",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      }
    );
    const rockets = await response.json();
    return rockets.docs;
  } catch (error) {
    throw new Error(error);
  }
};

export const getLaunchpads = async () => {
  const query = {
    query: {},
    options: {
      sort: {
        status: "asc",
      },
    },
  };
  try {
    const response = await fetch(
      "https://api.spacexdata.com/v4/launchpads/query",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      }
    );
    const launchpads = await response.json();
    return launchpads.docs;
  } catch (error) {
    throw new Error(error);
  }
};
