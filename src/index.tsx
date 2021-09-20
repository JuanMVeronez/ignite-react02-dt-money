import React from 'react';
import ReactDOM from 'react-dom';

import { createServer } from 'miragejs';

import { App } from './App';


createServer({
  routes() {
    //nome inicial que vai ser procurado para as rotas (sendo assim será localhost:3000/api)
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [ 
        {
          id: 1,
          title: 'Transaction 1'
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);