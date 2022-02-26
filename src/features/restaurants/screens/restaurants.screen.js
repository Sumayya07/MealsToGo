import React from "react";
import { Searchbar } from "react-native-paper";
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";


export const RestaurantsScreen = () => (
    <SafeAreaView style={styles.container}>
    <View style={styles.search}>
        <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfoCard />
    </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      marginTop: StatusBar.currentHeight
    },
    search: {
      padding: 16, 
      backgroundColor:"white"
    }, 
    list: {
      padding: 16,
      backgroundColor: "blue",
      flex: 1
    }
  });