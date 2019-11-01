import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';

export const IconProvider = (iconPack, name) => ({
  toReactElement: (props) => FeatherIcon({ iconPack, name, ...props })
});

export const FeatherIcon = ({ iconPack, name, style }) => {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  const Icon = iconPack === 'feather' ? Feather : FontAwesome5;
  return (
    <Icon
      name={name}
      size={height}
      color={tintColor}
      style={iconStyle}
    />
  );
}

export const createIconsMap = (iconPack) => (
  new Proxy({}, {
    get(target, name) {
      return IconProvider(iconPack, name);
    },
  })
);

export const FeatherIconsPack = {
  name: 'feather',
  icons: createIconsMap('feather'),
}

export const FontAwesome5IconsPack = {
  name: 'fontAwesome5',
  icons: createIconsMap('fontAwesome5'),
}