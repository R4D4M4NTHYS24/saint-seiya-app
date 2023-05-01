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
  const [showClearButton, setShowClearButton] = useState(false);

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    setShowClearButton(text.length > 0);
  };

  const handleClearSearchText = () => {
    setSearchText("");
    setShowClearButton(false);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar caballero..."
            onChangeText={handleSearchTextChange}
            value={searchText}
          />
          {showClearButton && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={handleClearSearchText}
            >
              <Image
                source={require("../assets/clear.svg")}
                style={styles.clearIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    position: "relative",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    height: 60,
    position: "fixed", // make the header position fixed
    top: 0, // position it at the top of the screen
    left: 0, // position it at the left of the screen
    right: 0, // position it at the right of the screen
    zIndex: 999, // make sure it's on top of everything else
    paddingHorizontal: 10,
  },
  logo: {
    width: 120,
    height: 40,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",

    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    outline: "none",
    borderWidth: 0,
    borderColor: "transparent",
  },
  clearButton: {
    padding: 10,
  },
  clearIcon: {
    width: 15,
    height: 15,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    marginBottom: 10,
    overflow: "hidden",
    marginVertical: 10,
    padding: 20,
  },
  cardContent: {
    padding: 20,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 500,
    marginVertical: 10,
  },
  nationality: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  country: {
    fontSize: 14,
    marginBottom: 5,
  },
  teacher: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  techniques: {
    fontSize: 14,
    marginBottom: 5,
  },
  weapon: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  personality: {
    fontSize: 14,
  },
});

export default HomeScreen;
