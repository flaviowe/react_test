import React, { useContext } from 'react'
import { threadId } from 'worker_threads';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import { Todo } from '../models/Todo';

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {

    const {removeTodo, toggleTodo} = useContext<TodoContextType>(TodoContext);

    const onRemove = (todo: Todo) => {
        removeTodo(todo);
    }

    const handleChanges = () => {
        toggleTodo(props.todo);
    }

    return (
        <tr className="uk-animation-slide-buttom-medium">
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox"
                        type="checkbox"
                        checked={props.todo.done}
                        onChange={handleChanges}>
                    </input>
                </label>
            </td>
            <td className="uk-width-expand">{props.todo.title}</td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger"
                    uk-icon="trash"
                    onClick={() => {onRemove(props.todo)}}>
                </button>
            </td>

        </tr>
    )
}

export default TodoListItem;