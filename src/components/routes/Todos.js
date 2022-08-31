import { useState,useEffect } from "react";
import {NavLink} from "react-router-dom";
import axios from 'axios';



function Todos () {
    const [todos, setTodos] = useState([])


    const fetchData = async () => {
        try {
            const response = await axios('http://localhost:3000/api/todos')
            console.log(response)
            setTodos(response.data.todo)
           
        } catch (error) {
           console.error(error) 
        }
    }
    useEffect(() => {
        fetchData()
    }, [])


    const todosData = todos.map((todo) => {
        return <li key={todo._id}>
            <NavLink to={`/todos/${todo._id}`}> {todo.title}</NavLink>

        </li>
    })
      return (

        <div>
            <h4 className="list-heading">To-Do List Items</h4>
            <ul className="todos">
                {todosData}
            </ul>

        </div>
    )

}

export default Todos


