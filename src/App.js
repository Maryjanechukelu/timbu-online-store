import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Hero from "./components/Main/hero"
import Header from "./components/Header/header"
import Cart from "./Pages/cartpage"
import Footer from "./components/Footer/footer"
import Checkout from "./Pages/Payout"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/cartpage" element={<Cart />} />
        <Route path="/Payout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
