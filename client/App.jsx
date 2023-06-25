import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <Text className="text-sky-500 text-3xl text-center">hi from App</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
