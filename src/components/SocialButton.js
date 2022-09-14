import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import React from 'react';
import { MainWhite } from '../constants/Colors';

export default function SocialButton(props) {
  return (
    <TouchableOpacity style={styles.button}  onPress={props.onPress}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        {props.svg}
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}


const styles=StyleSheet.create({
  button:{
    backgroundColor:MainWhite,
    borderRadius:8,
    height:56,
    
    justifyContent:'center',
    paddingLeft:60,
    marginVertical:16
  },
  text:{
    fontSize:16,
    fontWeight:'400',
    lineHeight:24,
    alignItems:'center',
    marginLeft:10
  }
})