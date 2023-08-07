import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Card } from "react-native-paper";
const DownloadScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={{ fontSize: 25, fontWeight: 700, paddingLeft: 10 }}>
          Your Library
        </Text>
        <View style={styles.icons}>
          <Ionicons name="search" size={27} />
          <Ionicons name="add" size={27} />
        </View>
      </View>
      <ScrollView vertical={true}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card style={styles.favourite}>
            <Text style={styles.favouriteText}>Playlists</Text>
          </Card>
          <Card style={styles.favourite}>
            <Text style={styles.favouriteText}>Artists</Text>
          </Card>
          <Card style={styles.favourite}>
            <Text style={styles.favouriteText}>Albums</Text>
          </Card>
          <Card style={styles.Podcast}>
            <Text style={styles.favouriteText}>Podcast & Shows</Text>
          </Card>
          <Card style={styles.Podcast}>
            <Text style={styles.favouriteText}>Downloaded</Text>
          </Card>
        </ScrollView>

        <View style={styles.recent}>
          <Text>Recently Added</Text>
          <Ionicons name="menu" size={20} />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Card style={styles.Songs}>
            <Card.Content>
              <Ionicons name="heart" size={25} />
            </Card.Content>
          </Card>
          <Text>Liked Songs</Text>
          <View>
            <MaterialIcons name="push-pin" size={20} color="green" />
            <Ionicons name="arrow-down" size={20}  color="black"style={{ backgroundColor: "green", borderRadius: 50 }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DownloadScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    gap: 20,
  },
  favourite: {
    backgroundColor: "orange",
    width: 70,
    height: 40,
    borderRadius: 50,
    marginTop: 20,
    alignItems: "center",
    marginLeft: 15,
    marginRight: 20,
  },
  Podcast: {
    backgroundColor: "orange",
    width: 140,
    height: 40,
    borderRadius: 50,
    marginTop: 20,
    alignItems: "center",
    marginHorizontal: 20,
  },
  favouriteText: {
    marginTop: 10,
  },
  recent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginRight: 15,
    marginLeft: 40,
  },
  Songs: {
    width: 80,
    elevation: 3,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 20,
    height: 80,
    backgroundColor: "#104",
  },
});
