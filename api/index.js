import axios from 'axios'
const API_KEY = 'a0fc372bb75934f6c6c7b3c82e6fc595'

export const getWeather = ( latitude, longitude ) => axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`)