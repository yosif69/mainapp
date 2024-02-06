import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CarItem from '../components/CarItem'

const Screen2 = (props) => {

  const car = props.route.params.car

  console.log("car: ", car);

  return (    
    <View style={styles.container}>
        <CarItem {...car}/>

    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

 
})
