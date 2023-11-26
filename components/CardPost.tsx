import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PostData } from "../types";
import { Octicons } from "@expo/vector-icons";

const CardPost = ({ item }: { item: PostData }) => {
  function addComment(id: string) {
    console.log(id);
  }

  function viewComments(id: string) {
    console.log(id);
  }

  function handleLike(id: string) {
    console.log(id);
  }

  function handleDislike(id: string) {
    console.log(id);
  }

  return (
    <View style={styles.cardRoot}>
      <Text style={styles.cardDate}>{item.date}</Text>
      <Text style={styles.cardAuthor}>{item.author}</Text>
      <View style={styles.cardReactionsContainer}>
        <Text style={styles.cardReactions}>
          <Octicons name="thumbsup" size={12} color="green" />{" "}
          {item.reactions.real}
        </Text>
        <Text style={styles.cardReactions}>
          <Octicons name="thumbsdown" size={12} color="red" />{" "}
          {item.reactions.bs}
        </Text>
      </View>
      <View>
        <Text style={styles.cardPost}>{item.postData}</Text>
      </View>
      <View style={styles.cardInteractionContainer}>
        <View>
          <Pressable onPress={() => handleLike(item.id)}>
            <Text style={styles.thumbText}>
              <Octicons name="thumbsup" size={12} color="green" /> REAL
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => addComment(item.id)}>
            <Text style={styles.cardComments}>ADD COMMENT</Text>
          </Pressable>
          <Pressable onPress={() => viewComments(item.id)}>
            <Text style={styles.cardComments}>VIEW COMMENTS</Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => handleDislike(item.id)}>
            <Text style={styles.thumbText}>
              CALL BS <Octicons name="thumbsdown" size={12} color="red" />
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CardPost;

const styles = StyleSheet.create({
  cardRoot: {
    margin: 15,
    marginBottom: 30,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 6,
  },
  cardDate: {
    fontSize: 8,
    color: "#959695",
    marginBottom: 15,
  },
  cardAuthor: {
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 8,
  },
  cardReactionsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  cardReactions: {
    fontSize: 12,
    color: "#959695",
    marginBottom: 20,
  },
  cardPost: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  cardInteractionContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardComments: {
    textAlign: "center",
    margin: 12,
    fontSize: 10,
    color: "blue"
  },
  thumbText: {
    fontSize: 12,
    fontWeight: "600"
  }
});
