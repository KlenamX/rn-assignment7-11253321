import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Cards({
  image,
  title,
  description,
  price,
  addToCart,
  product,
  removeFromCart,
  cartView, // New prop to indicate cart view
}) {
  const navigation = useNavigation();

  const [isAdding, setIsAdding] = useState(false);
  const [showMessage, setShowMessage] = useState(false); // State for showing message

  const handleAddToCart = async () => {
    setIsAdding(true);
    await addToCart(product);
    setIsAdding(false);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };
  return (
    <View style={[styles.container, cartView && styles.rowContainer]}>
      <View
        style={[styles.imageContainer, cartView && styles.rowImageContainer]}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProductDetail", { product });
          }}
        >
          <Image style={styles.image} source={{ uri: image }} />
        </TouchableOpacity>
        {addToCart && (
          <TouchableOpacity onPress={handleAddToCart} disabled={isAdding}>
            <MaterialIcons
              style={styles.icon}
              name="add-circle-outline"
              size={26}
              color="orange"
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.info, cartView && styles.rowInfo]}>
        {cartView && (
          <TouchableOpacity onPress={removeFromCart} style={styles.removeIcon}>
            <MaterialIcons name="highlight-remove" size={28} color="red" />
            {/* <Text style={styles.removeButtonText}>Remove</Text>
            <Text style={styles.removeButtonText}>Remove</Text> */}
          </TouchableOpacity>
        )}
        <Text style={[styles.title, cartView && styles.cartTitle]}>
          {title}
        </Text>
        <Text style={[styles.description, cartView && styles.cartDescription]}>
          {description}
        </Text>
        <Text style={[styles.price, cartView && styles.cartPrice]}>
          {price}
        </Text>
      </View>
      {showMessage && (
        <Text style={styles.addToCartMessage}>Item added to cart!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 165,
    position: "relative",
    // backgroundColor: "lightblue",
    maxHeight: 360,
  },
  rowContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    height: 220,
    width: 165,
  },
  rowImageContainer: {
    height: 210,
    width: 155,
  },
  image: {
    height: 190,
    width: 150,
    resizeMode: "contain",
  },
  icon: {
    position: "absolute",
    right: 6,
    bottom: 6,
  },
  removeIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  info: {
    marginTop: 15,
  },
  rowInfo: {
    justifyContent: "center",
    marginLeft: 10,
    gap: 5,
    width: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    overflow: "hidden",
    maxHeight: 40,
    lineHeight: 20,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: "bold",
    overflow: "hidden",
    maxHeight: 40,
    lineHeight: 22,
  },
  description: {
    fontSize: 13,
    fontWeight: "400",
    overflow: "hidden",
    maxHeight: 40,
    lineHeight: 18,
  },
  cartDescription: {
    fontSize: 13,
    fontWeight: "400",
    overflow: "hidden",
    maxHeight: 40,
    lineHeight: 18,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    color: "orange",
    overflow: "hidden",
    maxHeight: 40,
    lineHeight: 22,
  },
  cartPrice: {
    fontSize: 24,
    fontWeight: "600",
    color: "orange",
    overflow: "hidden",
    maxHeight: 40,
    lineHeight: 24,
  },
  addToCartMessage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    backgroundColor: "orange",
    color: "white",
    padding: 5,
    borderRadius: 5,
  },
});
