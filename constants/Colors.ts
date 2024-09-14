/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#dd1155';
const tintColorDark = '#ffee88';

export const Colors = {
  light: {
    text: '#aa1155',
    background: '#fff',
    tint: tintColorLight,
    icon: '#aa1155',
    tabIconDefault: '#880044',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#880044',
    tint: tintColorDark,
    icon: '#ffee88',
    tabIconDefault: '#ffee88',
    tabIconSelected: tintColorDark,
  },
};
