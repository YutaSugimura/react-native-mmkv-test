/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {MMKV} from 'react-native-mmkv';
import {
  clearStorage,
  deleteStorage,
  getAllKeys,
  getStringStorage,
  setStorage,
} from './src/storage/common';

export const storage = new MMKV();

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [key, setKey] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const [readKey, setReadKey] = useState<string>('');
  const [readValue, setReadValue] = useState<string>('');

  const [allKeys, setAllKeys] = useState<string[]>([]);
  const [deleteTargetKey, setDeleteTargetKey] = useState<string>('');

  const set = () => {
    setStorage(storage, key, value);

    setKey('');
    setValue('');
  };

  const get = () => {
    const result = getStringStorage(storage, readKey);
    if (result) {
      setReadValue(result);
      setReadKey('');
    }
  };

  const getKeys = () => {
    const result = getAllKeys(storage);
    setAllKeys(result);
  };

  const deleteStore = () => {
    deleteStorage(storage, deleteTargetKey);
    getKeys();
  };

  const allClear = () => {
    clearStorage(storage);
    getKeys();
  };

  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView
        style={styles.flex1}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text>Set</Text>

          <TextInput
            style={styles.textInput}
            placeholder="storage key"
            value={key}
            onChangeText={setKey}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Enter data to be saved"
            value={value}
            onChangeText={setValue}
          />
          <Button title="Set VALUE" onPress={set} />
        </View>

        <View style={styles.container}>
          <Text>Get</Text>

          <TextInput
            style={styles.textInput}
            placeholder="storage key"
            value={readKey}
            onChangeText={setReadKey}
          />

          <Button title="Get VALUE" onPress={get} />
          <Text>Value:{readValue}</Text>
        </View>

        <View style={styles.container}>
          <Text>Get All Keys</Text>
          <Button title="GET" onPress={getKeys} />
          <Text>Keys: {JSON.stringify(allKeys)}</Text>
        </View>

        <View style={styles.container}>
          <Text>Delete</Text>

          <TextInput
            style={styles.textInput}
            placeholder="delete key"
            value={deleteTargetKey}
            onChangeText={setDeleteTargetKey}
          />
          <Button title="DELETE" onPress={deleteStore} />
        </View>

        <View style={styles.container}>
          <Button title="CLEAR STORAGE" onPress={allClear} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  textInput: {
    height: 40,
    width: 350,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 10,
  },
});
