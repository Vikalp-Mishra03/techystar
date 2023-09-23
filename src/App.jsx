import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./component/Header"
import Home from "./component/Home";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss"
import "./styles/footer.scss"
function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
