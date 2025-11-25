import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Learn from "../pages/Learn";
import MultiCropping from "../pages/MultiCropping";
import Agroforestry from "../pages/Agroforestry";
import Market from "../pages/Market";
import Feedback from "../pages/Feedback";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Learn" component={Learn} />
      <Stack.Screen name="Multicropping" component={MultiCropping} />
      <Stack.Screen name="Agroforestry" component={Agroforestry} />
      <Stack.Screen name="Market" component={Market} />
      <Stack.Screen name="Feedback" component={Feedback} />
    </Stack.Navigator>
  );
}
