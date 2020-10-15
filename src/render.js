import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';
import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

// addPost('Samurai.js.com');

export let reranderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
};
