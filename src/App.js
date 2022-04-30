import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Pages/Blogs/Blogs';
import Home from './components/Pages/Home';
import SingleInventory from './components/Pages/SingleInventory/SingleInventory';
import Header from './components/Partials/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route> 
        <Route path="/inventory/:id" element={<SingleInventory />}></Route> 
      </Routes>
     
    </div>
  );
}

export default App;
