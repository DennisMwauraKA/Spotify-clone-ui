import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TextInput
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
const SearchScreen = ({ navigation }) => {
  const [product, setProduct] = useState([]);

  const [add, addProduct]  = useState([]);
  // const categories =[
  // {
  //   id:2,
  //   title:'Furniture',
  //   color: "#FF6347",
  //   icon:"log-in",
  //   bg:"black"

  // },
  // {
  //   id:3,
  //   title:'Jewellery',
  //   color: "#4169E1",
  //   icon:"search",
  // },
  // {
  //   id:4,
  //   title:'Electronics',
  //   color: "#32CD32",
  //   icon:"log-in",
  // },
  // {
  //   id:5,
  //   title:'Clothes',
  //   color: "#FF68C00",
  //   icon:"log-in",
  // },

  // ];

  useEffect(() => {
    fetchProduct();
    productAdd();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get("http://192.168.43.244:2000/products");
      setProduct(res.data);
    } catch (error) {
      console.log(error);
      console.log(res.data);
    }
  };

  const productAdd =async () =>{
    try {
      const res = await axios.put("http://192.168.43.244:2000/products")
      addProduct(res.data);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View>
      <ScrollView>
        {product.map((item) => (
          <View style={{ paddingHorizontal: 30, marginTop: 50 }}>
            <View
              style={{
                width: 200,
                backgroundColor: "grey",
                justifyContent: "center",
                height: 50,
                marginBottom: 10,
                borderRadius: 10,
                paddingHorizontal: 12,
              }}
              key={item._id}
            >
              <Text style={{ color: item.color }}>ProductName:{item.name}</Text>
              <Text style={{ color: item.color }}>Price:{item.price}</Text>
               <TextInput  onChangeText={(text) => addProduct(text)} style={{backgroundColor:'white'}}/>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
