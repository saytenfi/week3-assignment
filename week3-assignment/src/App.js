import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import NavComponent from './components/NavComponent';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Products from './components/Products';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavComponent />
        <Banner />
        <Products />
        {/* <Hero /> */}

        <Footer />
      </div>
    </Provider>
  );
}

export default App;
