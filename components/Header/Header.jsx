import React from "react";
import { View, Image } from "react-native";
function Header() {
  return (
    <View
      style={{
        position: "absolute",
        top: 50,
        zIndex: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <Image
        style={{ width: 100, height: 20, resizeMode: "contain" }}
        source={require("./../../assets/tesla/teslalogo.jpeg")}
      />
      <Image
        style={{ width: 25, height: 25 }}
        source={require("./../../assets/tesla/menu.png")}
      />
    </View>
  );
}

export default Header;
