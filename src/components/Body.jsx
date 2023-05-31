import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Body = ({children, style}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1, ...style}}>
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
