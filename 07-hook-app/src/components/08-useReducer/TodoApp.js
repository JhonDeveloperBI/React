import React, { useReducer } from 'react';
import './style.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]


export const TodoApp = () => {

  //  const [state, dispatch] = useReducer(reducer, initialState, init);

    const [ todos ] = useReducer(todoReducer, initialState);
    console.log( todos )

  return (
    <div>
        <h1>Todo App</h1>
        <hr />

        <ul>
            <li>Hello</li>
            <li>World</li>
            <li>Hola of new</li>
        </ul>
    </div>
  )
}
