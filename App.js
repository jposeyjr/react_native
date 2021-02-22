import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={{ padding: 10 }}>
      <Text>Super Simple App</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder='Type here'
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text>
        {text
          .split(' ')
          .map((word) => word && 'null')
          .join(' ')}
      </Text>
    </View>
  );
}
