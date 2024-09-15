import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Simulated auth function - to be implemented later
// const checkAuth = async () => {
//   // Simulate an API call or check local storage
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(false), 1000);
//   });
// };

export default function RootLayout() {
  // const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Authentication check removed for now
        // const authStatus = await checkAuth();
        // setIsAuthenticated(authStatus);
      } catch (e) {
        console.warn(e);
      } finally {
        if (loaded) {
          await SplashScreen.hideAsync();
        }
      }
    }

    prepare();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack>
        {/* Always render for now, regardless of auth status */}
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        {/* Auth screen commented out for now */}
        {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
      </Stack>
  );
}