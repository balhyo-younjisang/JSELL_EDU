const API_KEY = "ae69ec24821aaf10139ddde9b27b6fc5";

const changeBackgroundHandler = (weather) => {
    const body = document.querySelector("body");

    console.log(weather);
    if (weather.includes("cloud")) {
        body.style.backgroundColor = "gray";
    } else if (weather.includes("sun")) {
        body.style.backgroundColor = "skyblue";
    } else if (weather.includes("snow")) {
        body.style.backgroundColor = "red";
    } else if (weather.includes("rain")) {
        body.style.backgroundColor = "green";
    }
}

const callApi = async (lat, lon) => {
    const url =
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url).then((res) => res.json())
        .then((data) => data).catch((err) => console.log(`error : ${err}`));

    // console.log(response.current.weather[0].description);
    const weather = response.current.weather[0].description;
    changeBackgroundHandler(weather);
}

const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        callApi(lat, lon);
    });
}

getLocation();