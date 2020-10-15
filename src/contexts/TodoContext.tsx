import { toUnicode } from 'punycode';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import TodoListItem from '../components/TodoListItem';
import { Todo } from '../models/Todo';
import { getTodos, saveTodos } from '../services/TodoServices';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>(
    {
        todos: [
           
        ],
        addTodo: () => {},
        removeTodo: () => {},
        toggleTodo: () => {}
    }
);

const TodoProvider = (props: any) => {
    const [todos, setTodos] = useState<Todo[]>(getTodos);
    
    useEffect(() => {
        saveTodos(todos)
    },[todos]);
    
    const addTodo = (title: string) => {
        const todo: Todo = {id: todos.length += 1, title: title, done: false};
        setTodos([...todos, todo]);
    }

    const removeTodo = (todo: Todo) => {
        const index = todos.indexOf(todo);
        setTodos(todos.filter((_, i) => i !== index ))
    }

    const toggleTodo = (todo: Todo) => {
        const index = todos.indexOf(todo);
        todos[index].done = !todos[index].done;
        setTodos([...todos]);
    }


    return(
        <TodoContext.Provider value={{todos, addTodo, removeTodo, toggleTodo}}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;
