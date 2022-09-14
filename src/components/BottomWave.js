import { View, Text,Image } from 'react-native'
import React from 'react'

export default function BottomWave() {
  return (
    <View style={{position: 'absolute', bottom: 0}}>
    <Image source={require('../../assets/images/wave1.png')} style={{width:400,height:70}}/>
    <View style={{position: 'absolute', bottom: 8}}>
      <Image source={require('../../assets/images/wave2.png')}style={{width:450,height:70}} />
    </View>
  </View>
  )
}