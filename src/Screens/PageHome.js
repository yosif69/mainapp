import { StyleSheet, Text, View, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import Colors from '../res/Colors';
import SectionList from '../components/SectionList';
import SearchComponents from '../components/SearchComponents';
import Images from '../assets/images/images';
import { DataD } from '../res/Data';

function PageHome() {
  return (
    <ImageBackground source={Images.lxBackground()} resizeMode="cover" style={styles.container}>
      <View style={styles.headerContainer}>
        <SearchComponents style={styles.searchBar} />
        <Text style={styles.title}>
          Hoodie
          <Text style={styles.blueStyle}>Style</Text>
          <Text style={styles.redStyle}> Rk</Text>
        </Text>
      </View>

      <FlatList
        data={DataD}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <SectionList item={item} />}
        style={styles.Scroll}
        contentContainerStyle={styles.contentContainer}
      />
    </ImageBackground>
  );
}

export default PageHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c", 
    padding: 10, 
  },
  headerContainer: {
    backgroundColor:"#1c1c1c",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10, 
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    marginRight:89, 
    fontWeight: "bold",
    color: "#ffffff", 
  },
  blueStyle: {
    color: Colors.lightBlue,
    fontWeight: "800",
  },
  redStyle: {
    fontSize: 20, 
    color: "#E70000", 
  },
  Scroll: {
    flex: 1,
    marginTop: 10,
  },
  contentContainer: {
    paddingBottom: 20, 
  },
});