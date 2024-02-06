import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import React from 'react';
import {Cars} from '../res/Data';
import CarItem from '../components/CarItem';
import {onCardPress} from '../components/CarItem';
import ScreenNames from '../../route/ScreenNames';

const Screen1 = (props) => {
  const renderCars = () => {
    const carsComponents = Cars.map((car,index) => {
      return <CarItem key={index} brand={car.brand} year={car.year} km={car.km} img={car.img} />;
    });

    return carsComponents;
  };

  

  const onPayPress2 = () => {
    props.navigation.navigate(ScreenNames.screen3,{car: renderCars})
  };

  


  return (
    <View style={{flex: 1}}>
      <ScrollView>{renderCars()}</ScrollView>
      {/* <Button title="GO Screen2" onPress={onCardPress} /> */}
      <Button title="GO Screen3" onPress={onPayPress2} />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});