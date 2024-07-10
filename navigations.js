import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import AntDesign from "@expo/vector-icons/AntDesign";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  const { navigation } = props;

  const handleCloseDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity style={{ marginLeft: 10 }} onPress={handleCloseDrawer}>
        <AntDesign name="close" size={26} color="black" />
      </TouchableOpacity>
      <View
        style={{
          marginLeft: 5,
          marginVertical: 25,
          width: 150,
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "550" }}>Klenam Codes</Text>
        <View
          style={{
            borderBottomWidth: 1,
            width: 100,
            borderBottomColor: "orange",
          }}
        ></View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "orange",
        drawerLabelStyle: {
          fontSize: 18,
          fontWeight: "500",
          color: "black",
        },
        drawerItemStyle: {
          marginVertical: 10,
        },
      }}
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Store" component={HomeScreen} />
      <Drawer.Screen name="Locations" component={HomeScreen} />
      <Drawer.Screen name="Blog" component={HomeScreen} />
      <Drawer.Screen name="Jewelery" component={HomeScreen} />
      <Drawer.Screen name="Electronic" component={HomeScreen} />
      <Drawer.Screen name="Clothing" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={DrawerNavigator} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
