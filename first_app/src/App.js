import { Router } from './components/Router/Router';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from "redux-persist/integration/react"

const App = () => 
<Provider store = {store}>
    <PersistGate persistor={persistor}>
        <Router />
    </PersistGate>
</Provider>

export default App;
