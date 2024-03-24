import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppDetails from "./pages/AppDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route
          exact
          path="/appDetails/:id"
          element={<AppDetails></AppDetails>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
