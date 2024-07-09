// navigations.js
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
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          marginLeft: 0,
          marginBottom: 25,
          width: 150,
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text style={{ fontSize: 19, fontWeight: "500" }}>Klenam Codes</Text>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
