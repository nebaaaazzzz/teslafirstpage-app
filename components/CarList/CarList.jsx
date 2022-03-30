import React from "react";
import { View, useWindowDimensions } from "react-native";
import { StyleSheet, FlatList } from "react-native";
import cars from "../../assets/cars";
import CarItem from "../CarItem/CarItem";
const CarList = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <FlatList
        style={{
          width: "100%",
          height: "100%",
        }}
        decelerationRate="normal"
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        data={cars}
        renderItem={(item, index, sep) => {
          return <CarItem car={item.item} />;
        }}
      />
    </View>
  );
};
export default CarList;
