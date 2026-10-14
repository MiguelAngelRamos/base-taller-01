// API pública de Rick and Morty: gratis y sin registro.
// Docs: https://rickandmortyapi.com/documentation
export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';

// Solo tipamos los campos que usamos en la app
export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  image: string;
  location: { name: string; url: string };
}

interface PageResponse {
  info: { count: number; pages: number; next: string | null; prev: string | null };
  results: Character[];
}

const BASE_URL = 'https://rickandmortyapi.com/api/character';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// La API limita las peticiones muy seguidas (error 429).
// Si pasa, esperamos un momento y reintentamos (hasta 3 intentos).
const fetchWithRetry = async (url: string, attempts = 3): Promise<Response> => {
  const response = await fetch(url);
  if (response.status === 429 && attempts > 1) {
    await wait(1500);
    return fetchWithRetry(url, attempts - 1);
  }
  return response;
};

export const TOTAL_CHARACTERS = 826;

// Trae UNA página (20 personajes). Ideal para FlatList con scroll infinito.
export const getCharactersPage = async (
  page: number
): Promise<{ results: Character[]; hasMore: boolean }> => {
  const response = await fetchWithRetry(`${BASE_URL}?page=${page}`);
  if (!response.ok) {
    throw new Error(`Error ${response.status} al cargar la página ${page}`);
  }
  const json: PageResponse = await response.json();
  return {
    results: json.results,
    hasMore: json.info.next !== null,
  };
};

// Trae los primeros `count` personajes DE UNA SOLA VEZ.
// Lo usamos en ScrollView, que necesita todos los datos para renderizar.
export const getCharactersByCount = async (count: number): Promise<Character[]> => {
  const ids = Array.from({ length: count }, (_, i) => i + 1).join(','); 
  const response = await fetchWithRetry(`${BASE_URL}/${ids}`);
  if (!response.ok) {
    throw new Error(`Error ${response.status} al cargar ${count} personajes`);
  }
  const json: Character | Character[] = await response.json();
  // Si se pide un solo id, la API devuelve un objeto en vez de un arreglo
  return Array.isArray(json) ? json : [json];
};
