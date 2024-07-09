// components/Header.js
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}
      >
        <Image source={require("../assets/images/Menu.png")} />
      </TouchableOpacity>
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/images/Logo2.png")}
        />
      </View>
      <View style={styles.left}>
        <TouchableOpacity>
          <AntDesign name="search1" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <MaterialCommunityIcons
            name="shopping-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    gap: 10,
  },
  logo: {
    width: 100,
    height: 60,
  },
});

export default Header;
