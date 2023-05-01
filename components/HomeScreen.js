import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
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
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>País: </Text>
                <Text style={styles.detail}>{character.country}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>Maestro: </Text>
                <Text style={styles.detail}>{character.teacher}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>Técnicas: </Text>
                <Text style={styles.detail}>
                  {character.techniques ? character.techniques.join(", ") : ""}
                </Text>
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>Personalidad: </Text>
                <Text style={styles.detail}>{character.personality}</Text>
              </View>
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#3B3B98",
    marginHorizontal: 10,
    borderRadius: 10,
  },
  logo: {
    width: 120,
    height: 40,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",

    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    height: "100%",
    paddingLeft: 10,
  },
  clearButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  clearIcon: {
    width: 20,
    height: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#F7DC6F",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  cardContent: {
    alignItems: "center",
    flexDirection: "column",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 500,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  title: {
    fontWeight: "bold",
  },
  detail: {
    flex: 1,
  },
});

export default HomeScreen;
