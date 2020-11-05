import { Todo } from '../models/Todo';

const TODO_STORAGE = 'todos';

export const getTodos = (): Todo[] => {
    const data = localStorage.getItem(TODO_STORAGE) || '';

    try {
        const result = JSON.parse(data) as Todo[];
        return result;
    } catch (error) {
        return [];
    }
}

export const saveTodos = (todos: Todo[]) => {
    localStorage.setItem(TODO_STORAGE,JSON.stringify(todos));
}