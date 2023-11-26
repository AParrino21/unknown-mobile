import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { dummyData } from "../dummyData";
import CardPost from "../components/CardPost";

const Home = () => {
  return (
    <View>
      <View>
        <Text style={styles.homeHeader}>
          Welcome to Beyond Sightings, the central hub for UFO stories,
          encounters, and all things Alien. Share your unique experiences with
          the world. Your stories will remain unaltered, unregulated, and fully
          revealed.
        </Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={dummyData}
          renderItem={CardPost}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeHeader: {
    textAlign: "center",
    fontWeight: "600",
    padding: 20,
  },
  flatListContainer: {
    marginBottom: 300
  }
});
