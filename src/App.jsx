
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'; 
import { Welcome } from "./Welcome.jsx";
import { Counter } from "./Counter.jsx";
import { Login } from "./Login.jsx";

export function App() {
    return (
        <BrowserRouter> 
            <div>
                <Link to="/">Home</Link> | <Link to="/Counter">Your counter</Link> | <Link to="/Login">Your Login</Link> 
            </div>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/Counter" element={<Counter />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
