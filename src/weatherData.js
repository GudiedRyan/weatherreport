let weatherTypes = ["sunny", "clear" , "partially cloudy", "raining", "a thunderstorm", "cloudy", "snowing", "a blizzard"];

export let weatherData = [
    {
        time: "12:00",
        temperature: Math.floor(Math.random() * 100) + 1,
        condition: weatherTypes[Math.floor(Math.random() * 8)]
    },
    {
        time: "1:00",
        temperature: Math.floor(Math.random() * 100) + 1,
        condition: weatherTypes[Math.floor(Math.random() * 8)]
    },
    {
        time: "2:00",
        temperature: Math.floor(Math.random() * 100) + 1,
        condition: weatherTypes[Math.floor(Math.random() * 8)]
    }
];