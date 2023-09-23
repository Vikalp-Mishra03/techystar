import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./component/Header"
import Home from "./component/Home";
import Footer from "./component/Footer";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss"
function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
