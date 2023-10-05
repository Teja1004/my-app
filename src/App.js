import './App.css';
import Footer from './footer';
import Appheader from './header';
import Textfield from './components/Textfield';
import { Routes, Route } from 'react-router-dom';
import home from './components/home';
import about from './components/about';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <Appheader />
      <Navbar />
      <Routes>
        <Route path='/' Component={home}></Route>
        <Route path='about' Component={about}></Route>
      </Routes>
      <Textfield />

      <Footer />
    </div>
  );
}

export default App;
