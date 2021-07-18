import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Loading(){
  return (
  <View style={style.container}>
    <Text style={style.text}>Getting the weather</Text>
  </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30, // paddingHorizontal, paddingVertical 리액트네이티브가 가지고 있는 것
    paddingVertical: 100,
    backgroundColor: '#FDF6AA'
  },
  text :{
    color: '#2c2c2c',
    fontSize: 30 // reactnative 에서는 px로 쓸려면 string 형식으로 써줘야 됨 '20px'
  }
})