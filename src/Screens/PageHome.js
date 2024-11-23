import { StyleSheet, Text, View, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import Colors from '../res/Colors';
import SectionList from '../components/SectionList';
import SearchComponents from '../components/SearchComponents';
import Images from '../assets/images/images';
import { DataD } from '../res/Data';
import { FontAwesome5 } from '@expo/vector-icons';
import CartButton from '../components/CartButton';
import SettingsButton from '../components/SettingsButton';

function PageHome() {
  return (
    <ImageBackground source={Images.rkBackground2()} resizeMode="stretch" style={styles.container}>
      <View style={{ padding: 70 }}>
        <SearchComponents />
      </View>

      <View style={styles.headerContainer}>
        <SettingsButton />
        <Text style={styles.title}>
          Hoodie
          <Text style={styles.blueStyle}>Style</Text>
          <Text style={styles.redStyle}> Rk</Text>
        </Text>
        <CartButton />
      </View>
      <FlatList
        data={DataD}
        // keyExtractor={(item) => item.name}
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
    // backgroundColor: "#111", 
    padding: 15,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.white2,
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
      fontSize: 28,
      fontWeight: "700",
      color: "#FFFFFF",
      textAlign: "center",  
  },
  blueStyle: {
    color: Colors.lightGray,
  },
  redStyle: {
    color: "#E70000",
  },
  Scroll: {
    flex: 1,
    marginTop: 10,
  },
  contentContainer: {
    paddingBottom: 30,
  },
});
