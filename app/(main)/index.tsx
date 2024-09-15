import { Text, View, Image } from 'react-native';


export default function App() {
    return (
        <View className="relative my-8 flex-row items-center">
  <Text className="text-main text-2xl font-bold">
    ♯┆
  </Text>
  <Text className="text-main text-2xl font-bold mx-2">
    Pendientes de hoy
  </Text>
  <Text className="text-main text-2xl font-bold">
    .ᐟ ★
  </Text>
  <Image 
    source={require('../../assets/images/title-cat-darker.png')} // Replace with your image path
    className="absolute top-0 right-0 w-8 h-8" // Adjust size and positioning as needed
  />
</View>

    );
}