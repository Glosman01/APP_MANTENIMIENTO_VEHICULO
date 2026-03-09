import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useUser } from '../context/UserContext'; // ← trae el nombre del usuario registrado
import { useNavigation } from '@react-navigation/native';

// ────────────────────────────────────────────────────────────────
// COMPONENTE: DashboardUsuario
// ────────────────────────────────────────────────────────────────
// Dashboard principal para el rol "Usuario" (dueño de vehículo).
// Muestra saludo con nombre real, vehículo principal y acciones rápidas.
export default function DashboardUsuario() {
  const { user } = useUser(); // ← obtenemos el usuario del contexto
  const navigation = useNavigation();

  // Nombre del usuario (si no hay → fallback)
  const userName = user?.name || 'Usuario';

  // Datos simulados del vehículo (más adelante del backend)
  const vehicle = {
    brand: "Toyota",
    model: "Corolla",
    year: "2018",
    plate: "ABC-123",
    mileage: 82450,
    maxMileage: 100000,
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header con saludo personalizado */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Buen día</Text>
          <Text style={styles.welcome}>Bienvenido, señor {userName}</Text> {/* ← nombre dinámico */}
        </View>
        <TouchableOpacity style={styles.notification}>
          <Text style={styles.notificationText}>🔔 1</Text>
        </TouchableOpacity>
      </View>

      {/* Tarjeta vehículo */}
      <View style={styles.vehicleCard}>
        <View style={styles.vehicleInfo}>
          <Text style={styles.vehicleTitle}>
            {vehicle.brand} {vehicle.model} {vehicle.year}
          </Text>
          <Text style={styles.vehiclePlate}>{vehicle.plate}</Text>

          <View style={styles.mileageContainer}>
            <Text style={styles.mileageLabel}>Kilometraje:</Text>
            <View style={styles.progressBarBackground}>
              <View 
                style={[
                  styles.progressBarFill,
                  { width: `${(vehicle.mileage / vehicle.maxMileage) * 100}%` }
                ]} 
              />
            </View>
            <Text style={styles.mileageValue}>
              {vehicle.mileage.toLocaleString()} km
            </Text>
          </View>

          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateButtonText}>+ Actualizar kilometraje</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8' }}
          style={styles.vehicleImage}
          resizeMode="contain"
        />
      </View>

      {/* Grid de acciones rápidas */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>🛠️</Text>
          <Text style={styles.gridLabel}>Mantenimiento Preventivo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>🔧</Text>
          <Text style={styles.gridLabel}>Mantenimiento Correctivo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>📋</Text>
          <Text style={styles.gridLabel}>Alistamiento Técnico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>🔋</Text>
          <Text style={styles.gridLabel}>Batería</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>🛞</Text>
          <Text style={styles.gridLabel}>Llantas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>🛢️</Text>
          <Text style={styles.gridLabel}>Cambio de Aceite</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>🚐</Text>
          <Text style={styles.gridLabel}>Tecnomecánica</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>📄</Text>
          <Text style={styles.gridLabel}>SOAT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>🛡️</Text>
          <Text style={styles.gridLabel}>Seguro</Text>
        </TouchableOpacity>
      </View>

      {/* Botón grande inferior */}
      <TouchableOpacity style={styles.serviceButton}>
        <Text style={styles.serviceButtonText}>SOLICITAR SERVICIO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4f6' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#e5e7eb' },
  greeting: { fontSize: 16, color: '#6b7280' },
  welcome: { fontSize: 22, fontWeight: 'bold', color: '#111827' },
  notification: { backgroundColor: '#ef4444', width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  notificationText: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  vehicleCard: { backgroundColor: 'white', margin: 20, borderRadius: 16, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  vehicleInfo: { flex: 1 },
  vehicleTitle: { fontSize: 22, fontWeight: 'bold', color: '#111827' },
  vehiclePlate: { fontSize: 16, color: '#6b7280', marginBottom: 12 },
  mileageContainer: { marginBottom: 12 },
  mileageLabel: { fontSize: 14, color: '#6b7280', marginBottom: 4 },
  progressBarBackground: { height: 8, backgroundColor: '#e5e7eb', borderRadius: 4, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#f97316' },
  mileageValue: { fontSize: 16, fontWeight: 'bold', color: '#111827', marginTop: 4 },
  updateButton: { backgroundColor: '#f97316', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8, alignSelf: 'flex-start' },
  updateButtonText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  vehicleImage: { width: 120, height: 80, marginLeft: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, justifyContent: 'space-between' },
  gridItem: { width: '30%', backgroundColor: 'white', borderRadius: 16, padding: 16, marginBottom: 20, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  gridIcon: { fontSize: 32, marginBottom: 8 },
  gridLabel: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#111827' },
  serviceButton: { backgroundColor: '#f97316', margin: 20, paddingVertical: 20, borderRadius: 16, alignItems: 'center' },
  serviceButtonText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
});