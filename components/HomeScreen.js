import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import characters from "../data/data.js";

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar personaje..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>

      {filteredCharacters.map((character) => (
        <TouchableOpacity
          key={character.id}
          style={styles.card}
          onPress={() => navigation.navigate("Character", { character })}
        >
          <View style={styles.cardContent}>
            <Text style={styles.name}>{character.name}</Text>
            <Image source={character.imageMain} style={styles.image} />

            <Text style={styles.nationality}>{character.nationality}</Text>
            <Text style={styles.country}>{character.country}</Text>
            <Text style={styles.teacher}>{character.teacher}</Text>
            <Text style={styles.techniques}>
              {character.techniques ? character.techniques.join(", ") : ""}
            </Text>
            <Text style={styles.weapon}>{character.weapon}</Text>
            <Text style={styles.personality}>{character.personality}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  image: {
    width: 300,
    height: 500,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    paddingVertical: 5,
  },
});

export default HomeScreen;
