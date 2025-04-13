import { Image } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanfit</Text>
      <Image source={require('@/assets/images/logo.png')}
      style={styles.logo}/>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/scan')}>
        <Text style={styles.buttonText}>Escanear máquina</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/routines')}>
        <Text style={styles.buttonText}>Ver rutinas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/user-data')}>
        <Text style={styles.buttonText}>Mi perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#0c7e7e',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#334155',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#E0F2FE',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 16,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BAE6FD',
  },
  buttonText: {
    color: '#0EA5E9',
    fontSize: 16,
    fontWeight: '600',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },  
});
