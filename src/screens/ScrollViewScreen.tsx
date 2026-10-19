import { Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect, useRef } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { colors } from "../theme/colors";
import ScrollTopButton from "../components/ScrollTopButton";
import CharacterCard from "../components/CharacterCard";

const CHARACTERS_COUNT = 100;
const ScrollViewScreen = () => {
  const { characters, isLoading, errorMessage, retry } = useCharacters(CHARACTERS_COUNT);
  const scrollViewRef = useRef<ScrollView>(null);
  const handleScrollTopPress = () => {
    console.log("scrollToTop");
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }
  return (
    <>
    <ScrollView ref={scrollViewRef}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </ScrollView>
    <ScrollTopButton onPress={handleScrollTopPress} color={colors.blueStrong} />
    </>
  )
}

export default ScrollViewScreen;

