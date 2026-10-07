import { useSyncExternalStore } from 'react';

// Contador global de tarjetas montadas en memoria.
// Cada CharacterCard suma 1 al montarse y resta 1 al desmontarse.
// Así el estudiante VE la diferencia:
//   - ScrollView: monta TODAS las tarjetas aunque no estén en pantalla.
//   - FlatList: solo monta las cercanas a la pantalla (virtualización).
let count = 0;
const listeners = new Set<() => void>();

const emit = () => {
  listeners.forEach((listener) => listener());
};

export const mountCounter = {
  increment: () => {
    count += 1;
    emit();
  },
  decrement: () => {
    count -= 1;
    emit();
  },
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  get: () => count,
};

export const useMountedCount = () =>
  useSyncExternalStore(mountCounter.subscribe, mountCounter.get);
