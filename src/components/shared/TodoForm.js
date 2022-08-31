import {Link} from 'react-router-dom'


const TodoForm = ({todo, handleSubmit, handleChange, cancelPath}) => {


    return (

        <form onSubmit={(e) => handleSubmit(e)} className="form">
            <label className='todo-title'> Create or Edit Task</label>
            <input 
            placeholder="To-do to input"
            defaultValue={todo.title}
            name="title"
            onChange={(e) => handleChange(e)}
            className="input-bar"
        
            /> 

            <button className='submit-button' type="submit">Submit</button>
            <Link to={cancelPath}>
            <button className='cancel-button'>Cancel</button>
            </Link>


        </form>

    )
}

export default TodoForm