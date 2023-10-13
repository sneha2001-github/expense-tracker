import React from 'react';
import {useEffect , useState} from 'react';
import  "./header.css"

function Header() {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [sunriseSunset, setSunriseSunset] = useState({});

  useEffect(() => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }


    fetch('https://api.sunrise-sunset.org/json?lat=' + latitude + '&lng=' + longitude + '&formatted=0')
      .then((response) => response.json())
      .then((data) => setSunriseSunset(data.results));
  }, [latitude, longitude]);
  return (
    <>
    <div className="navbar">
  <a
    href="#"
    id="menu-icon"
    className="menu-icon"
    onclick="toggleMenu()"
    style={{ float: "left", fontSize: 23 }}
  >
    <i
      className="fa-solid fa-wallet"
      style={{ color: "#dedede", fontSize: 30 }}
    />{" "}
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Expense Tracker
  </a>
  <div className="navbar-links">
    <a className="active" href="#">
      <i className="fa fa-fw fa-home" /> Home
    </a>
    <a href="#expense"> Add Expense</a>
    <a href="#">
      <i className="fa fa-fw fa-user" /> Login
    </a>
  </div>
</div>
<div>
<div className="location-info">
      <div>Latitude: {latitude}</div>
      <div>Longitude: {longitude}</div>
      <div>
        Sunrise today: {new Date(sunriseSunset.sunrise).toLocaleTimeString()}
      </div>
      <div>
        Sunset today: {new Date(sunriseSunset.sunset).toLocaleTimeString()}
      </div>
      <div>
        Sunrise tomorrow: {new Date(sunriseSunset.sunset).toLocaleTimeString()}
      </div>
      <div>
        Sunset tomorrow: {new Date(sunriseSunset.sunset).toLocaleTimeString()}
      </div>
    </div>
</div>
    </>
  )
}

export default Header

