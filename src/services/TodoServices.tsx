import { join } from 'path';
import React from 'react'
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
    if (todos?.length >= 1)
        localStorage.setItem(TODO_STORAGE,JSON.stringify(todos));
}