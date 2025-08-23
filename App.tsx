import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'; // Adjust the path as needed
import LoginScreen from './src/screens/LoginScreen';
import CreateTaskScreen from './src/screens/CreateTaskScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar  />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Hide header for Home as well
        />
         <Stack.Screen
          name="CreateTask"
          component={CreateTaskScreen}
          options={{ headerShown: false }} // Hide header for Home as well
        />
        {/* Add other screens here as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
