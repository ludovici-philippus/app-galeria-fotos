import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  return (
    <View style={{flex: 1}}>
        <StatusBar hidden />
        <WebView source={{uri: "http://10.0.0.103/projeto-galeria/"}}/>
    </View>
  );
}

const styles = StyleSheet.create({

});
