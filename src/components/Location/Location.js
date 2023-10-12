import React from 'react'
import {useEffect , useState} from 'react';

function Location() {

    const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [sunriseToday, setSunriseToday] = useState('');
  const [sunsetToday, setSunsetToday] = useState('');
  const [sunriseTomorrow, setSunriseTomorrow] = useState('');
  const [sunsetTomorrow, setSunsetTomorrow] = useState('');
  
    
    
  return (
    <div>
         <div>
         <p>
    Latitude:   Longitude: 
  </p>
  <p>
    Today's Sunrise:  Sunset: 
  </p>
    </div>
    </div>
  )
}

export default Location