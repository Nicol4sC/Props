import React from "react";
import { View } from "react-native";
import TouristLocation from "./src/components/TouristLocation";

export default function App() {
  const texts = ["Nome: Summoner's rift", "Endereço: Runeterra", "Descrição"];
  const imageUrl =
    "https://s2-techtudo.glbimg.com/FvVp6C8s9wmFWC2YwdO096XlUXM=/0x0:2400x1708/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/K/y/nj1EsBR0ANgvEBN9BWvA/summoners-rift-update-map.png";

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
      <TouristLocation name="Summoner's rift" />
      <TouristLocation address="Runeterra" />
      <TouristLocation description="Summoner's rift" />
    </View>
  );
}
