import { useState, useEffect } from "react";
import { getCharactersByCount, type Character } from "../api/rickAndMorty";

export const useCharacters = (count: number) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  // Valor booleano que indica que la peticion http esta en curso
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // Contador para intentos de carga
  const [loadAttempt, setLoadAttempt] = useState(0);

   useEffect(() => {
    // flag para evitar actualizar el estado si el componente se desmonta antes de que termine la petición
    let isActive = true;
    getCharactersByCount(count).then((results) => {
      // Solo actualizamos el estado si el componente sigue montado
      if (isActive) setCharacters(results);
      
    }).catch((error: unknown) => {
      console.error(error); // depuracion en consola
      // informacion al usuario
      if (isActive) setErrorMessage("Error al cargar los personajes");
    }).finally(() => {
      if (isActive) setIsLoading(false);
    });

    return () => {
      isActive = false;
    }

  }, [count, loadAttempt]);

  const retry = () => {
    setErrorMessage(null);
    setIsLoading(true);
    setLoadAttempt((previousAttempt) => previousAttempt + 1);
  }
  return { characters, isLoading, errorMessage, retry };
}