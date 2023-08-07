import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";

import { Card } from "react-native-paper";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeScreen = ({navigation,route}) => {
 const {username} = route.params;

  return (
    <ScrollView vertical={true} style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "white", fontSize: 19, fontWeight: 700 }}>
          Hi,{username}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginRight: 30,
            gap: 20,
            alignItems: "center",
          }}
        >
          <Ionicons name="notifications" size={20} color={"white"} />
          <Ionicons name="search" size={20} color={"white"} />
          <Ionicons name="settings" size={20} color={"white"}  />
        </View>
      </View>

      <View style={styles.music}>
        <Card
          style={{
            backgroundColor: "grey",
            marginBottom: 10,
            width: "45%",
            height: 60,
            flexDirection: "row",
            marginLeft: 15,
            borderRadius: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("./assets/photos/date.jpeg")}
              style={{
                width: 80,
                height: 60,
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
              }}
            />
            <Text
              style={{ color: "white", marginTop: 20, marginHorizontal: 2 }}
            >
              Your Episodes
            </Text>
          </View>
        </Card>

        <Card
          style={{
            backgroundColor: "grey",
            marginBottom: 10,
            width: "45%",
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 15,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Mixtape</Text>
        </Card>
      </View>

      <View style={styles.music}>
        <Card
          style={{
            backgroundColor: "grey",
            marginBottom: 10,
            width: "45%",
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 15,
            borderRadius: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <Ionicons name="heart" size={50} color={"red"} />
            <Text style={{ color: "white" }}>Liked Songs</Text>
          </View>
        </Card>
        <Card
          style={{
            backgroundColor: "grey",
            marginBottom: 10,
            width: "45%",
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 15,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Hip-Hop Mix</Text>
        </Card>
      </View>

      <View style={styles.music}>
        <Card
          style={{
            backgroundColor: "grey",
            marginBottom: 10,
            width: "45%",
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 15,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>RNB</Text>
        </Card>
        <Card
          style={{
            backgroundColor: "grey",
            marginBottom: 10,
            width: "45%",
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 15,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Hip-Hop Favourites</Text>
        </Card>
      </View>

      <View>
        <Text
          style={{
            color: "white",
            paddingHorizontal: 15,
            fontWeight: 700,
            fontSize: 24,
            marginBottom: 10,
          }}
        >
          Music downloads
        </Text>

        <Card
          style={{
            width: 200,
            height: 150,
            borderRadius: 5,
            marginHorizontal: 15,
            backgroundColor: "#104",
          }}
        >
          <Card.Content
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Ionicons
              name="heart"
              size={70}
              color="red"
              style={{ marginTop: 30 }}
            />
          </Card.Content>
        </Card>
        <View
          style={{
            flexDirection: "row",
            gap: 3,
            alignItems: "center",
            marginTop: 5,
            paddingLeft: 15,
          }}
        >
          <Ionicons
            name="arrow-down"
            size={15}
            color={"black"}
            style={{ backgroundColor: "green", borderRadius: 50 }}
          />
          <Text style={{ color: "white" }}>Liked Songs</Text>
        </View>
      </View>

      <Text
        style={{
          marginBottom: 10,
          marginTop: 40,
          color: "white",
          paddingHorizontal: 15,
          fontWeight: 700,
          fontSize: 24,
        }}
      >
        Podcast downloads
      </Text>

      <ScrollView horizontal={true} style={{ marginLeft: 5 }}>
        <View>
          <ImageBackground
            source={require("./assets/photos/date.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
              marginTop: 5,
              gap: 3,
            }}
          >
            <Ionicons
              name="arrow-down"
              size={15}
              color={"black"}
              style={{ backgroundColor: "green", borderRadius: 50 }}
            />
            <Text style={{ color: "white" }}>The Secrets of Birch</Text>
          </View>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/date.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 3,
              marginTop: 5,
              paddingLeft: 10,
            }}
          >
            <Ionicons
              name="arrow-down"
              size={15}
              color={"black"}
              style={{ backgroundColor: "green", borderRadius: 50 }}
            />
            <Text style={{ color: "white" }}>Open Water</Text>
          </View>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/date.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
              paddingLeft: 10,
              gap: 3,
            }}
          >
            <Ionicons
              name="arrow-down"
              size={15}
              color={"black"}
              style={{ backgroundColor: "green", borderRadius: 50 }}
            />
            <Text style={{ color: "white" }}>The Woman at the Bar</Text>
          </View>
        </View>
      </ScrollView>

      <Text
        style={{
          color: "white",
          paddingHorizontal: 15,
          fontWeight: 700,
          fontSize: 24,
          marginBottom: 25,
          marginTop: 15,
        }}
      >
        Recently played
      </Text>

      <ScrollView horizontal={true} style={{ marginLeft: 5 }}>
        <View>
          <ImageBackground
            source={require("./assets/photos/drake.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "white", marginTop: 5, marginLeft: 10 }}>
            Drake
          </Text>
        </View>

        <View>
          <ImageBackground
            source={require("./assets/photos/cee.jpeg")}
            style={{
              resizeMode: "contain",
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "white", marginTop: 5, marginLeft: 10 }}>
            Central Cee
          </Text>
        </View>

        <View>
          <ImageBackground
            source={require("./assets/photos/weekend.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "white", marginTop: 5, marginLeft: 10 }}>
            The Weekend
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/tupac.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "white", marginTop: 5, marginLeft: 10 }}>
            Tupac Radio
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/omahlay.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.6)",
              }}
            />
            <Text
              style={{
                color: "pink",
                fontSize: 20,
                fontWeight: 700,
                paddingTop: 120,
                paddingLeft: 20,
                position: "absolute",
              }}
            >
              Calm Down
            </Text>
          </ImageBackground>
          <Text style={{ color: "white", marginTop: 5, marginLeft: 10 }}>
            Baby Calm Down
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/malone.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "white", marginTop: 5, marginLeft: 10 }}>
            Malone Radio
          </Text>
        </View>
      </ScrollView>

      <Text
        style={{
          color: "white",
          paddingHorizontal: 15,
          fontWeight: 700,
          fontSize: 24,
          marginBottom: 25,
          marginTop: 15,
        }}
      >
        Hip Hop
      </Text>

      <ScrollView horizontal={true} style={{ marginLeft: 5 }}>
        <View>
          <ImageBackground
            source={require("./assets/photos/cee.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            Lil Durk, Drake, Central Cee,
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/snoop.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            Jay-Z, Snoop
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/jayz.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            Lil Wayne, Jay-Z, Snoop Dog,
          </Text>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            Dr.Dre,2Pac
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/jcole.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            Eminem, Pop Smoke, J.Cole
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/metroboomin.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            SZA, Metro Boomin,J.Cole
          </Text>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            Nicki Minaj
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/rihanna.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            Kanye West, Rihanna
          </Text>
        </View>
      </ScrollView>

      <Text
        style={{
          color: "white",
          paddingHorizontal: 15,
          fontWeight: 700,
          fontSize: 24,
          marginBottom: 25,
          marginTop: 15,
        }}
      >
        Afro Party Starters
      </Text>

      <ScrollView horizontal={true} style={{ marginLeft: 5 }}>
        <View>
          <ImageBackground
            source={require("./assets/photos/adekulne.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            Burna Boy, Ayra Starr, Rema
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/burna.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            Rema, Ed Sheeran, Burna Boy
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/ayra.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            DJ Maphorisa, Ayrra,
          </Text>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            Tyler, Adekulne, Master KG
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/rema.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            Rema, Toliver, Dave
          </Text>
        </View>
      </ScrollView>
      <Text
        style={{
          color: "white",
          paddingHorizontal: 15,
          fontWeight: 700,
          fontSize: 24,
          marginBottom: 25,
          marginTop: 15,
        }}
      >
        Hip Hop Workout
      </Text>

      <ScrollView horizontal={true} style={{ marginLeft: 5 }}>
        <View>
          <ImageBackground
            source={require("./assets/photos/wlift.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            Tupac, Dr.Dre, DojaCat
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/abs.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            IceSpice, Eminem, Jcole
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/man.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            Beyonce, Kanye West
          </Text>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            DojaCat
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/woman.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            Kanye, Eminem
          </Text>
        </View>
      </ScrollView>
      <Text
        style={{
          color: "white",
          paddingHorizontal: 15,
          fontWeight: 700,
          fontSize: 24,
          marginBottom: 25,
          marginTop: 15,
        }}
      >
        Best of Artists
      </Text>

      <ScrollView horizontal={true} style={{ marginLeft: 5 }}>
        <View>
          <ImageBackground
            source={require("./assets/photos/burna.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            This is Burna Boy.The
          </Text>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            essential tracks, all in one...
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/ice.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            This is IceSpice.The
          </Text>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            essential tracks, all in one...
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/tupac.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            This is Tupac. The
          </Text>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            essential tracks, all in one...
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/metroboomin.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            This is Metro Boomin. The
          </Text>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            essential tracks, all in one...
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/rma.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            This is Rema. The
          </Text>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            essential tracks, all in one...
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/weekend.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            This is The Weekend. The
          </Text>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            essential tracks, all in one...
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/kanye.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            This is Kanye West. The
          </Text>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            essential tracks, all in one...
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/rihanna.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            This is Rihanna. The
          </Text>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            essential tracks, all in one...
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require("./assets/photos/doja.jpeg")}
            style={{
              width: 200,
              height: 150,
              borderRadius: 5,
              marginHorizontal: 10,
            }}
          ></ImageBackground>
          <Text style={{ color: "grey", marginLeft: 10, marginTop: 5 }}>
            This is DojaCat. The
          </Text>
          <Text style={{ color: "grey", marginLeft: 10 }}>
            essential tracks, all in one...
          </Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    zIndex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
    marginBottom: 30,
    marginTop: 40,
  },
  music: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
