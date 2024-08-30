import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenNames from '../../route/ScreenNames';
import { useNavigation } from '@react-navigation/native';
import Screen3 from '../Screens/Screen3';

const BtnTouch = props => {

  const { type, seeall, data, color, textColor } = props


  const navigation = useNavigation();


  const onCardPress = () => {
    navigation.navigate(ScreenNames.AllProduct, /**params */ { ListClothis: ListClothis,data })
  }


  const ListClothis = {
    type: props.type,
    clothis:props.clothis
  }


  const styles = StyleSheet.create({

    btn: {
      backgroundColor: color || "#fff",
      height: 40,
      width: 110,
      borderRadius: 25,
      // alignSelf:'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn1: {
      backgroundColor: "rgba(249, 33, 33, 0.782)",
      backgroundColor: color || "#fff",
      height: 40,
      width: 110,
      borderRadius: 25,
      alignSelf: 'flex-end',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },

    btnText: {
      fontSize: 20,
      fontWeight: "bold",
      color: textColor || "#fff",
      fontStyle: 'italic',

    },
    btntouch: {
      fontSize: 20,
      fontWeight: "bold",
      fontStyle: 'italic',
      marginLeft: 150,


    },
    btnText1: {
      fontSize: 20,
      fontWeight: "bold",
      fontStyle: 'italic',

    },
    btnText2: {
      fontSize: 20,
      fontWeight: "bold",
      color: "rgb(39, 133, 255)",
      fontStyle: 'italic',

    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10
    }
  })

  return (
    <View style={styles.container}>
      <View style={[styles.btn]}>
        <Text style={styles.btnText}>{type || "no name"}</Text>
      </View>

      <TouchableOpacity onPress={onCardPress} style={[styles.btn1,]}>
        <Text style={styles.btnText2}>{seeall || "no name"} </Text>
      </TouchableOpacity>



    </View>
  )

}


export default BtnTouch


