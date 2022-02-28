import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ( {key, todos, handleDelete, handleToggle}) => {
  return (
 
     <ul className="list-group list-group-flush">
                {
                    todos.map( (todo, index) => (  //problem arrowfunction
                         // todolistItem, todo, index, handleDelete, handleToggle
                       <TodoListItem 
                            key={ todo.id }
                            todo={ todo } 
                            index={ index}  
                            handleDelete={ handleDelete } 
                            handleToggle={ handleToggle}
                        /> 
                    ))
                }
                </ul>
       
  )
}
