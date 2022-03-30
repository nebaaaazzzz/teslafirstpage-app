import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";
// import styles from "../CarItem/CarItemStyle";
function StyledBtn({ type, content }) {
  function onPressFunction() {
    console.log("hello");
  }
  const color = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textcolor = type != "primary" ? "#171A20CC" : "#FFFFFFA6";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.btn, { backgroundColor: color }]}
        onPress={onPressFunction}
      >
        <Text style={[styles.text, { color: textcolor }]}>{content}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { width: "100%", padding: 10 },
  btn: {
    height: 40,
    backgroundColor: "red",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
  },
  text: {
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "500",
  },
});
export default StyledBtn;
