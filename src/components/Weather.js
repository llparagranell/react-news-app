import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Weather.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  useEffect(() => {
    axios
      .get("https://ipinfo.io/106.208.175.227?token=5919a196934ea5")
      .then((res) => {
        setSearch(res.data);
      });
  });
  const [search, setSearch] = useState("bhopal");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4c5b975e15d4a156c04aa92b561d3595`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setCity(res.data);
    });
  }, []);

  if (!city) return null;

  const iconImg = `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;

  return (
    <>
      <div className="main">
        <div>
          {!city ? (
            <p>no data</p>
          ) : (
            <div className="weather">
              <div id="cl">
                <ul>
                  <p id="city">
                    {search.city}, {search.region}
                  </p>
                </ul>

                <div style={{ display: "flex" }}>
                  <div style={{ marginLeft: "-4vh" }}>
                    <img id="image" src={iconImg} alt="" />
                  </div>
                  <div style={{ paddingTop: "4vh" }}>
                    <p>
                      <li id="temp">{Math.round(city.main.temp)}</li> * c
                    </p>
                    <p>{city.weather[0].description}</p>
                  </div>
                </div>
              </div>
             
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Weather;
