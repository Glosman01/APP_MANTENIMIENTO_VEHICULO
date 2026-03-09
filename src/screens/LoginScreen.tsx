import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { NavigationProp } from '@react-navigation/native';

// Define el tipo para las rutas de navegación (ajusta según tus rutas reales)
type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  // Agrega más rutas cuando las tengas, ej: Dashboard: undefined;
};

// Tipa el prop navigation
export default function LoginScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Intentando login con:', { username, password });

    // Validación básica temporal
    if (!username || !password) {
      alert('Por favor completa usuario y contraseña');
      return;
    }

    // Simulación de login exitoso (más adelante lo reemplazamos por llamada real al backend)
    if (username === 'admin' && password === 'carcare') {
      alert('¡Login exitoso! (simulado)');
      navigation.navigate('Home'); // O a un dashboard según rol cuando lo agreguemos
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>
          ¿No tienes cuenta? <Text style={styles.linkBold}>Regístrate</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
        <Text style={styles.backText}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 48,
  },
  input: {
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#2563eb',
    width: '100%',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    color: '#60a5fa',
    fontSize: 18,
    textAlign: 'center',
  },
  linkBold: {
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 32,
  },
  backText: {
    color: '#9ca3af',
    fontSize: 18,
  },
});