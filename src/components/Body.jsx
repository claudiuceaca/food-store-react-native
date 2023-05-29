import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Body = ({children}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        hidden={false}
        translucent={true}
      />
      {children}
    </SafeAreaView>
  );
};

export default Body;
