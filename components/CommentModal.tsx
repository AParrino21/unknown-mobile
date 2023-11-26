import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { CommentModalProps } from "../types";
import { Ionicons } from "@expo/vector-icons";

const CommentModal: React.FC<CommentModalProps> = ({
  openViewComments,
  setOpenViewComments,
  viewedComment,
  setViewedComment,
}) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openViewComments}
        onRequestClose={() => {
          setOpenViewComments(!openViewComments);
          setViewedComment([]);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.commentHeader}>
              <Text style={styles.commentAuthorDate}>
                {viewedComment[0]?.date}
              </Text>
              <Text style={styles.postAuthor}>
                Comments for {viewedComment[0]?.author}'s Post({viewedComment[0]?.comments.length})
              </Text>
            </View>
            <>
              {viewedComment[0]?.comments.length === 0 ? (
                <View style={styles.noComments}>
                  <Text style={styles.noCommentsText}>No Comments</Text>
                </View>
              ) : (
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={viewedComment[0]?.comments}
                  renderItem={({ item }) => (
                    <View style={styles.commentContainer}>
                      <View>
                        <Text style={styles.commentData}>
                          {item.commentData}
                        </Text>
                      </View>
                      <View style={styles.commentFooter}>
                        <Text style={styles.commentFooterText}>
                          <Ionicons
                            name="ios-heart-outline"
                            size={14}
                            color="red"
                          />
                          {item.commentReactions}
                        </Text>
                        <Text
                          style={[
                            styles.commentFooterText,
                            styles.commentFooterAuthorText,
                          ]}
                        >
                          {item.commentAuthor}
                        </Text>
                        <Text style={styles.commentFooterText}>
                          {item.commentDate}
                        </Text>
                      </View>
                    </View>
                  )}
                />
              )}
            </>
            <Pressable onPress={() => setOpenViewComments(!openViewComments)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CommentModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 80,
    elevation: 5,
    width: "90%",
    height: 500,
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
    color: "blue",
    padding: 8,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  noComments: {
    marginBottom: 150
  },
  noCommentsText: {
    fontWeight: "600",
    marginTop: 100,
    marginBottom: 50
  },
  commentHeader: {
    marginBottom: 15,
    borderBottomColor: "#959695",
    borderBottomWidth: 1,
    width: "100%",
  },
  postAuthor: {
    fontWeight: "600",
    marginBottom: 8,
  },
  commentContainer: {
    padding: 25,
    marginTop: 8,
    marginBottom: 30,
    shadowColor: "#535454",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  commentAuthorDate: {
    fontSize: 8,
    color: "#959695",
    marginBottom: 5,
  },
  commentData: {
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 60,
  },
  commentFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commentFooterText: {
    fontSize: 9,
    color: "#959695",
  },
  commentFooterAuthorText: {
    fontWeight: "600",
    color: "#000",
  },
});
