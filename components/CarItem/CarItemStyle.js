import { StyleSheet } from "react-native-web";
const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
  },
  backimg: {
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
    height: "100%",
  },
  titles: {
    backgroundColor: "rgba(0,0,0,0)",
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    color: "#000",
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  btnscontainer: {
    width: "100%",
    position: "absolute",
    bottom: 10,
  },
});
export default styles;
