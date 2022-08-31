import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom'
import Todo from './components/routes/Todo'
import Todos from './components/routes/Todos'
import TodoCreate from './components/routes/TodoCreate'
import TodoEdit from './components/routes/TodoEdit'
import Home from './components/routes/Home'
import Quote from './components/routes/Quote'





function App() {
  const location = useLocation();


  return (
    <div className="App">
     
      <h3>{location.state ? location.state.msg: null}</h3>



    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/todos' element={<Todos/>}/> 
      <Route path='/create-todo' element={<TodoCreate/>}/> 
      <Route path='/todos/:id' element={<Todo/>}/> 
      <Route path='/todos/edit/:id' element={<TodoEdit/>}/> 
      <Route path='/get-quote' element={<Quote/>}/>
      
     
      
    </Routes>
      




    </div>
  );
}

export default App;
