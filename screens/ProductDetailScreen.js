import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ProductDetailScreen({ route }) {
  const { image, title, description, price } = route.params.product;

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <Header />
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: image }} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: "100% " }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // backgroundColor: "lightgray",
            }}
          >
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  position: "absolute",
                  bottom: 4,
                  right: 10,
                }}
                source={require("../assets/icons/Export.png")}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>{`$${price}`}</Text>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>MATERIALS</Text>
            <Text style={{ lineHeight: 20, fontWeight: "300" }}>
              We work with monitoring programs to ensure compliance with
              safety,health and quality standards for our products.
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              gap: 10,
              borderBottomWidth: 0.5,
              paddingBottom: 20,
            }}
          >
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Image source={require("../assets/icons/DoNotBleach.png")} />
              <Text>Do not use bleach</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Image source={require("../assets/icons/DoNotTumbleDry.png")} />
              <Text>Do not tumble dry</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Image source={require("../assets/icons/DoNotWash.png")} />
              <Text>Dry clean with tetrachloroethylene</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Image source={require("../assets/icons/DoNotBleach.png")} />
              <Text>Iron at a maximum of 100C/230F</Text>
            </View>
          </View>
          <View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Image source={require("../assets/icons/Shipping.png")} />
                <Text style={{ fontWeight: "500" }}>
                  Free Flat Rate Shipping
                </Text>
              </View>
              <View>
                <Image source={require("../assets/icons/Up.png")} />
              </View>
            </View>
            <View style={{ marginLeft: 33 }}>
              <Text style={{ fontWeight: "300" }}>
                Estimated to be delivered on
              </Text>
              <Text style={{ fontWeight: "300" }}>
                09/11/2021 - 12/11/2021.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "black",
          padding: 10,
          height: 65,
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <AntDesign name="plus" size={26} color="white" />
          <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
            ADD TO BASKET
          </Text>
        </View>
        <View>
          <AntDesign name="hearto" size={26} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    // backgroundColor: "lightblue",
    width: "100%",
    height: "40%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    overflow: "hidden",
    maxHeight: 20,
    lineHeight: 20,
    maxWidth: "80%",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    overflow: "hidden",
    maxHeight: 80,
    lineHeight: 20,
    fontWeight: "300",
  },
  price: {
    fontSize: 18,
    color: "orange",
    marginTop: 10,
    fontWeight: "500",
  },
});
