import React from 'react';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import * as Location from 'expo-location';
// import getWeather from './api/index'
import { Alert } from 'react-native'
import axios from 'axios'


export default function App() {

  

  const [isLoading, setIsLoading] = useState(true);
 
  // // const getWeather = (latitude, longitude) => {const {data} = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=
  // //     ${latitude}&lon=${longitude}&APPID=${API_KEY}`);
  // //       console.log(data)
  //     }

  const getLocation = async () => {
    
    const API_KEY = 'a0fc372bb75934f6c6c7b3c82e6fc595'

    try {
      
      await Location.requestForegroundPermissionsAsync();
      
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      console.log( latitude, longitude)
      // console.log(API_KEY)
      const weather = (latitude, longitude) => {axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`)}
        
      console.log(weather())
     
      // getWeather({latitude, longitude})
      // .then(res => {
      //   console.log({data})
      // })
      // .catch(err => {
      //   console.log(err.data)
      // })

      setIsLoading(false);
      
    } catch (error) {
      Alert.alert("위치정보를 가져올 수 없습니다.");
    }
    
  };

  useEffect(() => {
    getLocation();
    // getWeather(latitude, longitude)
  })

  return (
    // View 는 div 와 같은 것이라고 생각하면 됨
    isLoading ? <Loading/> : null
  );
}

