import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Detail from './components/Detail';
import Players from "./Players";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Players />} />
        <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
