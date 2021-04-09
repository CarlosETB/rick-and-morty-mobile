import React from 'react';

// Native
import { StatusBar } from "react-native";


import { CharactersProvider } from "~/contexts/characters";

// Routes
import Routes from '~/routes'

// Shared
import { colors } from '~/shared/colors'

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.transparent}
      />

      <CharactersProvider>
        <Routes />
      </CharactersProvider>
    </>
  )
}