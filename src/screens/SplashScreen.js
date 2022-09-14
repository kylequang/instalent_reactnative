import {View, Text, Image} from 'react-native';
import React from 'react';
import { TextColor } from '../constants/Colors';

export default function SplashScreen() {
  return (
    <View
      style={{
        backgroundColor: '#FFF0EE',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/images/logo_app.png')}
        style={{height: 46, width: 220}}
      />
    <View style={{marginTop:258,alignItems:'center'}}>
        <Text style={{color:TextColor,fontSize:12,fontWeight:'400'}}>from</Text>
    <Image source={require('../../assets/images/DFlogo.png')} style={{height:24,width:118}}/>
    </View>
      

      <View style={{position: 'absolute', bottom: 0}}>
        <Image source={require('../../assets/images/wave1.png')} />
        <View style={{position: 'absolute', bottom: 0}}>
          <Image source={require('../../assets/images/wave2.png')} />
        </View>
      </View>
    </View>
  );
}
