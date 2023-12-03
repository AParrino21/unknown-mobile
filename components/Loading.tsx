import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LoadingProps } from "../types";

const Loading: React.FC<LoadingProps> = ({ message }) => {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    fontWeight: "600",
    padding: 20
  }
});
