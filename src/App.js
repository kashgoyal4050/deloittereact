import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import Post from './Post';
import Register from './Register';
import WriteBlog from './WriteBlog';
import "bootstrap/dist/css/bootstrap.min.css"
 
 
function App() {
  return (
    <div className="App">
      <h1> Deloitte Blogging App </h1>
      <Router>
        <nav>
          <Link to="/">HomePage</Link>
          <Link to="/Post">Posts</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
          <Link to="/WriteBlog">WriteBlog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Post" element={<Post/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/WriteBlog" element={<WriteBlog/>}/>
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;