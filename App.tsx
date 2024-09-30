import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import CarItem from './src/components/CarItem';
import SectionList from './src/components/SectionList';
import { Cars } from './src/res/Data';
import MainNavigation from './route/nav';
import { registerRootComponent } from 'expo';
import TestProvider from './store/testProvider';

const App = () => {

  // return (
  //   <View style={styles.container}>
  //     <ScrollView>{renderCars()}</ScrollView>
  //   </View>
  // );

  return (
    <TestProvider>
      <View style={styles.container} >
        <MainNavigation />
      </View>
    </TestProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // cover the all the screen
  },
  txt: {
    fontSize: 40,
    fontWeight: 'bold',
    borderWidth: 3,
    // padding: 15 ,
    width: 140,
    textAlign: 'center',
    marginTop: 10,
  },
});
registerRootComponent(App);
