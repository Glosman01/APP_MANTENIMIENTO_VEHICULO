import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { useUser } from '../context/UserContext'; // Contexto para guardar usuario

// ────────────────────────────────────────────────────────────────
// TIPADO DE RUTAS
// ────────────────────────────────────────────────────────────────
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  DashboardUsuario: undefined;
};

// ────────────────────────────────────────────────────────────────
// COMPONENTE: RegisterScreen
// ────────────────────────────────────────────────────────────────
export default function RegisterScreen({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState<string | null>(null);

  const { setUser } = useUser(); // ← obtenemos función para guardar usuario en contexto

  const handleRegister = () => {
    if (!nombre.trim() || !email.trim() || !telefono.trim() || !password.trim()) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }

    if (!rol) {
      Alert.alert('Error', 'Elige un rol');
      return;
    }

    // Guardar en contexto (simulación de registro)
    setUser({
      name: nombre,
      email,
      phone: telefono,
      role: rol,
    });

    Alert.alert('¡Registro exitoso!', `Rol: ${rol}`);

    // Redirección SOLO si es Usuario
    if (rol === 'Usuario') {
      navigation.navigate('DashboardUsuario');
    } else {
      Alert.alert('Pendiente', `Cuenta como ${rol} en revisión`);
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>

      <TextInput style={styles.input} placeholder="Nombre completo" value={nombre} onChangeText={setNombre} />
      <TextInput style={styles.input} placeholder="Correo electrónico" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Teléfono" value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />

      <Text style={styles.label}>Elige tu rol:</Text>

      <View style={styles.roleContainer}>
        <TouchableOpacity style={[styles.roleButton, rol === 'Usuario' && styles.roleButtonSelected]} onPress={() => setRol('Usuario')}>
          <Text style={styles.roleButtonText}>Usuario (Dueño de vehículo)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.roleButton, rol === 'Taller' && styles.roleButtonSelected]} onPress={() => setRol('Taller')}>
          <Text style={styles.roleButtonText}>Taller</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.roleButton, rol === 'Proveedor' && styles.roleButtonSelected]} onPress={() => setRol('Proveedor')}>
          <Text style={styles.roleButtonText}>Proveedor de piezas</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>¿Ya tienes cuenta? <Text style={styles.linkBold}>Inicia sesión</Text></Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
        <Text style={styles.backText}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32, paddingVertical: 40 },
  title: { color: 'white', fontSize: 40, fontWeight: 'bold', marginBottom: 32 },
  input: { width: '100%', backgroundColor: '#333', color: 'white', padding: 20, borderRadius: 12, marginBottom: 16, fontSize: 18 },
  label: { color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 24, marginBottom: 12, alignSelf: 'flex-start' },
  roleContainer: { width: '100%', marginBottom: 32 },
  roleButton: { backgroundColor: '#444', padding: 16, borderRadius: 12, marginBottom: 12, alignItems: 'center' },
  roleButtonSelected: { backgroundColor: '#f97316' },
  roleButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  registerButton: { backgroundColor: '#f97316', width: '100%', padding: 20, borderRadius: 12, marginBottom: 24 },
  buttonText: { color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  linkText: { color: '#60a5fa', fontSize: 18, textAlign: 'center', marginBottom: 16 },
  linkBold: { fontWeight: 'bold' },
  backButton: { marginTop: 16 },
  backText: { color: '#9ca3af', fontSize: 18 },
});