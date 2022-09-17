import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
const store = createStore(reducers);
root.render(<Provider store={store}><App/></Provider>);