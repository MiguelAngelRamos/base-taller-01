import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { getCharactersByCount, type Character } from "../api/rickAndMorty";

const CHARACTERS_COUNT = 100;
const ScrollViewScreen = () => {

  const [characters, setCharacters] = useState<Character[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  useEffect(() => {
    // flag para evitar actualizar el estado si el componente se desmonta antes de que termine la petición
    let isActive = true;
    getCharactersByCount(CHARACTERS_COUNT).then((results) => {
      // Solo actualizamos el estado si el componente sigue montado
      if (isActive) setCharacters(results);
      
    }).catch((error: unknown) => {
      console.error(error);
      if (isActive) setErrorMessage("Error al cargar los personajes");
    });

    // funcion de limpieza que se ejecuta al desmontar el componente
    return () => {
      isActive = false;
    }
    },[]);
  return (
    <SafeAreaView>
      <Text>Scroll ejemplo</Text>
    </SafeAreaView>
  )
}

export default ScrollViewScreen;