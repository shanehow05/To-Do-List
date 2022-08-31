import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Layout from '../shared/Layout'
import TodoForm from '../shared/TodoForm'

function TodoEdit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [todo, setTodo] = useState({
        title: '',

    });

    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(`http://localhost:3000/api/todos/${id}`)
                setTodo(response.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, []);


    const handleChange = (event) => {
        const updatedField = {[event.target.name]: event.target.value};
        const editedTodo = Object.assign(todo, updatedField);
        setTodo(editedTodo)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios({
            url: `todos/edit/${id}`,
            method: 'PUT',
            data: todo 
        }).then((res) => { console.log(res); setUpdated(true)}).catch(console.error)
    

    }

    useEffect(() => {
        if(updated) {
            navigate(`/todos/${id}`)

        }
    })


    return (
       <Layout>
           <TodoForm
           todo={todo} 
           handleChange={(e) => handleChange(e)}
           handleSubmit={(e) => handleSubmit(e)}
           cancelPath={`/todos/${id}`}
           
           
           /> 
       </Layout>


    )
}

export default TodoEdit