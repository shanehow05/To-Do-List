import Nav from './Nav'
import Footer from './Footer'



const Layout = (props) => {
    return (
        <div>
            <h1 className='heading'>Get'Er Done</h1>
            <Nav /> 
            {props.children}

            
            <Footer />
            </div>

    )

}

export default Layout

// const Layout = () => {
//     const [itemText, setItemText] = useState('')


//     const addItem = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:3000/api/todos', {item: itemText})
//             console.log(res)
 
//         } catch (error) {
//             console.log(error)
//         }

//     }
//     return (
//         <div className='background'>
//             <h1>To-Do List App</h1>
//             <Nav />
//             <form className="form" onSubmit={e => addItem(e)}>
//                 <input type="text" placeholder='Add to-do Item' onChange={e => {setItemText(e.target.value)}} value={itemText}/>
//                 <button type="submit">Add</button>
//             </form>
//             <div className='todo-listItems'>
//                 <div className="todo-item">
//                     <p className="Item-content">This is the 1st item</p>
//                     <button className="update-item">Update</button>
//                     <button className="delete-item">Delete</button>

//                 </div>

//             </div>
//             <div className='todo-listItems'>
//                 <div className="todo-item">
//                     <p className="Item-content">This is the 2nd item</p>
//                     <button className="update-item">Update</button>
//                     <button className="delete-item">Delete</button>

//                 </div>

//             </div>
//             <div className='todo-listItems'>
//                 <div className="todo-item">
//                     <p className="Item-content">This is the 3rd item</p>
//                     <button className="update-item">Update</button>
//                     <button className="delete-item">Delete</button>

//                 </div>

//             </div>
//             <Footer />
//         </div>
        
//     )
// }

// export default Layout