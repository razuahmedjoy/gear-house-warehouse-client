import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Pages/Blogs/Blogs';
import Home from './components/Pages/Home';
import SingleInventory from './components/Pages/SingleInventory/SingleInventory';
import Header from './components/Partials/Header/Header';
import { ToastContainer } from 'react-toastify';
import ManageInventory from './components/Pages/ManageInventory/ManageInventory';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import RequireAuth from './components/Partials/RequireAuth';
function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/inventory/:id" element={<RequireAuth><SingleInventory /></RequireAuth>}></Route>

        <Route path="/manage-inventory" element={<ManageInventory />}></Route>
      </Routes>

    </div>
  );
}

export default App;
