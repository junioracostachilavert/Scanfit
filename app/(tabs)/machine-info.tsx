import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function MachineInfoScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Información de la máquina</Text>
      <Button title="Ver ejercicios" onPress={() => router.push('/exercises')} />
    </View>
  );
}
