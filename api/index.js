import axios from 'axios'
<<<<<<< HEAD
const API_KEY = '92d2ae85ad1d2ca29bd0b6bb43d1eb0d'

export const getWeather = ( locaInfo ) => axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`)
=======
const API_KEY = ''

export const getWeather = ( latitude, longitude ) => axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`)
>>>>>>> ebe79051f49bbcfcb6518e3ced6d879e897288f4
