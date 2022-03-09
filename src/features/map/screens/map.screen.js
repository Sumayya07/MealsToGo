import React, { useState, useContext, useEffect } from 'react';
import MapView from 'react-native-maps'
import styled from 'styled-components/native'
import { Search } from '../components/search.component'

// Map Screen
const Map = styled(MapView)`
    height: 100%
    width: 100%
`;

export const MapScreen = () => {
    return (
        <>
        <Search />
        <Map />
        </>
        
    )
}