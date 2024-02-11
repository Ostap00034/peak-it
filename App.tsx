import {Button, Text, View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
        }}>
        Hello WOlrd
      </Text>
      <Button onPress={() => {
        
      }}>
        <Text>Go to second page</Text>
      </Button>
    </View>
  );
};

export default App;
