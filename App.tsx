import AppNavigator from './src/navigation/AppNavigator';
import { UserProvider } from './src/context/UserContext'; // ← importa aquí

export default function App() {
  return (
    <UserProvider>           
      <AppNavigator />
    </UserProvider>
  );
}