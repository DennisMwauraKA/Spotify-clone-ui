import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";
// screens
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import DownloadScreen from "./DownloadScreen";
import LoginScreen from "./LoginScreen";
import Cart from "./Cart";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const BottomTab= ({route})=>{
  const {username} = route.params;
  
  return (
    
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
          },
          tabBarStyle: { paddingTop: 10, height: 60, },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (rn ==="Your Library") {
              iconName = focused ? "list" : "list-outline";
            } else if(rn==="Cart"){
              iconName = focused ? "cart" : "cart-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown:false}}
          initialParams={{username}}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          initialParams={{username}}
          options={{headerShown:false}}
          
        
        />
        <Tab.Screen
          name="Your Library"
          component={DownloadScreen}
          initialParams={{username}}
          options={{headerShown:false}}
         
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          initialParams={{username}}
          options={{headerShown:false}}
         
        />
      </Tab.Navigator>
      
    

    );
};

const App = () =>{

  
  return (
    <NavigationContainer>
     
    <Stack.Navigator>
      <Stack.Screen name="Login " options={{headerShown:false}} component={LoginScreen}/>
      <Stack.Screen name="BottomTab" options={{headerShown:false}} component={BottomTab}/>
    </Stack.Navigator>
 </NavigationContainer>
  );
}

 
export default App;

const styles = StyleSheet.create({});
