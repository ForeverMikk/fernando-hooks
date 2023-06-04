// import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';
// import { Padre } from './07-tarea-memo/Padre';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <CallbackHook />
    // <Padre />
    <TodoApp />
  // </React.StrictMode>,
);
