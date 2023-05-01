import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import characters from "../data/data.js";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {characters.map((character) => (
        <TouchableOpacity
          key={character.id}
          style={styles.card}
          onPress={() => navigation.navigate("Character", { character })}
        >
          <View style={styles.cardContent}>
            <Text style={styles.name}>{character.name}</Text>
            <Image source={character.imageMain} style={styles.image} />

            <Text style={styles.title}>Pais: </Text>
            <Text style={styles.country}>{character.country}</Text>
            <Text style={styles.title}>Maestro: </Text>
            <Text style={styles.teacher}>{character.teacher}</Text>
            <Text style={styles.title}>Tecnicas: </Text>

            <Text style={styles.techniques}>
              {character.techniques &&
                character.techniques.map((technique, index) => (
                  <React.Fragment key={index}>
                    <Text>{technique}</Text>
                    <br />
                  </React.Fragment>
                ))}
            </Text>

            <Text style={styles.title}>Arma Libra: </Text>
            <Text style={styles.weapon}>{character.weapon}</Text>
            <Text style={styles.title}>Personalidad: </Text>
            <Text style={styles.personality}>{character.personality}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  card: {
    flex: 1,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden",
  },
  cardContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },

  techniques: {
    textAlign: "center",
  },

  image: {
    width: 300,
    height: 500,
  },
});

export default HomeScreen;
