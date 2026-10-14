import { useState, useEffect} from "react";
import { View, Text, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getCharactersPage, type Character } from "../api/rickAndMorty";
import CharacterCard from "../components/CharacterCard";

const FlatListScreen = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    getCharactersPage(1).then(({ results }) => setCharacters(results)).catch(console.error);
  }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList
              data={characters}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <CharacterCard character={item} />}
              contentContainerStyle={{ padding: 16, gap: 20 }}
              ListEmptyComponent={<Text>Cargando...</Text>}
              />
        </SafeAreaView>
    )
}

export default FlatListScreen;