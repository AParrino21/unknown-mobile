import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";
import { dummyData } from "../dummyData";
import { Octicons } from "@expo/vector-icons";
import CommentModal from "../components/CommentModal";
import { HomeProps, PostData } from "../types";

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [openViewComments, setOpenViewComments] =
    React.useState<boolean>(false);
  const [viewedComment, setViewedComment] = React.useState<PostData[]>([]);

  function addComment(id: string) {
    console.log(id);
  }

  function viewComments(id: string) {
    setOpenViewComments(true);
    const viewdCommentData = dummyData.filter((item) => item.id === id);
    setViewedComment(viewdCommentData);
  }

  function handleLike(id: string) {
    console.log(id);
  }

  function handleDislike(id: string) {
    console.log(id);
  }
  return (
    <View>
      <CommentModal
        openViewComments={openViewComments}
        setOpenViewComments={setOpenViewComments}
        viewedComment={viewedComment}
        setViewedComment={setViewedComment}
      />
      <View style={styles.homeTitleContainer}>
        <Text style={styles.homeTitle}>
          <Text style={styles.titleLetter}>B</Text>eyond{" "}
          <Text style={styles.titleLetter}>S</Text>ightings
        </Text>
        <Pressable onPress={() => navigation.navigate("Reveal")}>
          <Text style={styles.reavealBtn}>Reveal</Text>
        </Pressable>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={dummyData}
          renderItem={({ item }) => (
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
                    <Text style={styles.cardComments}>
                      VIEW COMMENTS (
                      <Text style={styles.numberOfComments}>
                        {item.comments.length}
                      </Text>
                      )
                    </Text>
                  </Pressable>
                </View>
                <View>
                  <Pressable onPress={() => handleDislike(item.id)}>
                    <Text style={styles.thumbText}>
                      BS <Octicons name="thumbsdown" size={12} color="red" />
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeTitleContainer: {
    marginTop: 70,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
    paddingTop: 12,
    paddingBottom: 15
  },
  homeTitle: {
    fontSize: 28,
    fontFamily: "AppleSDGothicNeo-UltraLight",
  },
  titleLetter: {
    fontWeight: "700",
    color: "#5c1cff",
  },
  reavealBtn: {
    textAlign: "center",
    fontWeight: "600",
    borderWidth: 1,
    width: 80,
    marginLeft: "auto",
    marginRight: 15,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#5c1cff",
    color: "white",
    overflow: "hidden",
    fontFamily: "AppleSDGothicNeo-UltraLight",
  },
  flatListContainer: {
    marginBottom: 280,
  },
  cardRoot: {
    margin: 15,
    marginTop: 5,
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
    fontFamily: "AppleSDGothicNeo-UltraLight",
    fontSize: 17,
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
    color: "blue",
  },
  numberOfComments: {
    color: "black",
    fontWeight: "800",
  },
  thumbText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
