import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Detail from './components/Detail';
import Players from "./Players";
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Players />} />
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
