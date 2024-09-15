import { Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({ style, type = 'default', ...rest }: ThemedTextProps) {
  const fontSize = {
    default: 16,
    title: 32,
    defaultSemiBold: 16,
    subtitle: 20,
    link: 16,
  };

  const textStyle = { fontSize: fontSize[type] || fontSize.default };

  return (
    <Text style={[style, textStyle]} {...rest} />
  );
}