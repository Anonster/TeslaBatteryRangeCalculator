import React from 'react';
import Header from "./Components/Header/Header";
import './App.css';
import TeslaBattery from "./Components/TeslaBattery/TeslaBattery";
import { Provider } from 'react-redux'
import {store} from "./Reducers/Store";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Header />
              <TeslaBattery/>
          </div>
      </Provider>

  );
}

export default App;
