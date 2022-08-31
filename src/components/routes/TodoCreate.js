import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Layout  from '../shared/Layout'
import TodoForm from '../shared/TodoForm'



function TodoCreate () {
    const navigate = useNavigate();
    const [todo, setTodo] = useState ({
        title: ''
    })

    const [createdTodo, setCreatedTodo] = useState(null)

    const handleChange = (event) => {
        const updatedField = {[event.target.name]:event.target.value}
        const editedTodo = Object.assign(todo, updatedField)
        setTodo(editedTodo)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axios({
            url:`http://localhost:3000/api/todos`, 
            method: 'POST',
            data: todo
        }).then(res => setCreatedTodo(res.data.todo)).catch(console.error)
    }

    useEffect (() => {
        if (createdTodo) {
            return navigate('/todos')
        }
 }, [createdTodo, navigate])



    return (
        <Layout>
            <TodoForm 
                todo={todo}
                handleChange={(e) => handleChange(e)}
                handleSubmit={(e) => handleSubmit(e)}
                cancelPath='/'
            />

        
            
           

        </Layout>
    )
}

export default TodoCreate