import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { TodoContextType } from '../contexts/TodoContextType'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'



const schema = yup.object().shape(
    {
        title: yup.string().required('Tarefa inválida'),
    }
)

interface AddTodoForm {
    title: string
}

const AddTodo = () =>{
    const { addTodo } = useContext<TodoContextType>(TodoContext);

    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema),
    });

    return(<div>pano de chao</div>);
}

export default AddTodo;