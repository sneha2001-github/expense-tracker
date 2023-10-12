import React, { useState, useEffect } from 'react';

function SunriseSunsetDialog() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [sunriseToday, setSunriseToday] = useState('');
  const [sunsetToday, setSunsetToday] = useState('');
  const [sunriseTomorrow, setSunriseTomorrow] = useState('');
  const [sunsetTomorrow, setSunsetTomorrow] = useState('');

  useEffect(() => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }

    fetch(
      `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`
    )
      .then((response) => response.json())
      .then((data) => {
        setSunriseToday(data.results.sunrise);
        setSunsetToday(data.results.sunset);
      });

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    fetch(
      `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${tomorrow.toISOString().split('T')[0]}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSunriseTomorrow(data.results.sunrise);
        setSunsetTomorrow(data.results.sunset);
      });
  }, [latitude, longitude]); 

  return (
    <div className="sunrise-sunset-dialog">
      <p>
        Latitude: {latitude}, Longitude: {longitude}
      </p>
      <p>
        Today's Sunrise: {sunriseToday}, Sunset: {sunsetToday}
      </p>
      <p>
        Tomorrow's Sunrise: {sunriseTomorrow}, Sunset: {sunsetTomorrow}
      </p>
    </div>
  );
}

export default SunriseSunsetDialog;
