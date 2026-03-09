// ────────────────────────────────────────────────────────────────
// IMPORTACIONES
// ────────────────────────────────────────────────────────────────
// NavigationContainer: componente raíz que envuelve toda la navegación
// createNativeStackNavigator: crea un stack de pantallas (transiciones de una a otra)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importamos todas las pantallas que existen en la app
import HomeScreen from '../screens/HomeScreen';           // Pantalla inicial / landing
import LoginScreen from '../screens/LoginScreen';         // Inicio de sesión
import RegisterScreen from '../screens/RegisterScreen';   // Registro con selección de rol
import DashboardUsuario from '../screens/DashboardUsuario'; // Dashboard para rol "Usuario"

// ────────────────────────────────────────────────────────────────
// CREACIÓN DEL STACK NAVIGATOR
// ────────────────────────────────────────────────────────────────
// Stack es el objeto que usamos para definir pantallas y transiciones
const Stack = createNativeStackNavigator();

// ────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL: AppNavigator
// ────────────────────────────────────────────────────────────────
// Este componente envuelve toda la app y define el orden/flujo de pantallas.
// initialRouteName="Home" → la app siempre inicia en la pantalla principal
// screenOptions={{ headerShown: false }} → quita la barra superior automática en todas las pantallas
export default function AppNavigator() {
  return (
    // NavigationContainer es obligatorio: maneja el estado de navegación global
    <NavigationContainer>
      {/* Stack.Navigator: pila de pantallas (como un stack de cartas) */}
      <Stack.Navigator 
        initialRouteName="Home"                     // Pantalla que se muestra al abrir la app
        screenOptions={{ headerShown: false }}      // Oculta la barra de título en todas las pantallas
      >
        {/* Pantalla principal (landing) */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />

        {/* Pantalla de inicio de sesión */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />

        {/* Pantalla de registro */}
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
        />

        {/* Dashboard personal para rol "Usuario" */}
        <Stack.Screen 
          name="DashboardUsuario" 
          component={DashboardUsuario} 
        />

        {/* Aquí se agregarán más adelante las demás pantallas */}
        {/* <Stack.Screen name="DashboardTaller" component={DashboardTaller} /> */}
        {/* <Stack.Screen name="DashboardProveedor" component={DashboardProveedor} /> */}
        {/* <Stack.Screen name="SolicitudServicio" component={SolicitudServicio} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}