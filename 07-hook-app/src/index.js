import React from 'react';
import ReactDOM from 'react-dom';

//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
//import { RealExample } from './components/04-useRef/RealExample';
//import { Layout } from './components/05-useLayoutEffect/Layout';
//import { Memorize } from './components/06-memos/Memorize';
import { MemoHook } from './components/06-memos/MemoHook';

ReactDOM.render(
    <MemoHook />,
  document.getElementById('root')
);
