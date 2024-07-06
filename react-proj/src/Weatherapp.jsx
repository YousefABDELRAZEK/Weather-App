import React, { useState } from "react";

const api = {
  key: 'd066fe850323beee26ecdabf0bd09f79',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function Weatherapp() {
  const [Weather, setWeather] = useState("");
  const [search, setSearch] = useState({});

  const searchBTN = () => {
    fetch(`${api.base}weather?q=${Weather}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSearch(result);
      });
  };

  function handleInput(event) {
    setWeather(event.target.value);
  }

  return (
    <div className="box">
    <div className="firstdiv">
      <h1>Weather App</h1>
      <div className="secondDiv">
        <input
          type="text"
          placeholder="Enter a City..."
          onChange={handleInput}
        />
        <button className="btn-1" onClick={searchBTN}>Search</button>
      </div>
      <div className="info1">
      {search.name && <p className="info">{search.name}</p>}
      {search.main && <p className="info">{search.main.temp}°C</p>}
      {search.weather && search.weather.length > 0 && (
        <>
          <p className="info">{search.weather[0].main}</p>
          <p className="info">{search.weather[0].description}</p>
        </>
        
      )}
      </div>
    </div>
    </div>
  );
}

export default Weatherapp;
