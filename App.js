import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';

import AppNavigator from './src/pages/AppNavigator';
import { FeatherIconsPack, FontAwesome5IconsPack } from './src/util/IconPack';
import { backgroundColor } from './src/util/constants';

const App = () => (
  <>
    <StatusBar backgroundColor={backgroundColor} barStyle="dark-content" />
    <SafeAreaView style={{ flex: 1 }}>
      <IconRegistry icons={[FeatherIconsPack, FontAwesome5IconsPack]} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <AppNavigator />
      </ApplicationProvider>
    </SafeAreaView>
  </>
);

export default App;
