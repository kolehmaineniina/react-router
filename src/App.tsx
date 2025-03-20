import './App.css'
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <h1>Router App</h1>
      </header> 
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default App