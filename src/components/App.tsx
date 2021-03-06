import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoContext  from '../contexts/TodoContext';
import AddTodo from './AddTodo';
import Navbar from './Navbar'
import TodoList from './TodoList';

const App = () => { 
    return(
        <TodoContext>
            <Router>
                <Navbar></Navbar>
                <br/>
                <div className="uk-container">
                    <Switch>
                        <Route path="/create" component={AddTodo}/>
                        <Route path="/" component={TodoList}/>
                    </Switch>
                </div>
            </Router>
        </TodoContext>        
    )
 }

export default App;