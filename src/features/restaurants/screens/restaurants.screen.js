import React from "react";
import styled from "styled-components/native"
import { Searchbar } from "react-native-paper";
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component"


const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
   padding: 16px;
   background-color: white;
`;

const RestaurantListContainer = styled.View`
    flex: 1;
    padding: 16px;
    background-color: white;
`;


export const RestaurantsScreen = () => (
    <SafeArea>
    <SearchContainer>
        <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
    </SafeArea>
)
