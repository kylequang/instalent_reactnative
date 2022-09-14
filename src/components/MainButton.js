import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import React from 'react';
export default function MainButton(props) {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor:props.backgroundColor}]} onPress={props.onPress}>
      <Text style={[styles.textButton,{color:props.color}]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles=StyleSheet.create({
    button:{
        borderRadius:8,
        width:'100%',
        height:52,
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center' ,
        opacity:0.7
    },
    textButton:{
        fontSize:16,
        fontWeight:'700',
        lineHeight:24,
      
    }
})