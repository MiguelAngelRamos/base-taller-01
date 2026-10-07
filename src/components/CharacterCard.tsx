import { memo, useEffect } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import type { Character, CharacterStatus } from '../api/rickAndMorty';
import { mountCounter } from '../utils/mountCounter';

const STATUS_COLORS: Record<CharacterStatus, string> = {
  Alive: colors.mint,
  Dead: colors.pink,
  unknown: colors.lavender,
};

const STATUS_LABELS: Record<CharacterStatus, string> = {
  Alive: 'Vivo',
  Dead: 'Muerto',
  unknown: 'Desconocido',
};

// memo evita re-renderizar la tarjeta si sus props no cambian.
// Es una buena práctica sobre todo dentro de FlatList.
interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  // Registramos el montaje/desmontaje para el contador de la demo
  useEffect(() => {
    mountCounter.increment();
    return () => mountCounter.decrement();
  }, []);

  return (
    <View style={styles.card}>
      {/* expo-image guarda las imágenes en caché (memoria y disco),
          así no se descargan de nuevo al volver a una pantalla */}
      <Image
        source={character.image}
        style={styles.image}
        cachePolicy="memory-disk"
        transition={200}
      />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          #{character.id} · {character.name}
        </Text>
        <Text style={styles.detail} numberOfLines={1}>
          {character.species} · {character.location.name}
        </Text>
        <View
          style={[
            styles.badge,
            { backgroundColor: STATUS_COLORS[character.status] },
          ]}
        >
          <Text style={styles.badgeText}>
            {STATUS_LABELS[character.status]}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(CharacterCard);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.lavender,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    gap: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  detail: {
    fontSize: 13,
    color: colors.textSoft,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
    color: colors.text,
  },
});
