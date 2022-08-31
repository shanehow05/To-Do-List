import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink className="nav-barlink" to="/">Home</NavLink>
            <NavLink className="nav-barlink" to={"/todos"}>To-Do List items</NavLink>
            <NavLink className="nav-barlink" to={"/create-todo"}>Create To-Do</NavLink>
            <NavLink className="nav-barlink" to={"/get-quote"}>Quote</NavLink>

        </nav>
    )
}

export default Nav 