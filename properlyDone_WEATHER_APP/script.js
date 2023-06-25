let takeval = () => {
  // const fetch = import("cross-fetch");
  let inputtext = document.getElementById("inputtext");
  let val = inputtext.value;
  return val;
};

let getval = (getnn) => {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${getnn}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "85016f6a4bmshd0c3a814a93117bp178eabjsnd6884dc8d417",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  return { url, options };
};

let fetching = async () => {
  let { url, options } = getval(takeval());
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

let temp = document.getElementById("temp");
let city = document.getElementById("city");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
// fetching();

let fillup = async () => {
  let fetched = await fetching();
  city.innerHTML = fetched.location.name;
  temp.innerHTML = fetched.current.temp_c;
  humidity.innerHTML = fetched.current.humidity;
  wind.innerHTML = fetched.current.wind_kph;
};
