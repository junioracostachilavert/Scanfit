import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ScanScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escaneo de Máquina</Text>
      <Text style={styles.subtitle}>
        Apuntá la cámara hacia una máquina para identificarla
      </Text>

      <TouchableOpacity style={styles.scanButton} onPress={() => alert('Escaneo simulado')}>
        <Text style={styles.buttonText}>Iniciar escaneo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#38BDF8',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 30,
  },
  scanButton: {
    backgroundColor: '#E0F2FE',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    borderColor: '#BAE6FD',
    borderWidth: 1,
  },
  buttonText: {
    color: '#0EA5E9',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    marginTop: 20,
  },
  backText: {
    color: '#94A3B8',
    fontSize: 14,
  },
});
