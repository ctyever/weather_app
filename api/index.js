import axios from 'axios'
const API_KEY = ''

export const getWeather = ( latitude, longitude ) => axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`)
