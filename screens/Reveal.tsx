import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Reveal = () => {
  const [postText, setPostText] = React.useState<string>("");

  function handlePost() {
    if (postText !== "") {
      console.log(postText);
    }
  }

  return (
    <View style={styles.postContainer}>
      <View>
        <Text style={styles.postTitle}>
          Share Your Close Encounters with Our Galactic Community.{" "}
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.post}
          onChangeText={(text) => setPostText(text)}
          value={postText}
          placeholder="Share Your Experience..."
          placeholderTextColor="white"
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
        />
      </View>
      <Pressable style={styles.postBtnContainer} onPress={handlePost}>
        <View>
          <Text style={styles.postBtnText}>
            POST YOUR{" "}
            <Text style={{ color: "#5c1cff", fontWeight: "900" }}>BS</Text>
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Reveal;

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "black",
    flex: 1,
  },
  postTitle: {
    marginVertical: 20,
    fontWeight: "600",
    fontSize: 20,
    fontFamily: "AppleSDGothicNeo-UltraLight",
    textAlign: "center",
    color: "#cfcadb",
  },
  post: {
    height: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "white",
    overflow: "hidden",
    backgroundColor: "#141414",
    color: "white",
  },
  postBtnContainer: {
    width: 130,
    borderWidth: 1,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "black",
  },
  postBtnText: {
    textAlign: "center",
    padding: 10,
    fontWeight: "600",
    backgroundColor: "#cfcadb",
    fontFamily: "AppleSDGothicNeo-UltraLight",
  },
});
