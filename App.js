import React from "react";
import { View } from "react-native";
import TouristLocation from "./src/components/TouristLocation";

export default function App() {
  const texts = ["Nome: Summoner's rift", "Endereço: Runeterra", "Descrição"];
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Authentic_Viking_recreation.jpg/300px-Authentic_Viking_recreation.jpg";

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: "100%",
      }}
    >
      <TouristLocation imageUrl={imageUrl} />
      <TouristLocation name="Vinlandia" />
      <TouristLocation address="Costa do Nordeste do Canadá" />
      <TouristLocation description="Vinlândia foi o nome dado pelos nórdicos a uma região indeterminada da costa do Nordeste do Canadá, durante a Era Viking e a Idade Média" />
    </View>
  );
}
