import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import React from 'react';
import { DataD} from '../res/Data';
import ScreenNames from '../../route/ScreenNames';
import BtnTouch from '../components/BtnTouch';
import { renderClothis }  from '../components/BtnTouch';

const Screen1 = (props) => {
  
  
  const renderHoodie = () => {
    const DataComponents = DataD.map((tods,index) => {
      return <BtnTouch  brand={tods.brand} year={tods.year} km={tods.km} img={tods.img} id={tods.id}  />;
    });

    return DataComponents;
  };

  

  const onPayPress2 = () => {
    props.navigation.navigate(ScreenNames.Screen3,{list: renderClothis})
  };

  


  return (
    <View style={{flex: 1}}>
      <ScrollView>{renderHoodie()}</ScrollView>
      {/* <Button title="GO Screen2" onPress={onCardPress} /> */}
      {/* <Button title="GO Screen3" onPress={onPayPress2} /> */}
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});