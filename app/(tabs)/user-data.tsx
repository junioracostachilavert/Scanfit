import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function UserDataScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de datos del usuario</Text>
      <Button title="Ir al escaneo" onPress={() => router.push('/scan')} />
    </View>
  );
}
