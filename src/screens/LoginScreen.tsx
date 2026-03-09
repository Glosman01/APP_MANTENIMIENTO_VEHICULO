import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';
import { NavigationProp } from '@react-navigation/native';

// ────────────────────────────────────────────────────────────────
// TIPADO DE RUTAS
// ────────────────────────────────────────────────────────────────
type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  DashboardUsuario: undefined;
};

// ────────────────────────────────────────────────────────────────
// COMPONENTE: LoginScreen
// ────────────────────────────────────────────────────────────────
// Pantalla de inicio de sesión.
// Por ahora simula login con usuario/contraseña "admin" / "carcare".
export default function LoginScreen({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Completa usuario y contraseña');
      return;
    }

    // Simulación temporal (más adelante → llamada real al backend)
    if (username === 'admin' && password === 'carcare') {
      Alert.alert('¡Éxito!', 'Login simulado correcto');
      navigation.navigate('DashboardUsuario'); // ← redirige al dashboard de usuario
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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