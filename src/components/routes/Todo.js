import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import Layout from "../shared/Layout";
// import apiUrl from "../apiConfig"
import apiUrl from "../../apiConfig";



function Todo() {
    const [todo, setTodo] = useState([])
    const [deleted, setDeleted] = useState(false)

    const {id} = useParams();
    let navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await  axios(`${apiUrl}/todos/${id}`)
                console.log(response)
                const result = response.data.todo
                setTodo(result)

            } catch (error) {
                console.log(error)

            }
        }
        fetchData();
    }, [])

const destroy = () => {
    axios ({
        url: `${apiUrl}/todos/${id}`, 
        method: 'DELETE'
    }).then(() => setDeleted(true)).catch(console.error)
}

useEffect(() => {
    if(deleted) {
        return navigate("/")

    }
}, [deleted, navigate])

useEffect(() => {
    if(!todo) {
        return <p>Loading....</p>
    }
},  [todo])










    return (
        <Layout>
            <h4>{todo.title}</h4>
            <button onClick={() => destroy()} className="delete-button">Delete Task</button>
            <NavLink to={`/todos/edit/${id}`}>
            <button className="edit-button">Edit</button>
            </NavLink>


          <NavLink to ="/todos" className="back-link">Back to List</NavLink> 

        </Layout>

    ) 
}
    
   

export default Todo






// import {useState, useEffect} from 'react';
// import {NavLink, useNavigate, useParams} from 'react-router-dom';
// import axios from 'axios';
// import Layout from '../shared/Layout';


// const Todo = () =>{
//     const [todo,setTodo] = useState([])
//     const [deleted,setDeleted] = useState(false)
//     const {id} = useParams()

//     let navigate = useNavigate()

//     useEffect(()=>{
//         async function getTodo(){
//             try{
//                 const response = await axios(`http://localhost:3000/api/items/todos/${id}`)
//                 console.log(response)
//                 const results = response.data.item
//                 setTodo(results)
//             }catch(err){
//                 console.error(err)
//             }
//         }
//         getTodo()
//     },[])


//     const destroy = ()=>{
//         axios({
//             url:`http://localhost:3000/api/items/todos/${id}`,
//             method: 'DELETE'
//         }).then(()=>setDeleted(true)).catch(console.error)
//     }

//     useEffect(()=>{
//         if(deleted){
//             return navigate("/")
//         }
//     },[deleted, navigate])

//     useEffect(()=>{
//         if(!todo){
//             return <><p>loading...</p></>
//         }
//     },[todo])

//     return(
//         <Layout>
//             <h4>{todo.title}</h4>
//             <p>Link: {todo.link}</p>
//             <NavLink to={`/items/${id}/edit`} >
//             <button>Edit Item</button>
//             </NavLink>
//             <button onClick={()=>destroy()}>Delete Item</button>
//             <br/>
//             <br/>
//             <NavLink to="/items">Back to List</NavLink>
//         </Layout>
//     )
// }

// export default Todo
