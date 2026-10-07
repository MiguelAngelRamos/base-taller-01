import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { useMountedCount } from '../utils/mountCounter';

// Muestra cuántos datos hay cargados vs cuántas tarjetas existen en memoria.
interface StatsBannerProps {
  loaded: number;
  color: string;
}

const StatsBanner = ({ loaded, color }: StatsBannerProps) => {
  const mounted = useMountedCount();

  return (
    <View style={[styles.banner, { backgroundColor: color }]}>
      <Stat label="Datos cargados" value={loaded} />
      <View style={styles.divider} />
      <Stat label="Tarjetas montadas" value={mounted} />
    </View>
  );
};

export default StatsBanner;

const Stat = ({ label, value }: { label: string; value: number }) => {
  return (
    <View style={styles.stat}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 16,
    paddingVertical: 10,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: colors.card,
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  label: {
    fontSize: 12,
    color: colors.textSoft,
  },
});
