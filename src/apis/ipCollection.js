import { userData } from "../data/userData";

export const ipAddress = async (ip) => {

  let apiKey = process.env.REACT_APP_IP_API_KEY;

  let ipAddress = localStorage.getItem('ip');

  const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('ip info', data)

      userData.ip = data.ip_address;
      userData.timezone = data.timezone.name
      userData.timezoneEasy = data.timezone.abbreviation
      userData.lat = data.latitude
      userData.lon = data.longitude

    })
}