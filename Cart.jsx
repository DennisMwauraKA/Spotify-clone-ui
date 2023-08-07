import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";

const Cart = () => {
  const food = [
    {
      id: 1,
      title: "pizza",
      color: "#38493",
    },
    {
      id: 2,
      title: "humburger",
      color: "green",
    },
    {
      id: 3,
      title: "chicken",
      color: "orange",
    },
    {
      id:4,
      title:"sausage",
    }
  ];

  return (
    <ScrollView horizontal={true}>
      {food.map((item) => (
        <View style={{paddingHorizontal: 30, marginTop: 50,flexDirection:'row'}}>
          <View
            style={{
              backgroundColor: "red",
              width: 300,
              marginTop: 10,
              justifyContent: "center",
              height: 200,
              paddingHorizontal: 20,
            }}
            key={item.id}
          >
            <Text>{item.title}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
