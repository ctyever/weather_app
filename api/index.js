import axios from 'axios'
const API_KEY = '92d2ae85ad1d2ca29bd0b6bb43d1eb0d'

export const getWeather = ( locaInfo ) => axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`)