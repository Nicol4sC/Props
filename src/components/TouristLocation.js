import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function TouristLocation({
  name,
  address,
  description,
  imageUrl,
}) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={{ fontSize: 50 }}>{name}</Text>
      <Text style={{ fontSize: 50 }}>{address}</Text>
      <Text style={{ fontSize: 50 }}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  image: {
    width: 500,
    height: 500,
    marginBottom: 20,
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
