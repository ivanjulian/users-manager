import React from 'react';
import { store } from './redux/store'
import InputForm from './components/InputForm'
import { Provider } from 'react-redux'
import UsersComponent from './components/UsersComponent'
import './app.css'

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
