import React from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routers from './routes/Routers';
import Store from './store';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Routers />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
