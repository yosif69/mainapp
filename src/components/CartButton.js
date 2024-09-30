import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import ScreenNames from '../../route/ScreenNames'

const CartButton = () => {
    const navigation=useNavigation()
    const goTo=()=>{
        navigation.navigate(ScreenNames.Cart)
      }
    return (
      <TouchableOpacity onPress={goTo} >
        <FontAwesome5 name="cart-arrow-down" size={30} color="#fff" />
      </TouchableOpacity>
    )
  }

export default CartButton

const styles = StyleSheet.create({})