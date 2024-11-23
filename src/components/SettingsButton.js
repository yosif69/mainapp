import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenNames from '../../route/ScreenNames'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SettingsButton = () => {
  const navigation=useNavigation()
  const goTo=()=>{
      navigation.navigate(ScreenNames.Settingss)
    }
  return (
    <TouchableOpacity onPress={goTo} >
      <MaterialIcons name="settings-suggest" size={40} color="#FFFFFF" />
    </TouchableOpacity>
  )
}

export default SettingsButton

const styles = StyleSheet.create({})