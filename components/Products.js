import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
// import { products } from "./Database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const getProduct = async () => {
  try {
    const result = await fetch("https://fakestoreapi.com/products/").then(
      (response) => response.json()
    );
    return result;
  } catch (err) {
    console.log("Error:", err);
  }
};

// Function to add item to cart and save it in AsyncStorage
const addToCart = async (item) => {
  try {
    const jsonValue = await AsyncStorage.getItem("cart");
    let cart = jsonValue != null ? JSON.parse(jsonValue) : [];
    cart.push({ ...item, key: uuidv4() }); // Add a unique key to each item
    await AsyncStorage.setItem("cart", JSON.stringify(cart));
    console.log("Item added to cart");
  } catch (e) {
    console.error(e);
  }
};

export default function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct("products").then((data) => {
      setProduct(data);
    });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        // showsVerticalScrollIndicator={false}
        data={product}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Cards
              image={item.image}
              // icon={require("../assets/images/add_circle.png")}
              title={item.title}
              description={item.description}
              price={`$${item.price}`}
              addToCart={addToCart}
              product={item}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
    margin: 5,
  },
});
