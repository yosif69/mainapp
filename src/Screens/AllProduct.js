import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import UserItem from '../components/UserItem';
import { getAllHoodie, getAllPants, getAllShoes, getAllproducts } from '../res/api';
import BtnTouch from '../components/BtnTouch';
import SectionList from '../components/SectionList';
import { DataD } from '../res/Data';
import Colors from '../res/Colors';

const AllProduct = (props) => {
  const { data, ListClothis } = props.route.params;
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const renderProducts = () => {
    return products.map(product => <UserItem key={product.id} {...product} />);
  };

  const getAllproducts = () => {
    setLoading(true);
    const getData = {
      Hoodies: () => getAllHoodie(),
      shoes: () => getAllShoes(),
      pants: () => getAllPants(),
    };

    getData[ListClothis?.type]?.().then(res => {
      console.log(res.data);
      setProducts(res.data || []);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllproducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="red" />
        <Text style={styles.loadingText}>Loading Products...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
       horizontal={true} 
       contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}>
        {renderProducts()}
        {/* {renderToDos()} */}
      </ScrollView>
    </View>
  );
};

export default AllProduct;

const styles = StyleSheet.create({

  scrollContainer: {
    flexDirection: 'row', 
    marginVertical:3, 
    marginHorizontal: 12, 
    
  },
  container: {
    flex:1,
    backgroundColor: Colors.Silver, 
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white2,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00D1FF',
    letterSpacing: 1.3,
  },


  
  
});
