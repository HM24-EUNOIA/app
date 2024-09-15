import { Text } from 'react-native';

export default function Titulo({ label }:any) {
    return (
        <Text className="text-main text-2xl my-6 font-bold">{label}</Text>
    );
}