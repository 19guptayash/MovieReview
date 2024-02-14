import "./App.css";
import Detailsmain from "./component/pages/detail/Detailsmain";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Common/Header";
import Homepage from "./component/pages/homepage/Homepage";
import Footer from "./component/Common/Footer";

function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies/:movieId" element={<Detailsmain />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
