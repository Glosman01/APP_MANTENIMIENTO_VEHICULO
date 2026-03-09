import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define el tipo para las rutas de navegación
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // ← tipado correcto

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80' }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // fondo oscuro semitransparente
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
      }}>
        <Text style={{
          color: '#ffffff',
          fontSize: 60,
          fontWeight: 'bold',
          letterSpacing: 8,
          marginBottom: 10,
        }}>
          VMAINT
        </Text>

        <Text style={{
          color: '#f97316', // naranja
          fontSize: 40,
          fontWeight: '900',
          textAlign: 'center',
          marginBottom: 20,
        }}>
          MANTENIMIENTO VEHICULAR
        </Text>

        <Text style={{
          color: '#ffffff',
          fontSize: 20,
          textAlign: 'center',
          marginBottom: 60,
        }}>
          Plataforma inteligente para propietarios, talleres y proveedores
        </Text>

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
          onPress={() => navigation.navigate('Login')}  // ← lleva a Login
        >
          <Text style={{
            color: '#ffffff',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
            Iniciar Sesión
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{
            backgroundColor: '#f97316',
            width: '100%',
            paddingVertical: 18,
            paddingHorizontal: 50,
            borderRadius: 12,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Register')}  // ← lleva a Registro
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