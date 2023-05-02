import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const CharacterScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.cardContent}>
          <Image style={styles.image} source={character.imageDetails} />
          <Text style={styles.description}>{character.description}</Text>
          <Image style={styles.imageArmor} source={character.imageArmor} />
          <Text style={styles.description}>{character.armorDescription}</Text>
        </View>
      </ScrollView>
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

  imageArmor: {
    width: 400,
    height: 400,
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
  cardContent: {
    alignItems: "center",
    flexDirection: "column",
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
  description: {
    margin: 10,
    padding: 10,
    fontSize: 18,
    lineHeight: 24,
    color: "#444444",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "justify",
    textShadowColor: "#CCCCCC",
  },
  personality: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default CharacterScreen;
