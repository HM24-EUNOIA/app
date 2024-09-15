import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Dashboard',
            title: 'Dashboard',
          }}
        />
        {/* <Drawer.Screen
          name="explore" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'overview',
          }}
        /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
}
