import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';
import { NavigationProp } from '@react-navigation/native';

// ────────────────────────────────────────────────
// TIPOS DE NAVEGACIÓN
// ────────────────────────────────────────────────
// Definimos las rutas que existen en la app para que TypeScript sepa
// qué pantallas podemos navegar y qué parámetros esperan.
// Esto evita errores al usar navigation.navigate('Nombre')
type RootStackParamList = {
  Home: undefined;     // pantalla principal
  Login: undefined;    // pantalla de inicio de sesión
  // Aquí se agregarán más adelante: DashboardUsuario, DashboardTaller, etc.
};

// ────────────────────────────────────────────────
// COMPONENTE PRINCIPAL: RegisterScreen
// ────────────────────────────────────────────────
// Esta pantalla permite que un nuevo usuario se registre
// Recibe 'navigation' como prop (inyectado por React Navigation)
export default function RegisterScreen({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) {
  // ────────────────────────────────────────────────
  // ESTADOS (useState) - guardan lo que el usuario escribe
  // ────────────────────────────────────────────────
  const [nombre, setNombre] = useState('');           // Nombre completo
  const [email, setEmail] = useState('');             // Correo
  const [telefono, setTelefono] = useState('');       // Teléfono
  const [password, setPassword] = useState('');       // Contraseña
  const [rol, setRol] = useState<string | null>(null); // Rol seleccionado (Usuario, Taller, Proveedor)

  // ────────────────────────────────────────────────
  // FUNCIÓN PRINCIPAL: handleRegister
  // Se ejecuta cuando el usuario presiona "Registrarse"
  // ────────────────────────────────────────────────
  const handleRegister = () => {
    // 1. Validación básica: todos los campos obligatorios
    if (!nombre.trim() || !email.trim() || !telefono.trim() || !password.trim()) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    // 2. Validar que haya seleccionado un rol
    if (!rol) {
      Alert.alert('Error', 'Debes elegir un rol (Usuario, Taller o Proveedor)');
      return;
    }

    // 3. Simulación de registro exitoso (más adelante se reemplaza por llamada real al backend)
    Alert.alert(
      '¡Registro exitoso!',
      `Te registraste como ${rol}\n\n` +
      `Nombre: ${nombre}\n` +
      `Email: ${email}\n` +
      `Teléfono: ${telefono}`
    );

    // 4. Redirigir al login (o directamente al dashboard según rol en el futuro)
    navigation.navigate('Login');
  };

  // ────────────────────────────────────────────────
  // RENDERIZADO DE LA PANTALLA
  // ────────────────────────────────────────────────
  return (
    <View style={styles.container}>
      {/* Título principal */}
      <Text style={styles.title}>Registrarse</Text>

      {/* Campo Nombre */}
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        placeholderTextColor="#aaa"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Campo Email */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Campo Teléfono */}
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        placeholderTextColor="#aaa"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />

      {/* Campo Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Etiqueta para los botones de rol */}
      <Text style={styles.label}>Elige tu rol:</Text>

      {/* Contenedor de los 3 botones de rol */}
      <View style={styles.roleContainer}>
        {/* Botón Usuario */}
        <TouchableOpacity
          style={[
            styles.roleButton,
            rol === 'Usuario' && styles.roleButtonSelected,
          ]}
          onPress={() => setRol('Usuario')}
        >
          <Text style={styles.roleButtonText}>Dueño de vehículo</Text>
        </TouchableOpacity>

        {/* Botón Taller */}
        <TouchableOpacity
          style={[
            styles.roleButton,
            rol === 'Taller' && styles.roleButtonSelected,
          ]}
          onPress={() => setRol('Taller')}
        >
          <Text style={styles.roleButtonText}>Taller</Text>
        </TouchableOpacity>

        {/* Botón Proveedor */}
        <TouchableOpacity
          style={[
            styles.roleButton,
            rol === 'Proveedor' && styles.roleButtonSelected,
          ]}
          onPress={() => setRol('Proveedor')}
        >
          <Text style={styles.roleButtonText}>Proveedor de piezas</Text>
        </TouchableOpacity>
      </View>

      {/* Botón principal de registrarse */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      {/* Enlace para volver a login */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>
          ¿Ya tienes cuenta? <Text style={styles.linkBold}>Inicia sesión</Text>
        </Text>
      </TouchableOpacity>

      {/* Enlace para volver al inicio */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
        <Text style={styles.backText}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

// ────────────────────────────────────────────────
// ESTILOS (StyleSheet) - todos los estilos en un solo lugar
// ────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 40, // espacio extra arriba y abajo para que quepa todo
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 18,
  },
  label: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  roleContainer: {
    width: '100%',
    marginBottom: 32,
  },
  roleButton: {
    backgroundColor: '#444',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  roleButtonSelected: {
    backgroundColor: '#f97316', // naranja cuando está seleccionado
  },
  roleButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#f97316',
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
    marginBottom: 16,
  },
  linkBold: {
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 16,
  },
  backText: {
    color: '#9ca3af',
    fontSize: 18,
  },
});