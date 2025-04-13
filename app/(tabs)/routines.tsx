import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function RoutinesScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Rutinas guardadas</Text>
      <Button title="Volver al inicio" onPress={() => router.push('/')} />
    </View>
  );
}
