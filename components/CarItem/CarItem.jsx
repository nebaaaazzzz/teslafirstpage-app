import { StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { View, ImageBackground, Text } from "react-native";
import StyledBtn from "../StylesBtn/StyledBtn";
function CarItem({ car }) {
  const { height, width } = useWindowDimensions();
  const { name, image, tagline, taglineCTA } = car;
  return (
    <View style={{ width: "100%", height }}>
      <ImageBackground
        source={image}
        style={{
          width: "100%",
          resizeMode: "cover",
          position: "absolute",
          height: "100%",
        }}
      />
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0)",
          alignItems: "center",
          marginTop: "30%",
        }}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 40,
            fontWeight: "500",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#5c5e62",
          }}
        >
          {tagline}{" "}
          <Text style={{ textDecorationLine: "underline" }}>{taglineCTA}</Text>
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 50,
        }}
      >
        <StyledBtn type="primary" content="hello" />
        <StyledBtn type="secondary" content="world" />
      </View>
    </View>
  );
}

export default CarItem;
