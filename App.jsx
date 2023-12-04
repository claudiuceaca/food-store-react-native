import { Provider } from 'react-redux';
import Navigation from './src/navigation/navigation';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
