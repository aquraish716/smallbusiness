import React from 'react';
import Navigation from './components/Navigation'
import './App.css';
import Router from './Router'
import { Provider } from 'react-redux';
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
          <Router />
    </Provider>
  );
}

export default App;
