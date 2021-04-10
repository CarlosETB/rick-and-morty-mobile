import React from 'react';

// Native
import { StatusBar } from "react-native";

// Contexts
import { CharactersProvider } from "~/contexts/CharactersContext";

// Routes
import Routes from '~/routes'

// Locales
import "~/locales";

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