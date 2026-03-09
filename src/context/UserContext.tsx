import React, { createContext, useContext, useState, ReactNode } from 'react';

// ────────────────────────────────────────────────────────────────
// INTERFAZ DEL USUARIO (qué datos almacenamos)
// ────────────────────────────────────────────────────────────────
export interface User {
  name: string;          // Nombre completo (para mostrar "Bienvenido, señor [nombre]")
  email?: string;        // Correo (opcional)
  phone?: string;        // Teléfono (opcional)
  role: string;          // 'Usuario', 'Taller', 'Proveedor', 'Admin'
  token?: string;        // JWT del login (lo agregaremos después)
}

// ────────────────────────────────────────────────────────────────
// INTERFAZ DEL CONTEXTO (qué exponemos a las pantallas)
// ────────────────────────────────────────────────────────────────
// Aquí definimos exactamente qué propiedades y funciones tiene el contexto.
// Si agregamos setUser, debe estar aquí para que TypeScript lo reconozca.
interface UserContextType {
  user: User | null;                 // El usuario actual (null = no logueado)
  setUser: (user: User | null) => void; // Función para actualizar/guardar usuario
  logout: () => void;                // Función para cerrar sesión
}

// ────────────────────────────────────────────────────────────────
// CREACIÓN DEL CONTEXTO
// ────────────────────────────────────────────────────────────────
// Creamos el contexto con tipo undefined inicialmente (así forzamos chequeo)
const UserContext = createContext<UserContextType | undefined>(undefined);

// ────────────────────────────────────────────────────────────────
// PROVIDER: envuelve la app y provee el estado global
// ────────────────────────────────────────────────────────────────
// Este componente debe envolver <AppNavigator /> en App.tsx
export function UserProvider({ children }: { children: ReactNode }) {
  // Estado global del usuario (inicia en null = no logueado)
  const [user, setUserState] = useState<User | null>(null);

  // Función para actualizar el usuario (la que usamos en RegisterScreen)
  const setUser = (newUser: User | null) => {
    setUserState(newUser);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    // Más adelante: limpiar AsyncStorage, redirigir a login, etc.
  };

  // Proveemos el valor al contexto (user + setUser + logout)
  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// ────────────────────────────────────────────────────────────────
// HOOK PERSONALIZADO: useUser
// ────────────────────────────────────────────────────────────────
// Esto es lo que usas en cualquier pantalla:
// const { user, setUser } = useUser();
export function useUser() {
  const context = useContext(UserContext);
  
  // Seguridad: si alguien usa useUser fuera del Provider → lanza error
  if (context === undefined) {
    throw new Error('useUser debe usarse dentro de un UserProvider');
  }

  return context;
}