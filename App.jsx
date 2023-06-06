import Navigation from './src/navigation/navigation';
import {store} from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
