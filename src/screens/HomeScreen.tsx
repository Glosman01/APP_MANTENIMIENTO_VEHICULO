// ────────────────────────────────────────────────────────────────
// IMPORTACIONES
// ────────────────────────────────────────────────────────────────
// Traemos los componentes básicos de React Native
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

// useNavigation: hook que nos da acceso a la navegación (para cambiar de pantalla)
// NavigationProp: tipo para tipar correctamente navigation (evita errores en TypeScript)
import { useNavigation, NavigationProp } from '@react-navigation/native';

// ────────────────────────────────────────────────────────────────
// TIPADO DE RUTAS (para TypeScript)
// ────────────────────────────────────────────────────────────────
// Define las pantallas a las que se puede navegar desde Home.
// Esto ayuda a TypeScript a validar que 'Login' y 'Register' existen.
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  DashboardUsuario: undefined;
};

// ────────────────────────────────────────────────────────────────
// COMPONENTE: HomeScreen
// ────────────────────────────────────────────────────────────────
// Pantalla de bienvenida (landing page).
// Muestra título grande, descripción y dos botones principales.
export default function HomeScreen() {
  // Hook de navegación: nos da acceso a cambiar de pantalla
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    // Fondo de imagen completo con efecto oscuro encima
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // overlay oscuro para legibilidad
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
      }}>
        {/* Título grande */}
        <Text style={{
          color: '#ffffff',
          fontSize: 60,
          fontWeight: 'bold',
          letterSpacing: 8,
          marginBottom: 10,
        }}>
          VMAINT
        </Text>

        {/* Subtítulo destacado */}
        <Text style={{
          color: '#f97316',
          fontSize: 40,
          fontWeight: '900',
          textAlign: 'center',
          marginBottom: 20,
        }}>
          MANTENIMIENTO VEHICULAR ELITE
        </Text>

        {/* Descripción */}
        <Text style={{
          color: '#ffffff',
          fontSize: 20,
          textAlign: 'center',
          marginBottom: 60,
        }}>
          La plataforma más avanzada para el mantenimiento vehicular inteligente
        </Text>

        {/* Botón Iniciar Sesión */}
        <TouchableOpacity 
          style={{
            backgroundColor: '#2563eb',
            width: '100%',
            paddingVertical: 18,
            paddingHorizontal: 50,
            borderRadius: 12,
            marginBottom: 20,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{
            color: '#ffffff',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
            Iniciar Sesión
          </Text>
        </TouchableOpacity>

        {/* Botón Registrarse */}
        <TouchableOpacity 
          style={{
            backgroundColor: '#f97316',
            width: '100%',
            paddingVertical: 18,
            paddingHorizontal: 50,
            borderRadius: 12,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={{
            color: '#ffffff',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
            Registrarse
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}