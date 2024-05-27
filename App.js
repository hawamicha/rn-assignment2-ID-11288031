import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.text}>My Name is <Text style={styles.name}>Hawa</Text> </Text> 
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    margin: 18,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '300',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  }

});
