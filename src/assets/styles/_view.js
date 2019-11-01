import { StyleSheet } from 'react-native';

export const _view = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    maxWidth: '100%',
    flexBasis: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
  },
  col: {
    padding: 15,
    flex: 1,
    backgroundColor: 'transparent',
  },
})