import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("dennismwaura14@gmail.com");
  const [username, setUsername] = useState("Dennis");
  const [password, setPassword] = useState("123456");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

 
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password, username)
      .then((userCredential) => {
        Alert.alert(`Hey There!! ${username} Account Created successfuly`);
        const user = userCredential.user;
        console.log(user.email);
       
      })
      .catch((error) => alert(error.message));
  };
  const handleSigin = () => {
    signInWithEmailAndPassword(auth, email, password, username)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user.email);
        navigation.navigate("BottomTab",{username})
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ImageBackground
      source={require("./assets/photos/oldies.jpeg")}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.inputContainer}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 23, fontWeight: "bold",color:'white' }}>Login</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email "
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Username "
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "lightgreen",
                width: "30%",
                height: 40,
                marginLeft: 50,
                alignItems: "center",
                marginTop: 40,
                borderRadius: 20,
                justifyContent: "center",
              }}
              onPress={handleSignUp}
            >
              <Text style={{ color: "white", fontWeight: 400, fontSize: 20 }}>
                Register
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "lightgreen",
                width: "30%",
                height: 40,
                marginLeft: 50,
                alignItems: "center",
                marginTop: 40,
                borderRadius: 20,
                justifyContent: "center",
              }}
              onPress={handleSigin}
            >
              <Text style={{ color: "white", fontWeight: 400, fontSize: 20 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    borderColor: "white",
    borderWidth:1,
    width: "70%",
    color:'white',
    height: 40,
    marginLeft: 50,
    position: "relative",
    top: 10,
    marginVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 40,
  },
  inputContainer: {
    position: "relative",
    top: "50%",
    backgroundColor: "rgba(0,0,0,0.6)",
    height: "50%",
    borderTopLeftRadius: 100,
  },
});
