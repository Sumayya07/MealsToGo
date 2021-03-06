import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { ThemeProvider } from 'styled-components/native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { theme } from './src/infrastructure/theme'

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { Navigation } from './src/infrastructure/navigation/index';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsksXAsuXLgeS5Tnd52gSvk4M2qfZqPQE",
  authDomain: "fooddeliveryapp-27826.firebaseapp.com",
  projectId: "fooddeliveryapp-27826",
  storageBucket: "fooddeliveryapp-27826.appspot.com",
  messagingSenderId: "502881454876",
  appId: "1:502881454876:web:2ff2f7a9fecb5784d9c8d9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}