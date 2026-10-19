import { Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { useCharacters } from "../hooks/useCharacters";

const CHARACTERS_COUNT = 100;
const ScrollViewScreen = () => {
  const { characters, isLoading, errorMessage, retry } = useCharacters(CHARACTERS_COUNT);
  return (
    <>
    <ScrollView>
      {characters.map((character) => (
        <Text key={character.id}>{character.name}</Text>
      ))}
    </ScrollView>
    <Pressable>
      <Text>HACER CLICK PARA REINTENTAR</Text>
    </Pressable>
    </>
  )
}

export default ScrollViewScreen;