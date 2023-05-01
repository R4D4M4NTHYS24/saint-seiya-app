import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const CharacterScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={character.imageDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 500,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  nationality: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  country: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  teacher: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  techniques: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  weapon: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  personality: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default CharacterScreen;
