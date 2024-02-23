import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// import from styles folder
import {Container} from "./styles/appStyles";

// components
import Home from './components/Home'

export default function App() {
  return (
    <Container>
      <Home />
      <StatusBar style="light" />
    </Container>
  );
};