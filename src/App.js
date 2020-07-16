import React from 'react';
import InputForm from './components/InputForm'
import { Provider } from 'react-redux'
import './app.css'
import { store } from './redux/store'
import UsersComponent from './components/UsersComponent'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <InputForm />
        <UsersComponent />
      </div>
    </Provider>

  );
}

export default App;
