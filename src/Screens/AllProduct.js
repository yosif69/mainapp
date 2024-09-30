import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import UserItem from '../components/UserItem';
import { getAllHoodie, getAllPants, getAllShoes, getAllproducts } from '../res/api';
import BtnTouch from '../components/BtnTouch';
import SectionList from '../components/SectionList';
import { DataD } from '../res/Data';

const AllProduct = (props) => {
  const { data, ListClothis } = props.route.params;
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const renderProducts = () => {
    return products.map(product => <UserItem key={product.id} {...product} />);
  };

  const renderToDos = () => {
    return data.map(todo => (
      <View style={styles.itemContainer} key={todo.id}>
        <Text style={styles.title1}>{todo.title}</Text>
        <Image style={styles.img} source={todo.img} />
      </View>
    ));
  };

  const getAllproducts = () => {
    setLoading(true);
    const getData = {
      Hoodies: () => getAllHoodie(),
      shoes: () => getAllShoes(),
      pants: () => getAllPants(),
    };

    getData[ListClothis?.type]?.().then(res => {
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
      <ScrollView>
        {renderProducts()}
        {/* {renderToDos()} */}
      </ScrollView>
    </View>
  );
};

export default AllProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '', // Light grey background for better readability
    // padding: 10/,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 20,
    color: '#0ff',
  },
  
  
});
