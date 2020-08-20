/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';
import {store, persistor} from './src/app/store';
import {TodoNavigator} from './src/app/navigation';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <TodoNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
