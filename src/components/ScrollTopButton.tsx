import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';

// Botón flotante para volver arriba (muestra el uso de refs en las listas)
interface ScrollTopButtonProps {
  onPress: () => void;
  color: string;
}

const ScrollTopButton = ({ onPress, color }: ScrollTopButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color, opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <Text style={styles.text}>↑ Arriba</Text>
    </Pressable>
  );
};

export default ScrollTopButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 20,
    bottom: 32,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.card,
  },
  text: {
    fontWeight: '600',
    color: colors.text,
  },
});
