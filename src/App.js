import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import SudokuGame from "./Components/SudokuGame";
import Header from "./CommonComponents/Header";
import Footer from "./CommonComponents/Footer";
import "animate.css";
import "./App.css";



function App() {
  useEffect(() => {
    ReactGA.initialize("G-Z7209ZJ8T8");
  }, []);

  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<SudokuGame />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;


// function Home() {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate("/sudoku");
//   };

//   return (
//     <>
//    <h1 class="animate__heartBeat">Fun Time With Sudoku..!!</h1>
//     <div className="Home">
//       <h3 class="animate__heartBeat">Welcome To The Game</h3>
//       <button onClick={handleButtonClick}>Let's Play</button>
//     </div>
//     </>
//   );
// }


