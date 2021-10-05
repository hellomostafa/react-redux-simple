import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCream/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <CakeContainer/>
      <HooksCakeContainer/>

      <IceCreamContainer/>
    </Provider>
  );
}

export default App;
