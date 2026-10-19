import { Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect, useRef } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { colors } from "../theme/colors";
import ScrollTopButton from "../components/ScrollTopButton";
const CHARACTERS_COUNT = 100;
const ScrollViewScreen = () => {
  const { characters, isLoading, errorMessage, retry } = useCharacters(CHARACTERS_COUNT);
  const scrollViewRef = useRef<ScrollView>(null);
  const handleScrollTopPress = () => {

  }
  return (
    <>
    <ScrollView>
      {characters.map((character) => (
        <Text key={character.id}>{character.name}</Text>
      ))}
    </ScrollView>
    <ScrollTopButton onPress={handleScrollTopPress} color={colors.blueStrong} />
    </>
  )
}

export default ScrollViewScreen;

