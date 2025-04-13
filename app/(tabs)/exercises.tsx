import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ExercisesScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ejercicios posibles</Text>
      <Button title="Ver rutina guardada" onPress={() => router.push('/routines')} />
    </View>
  );
}
