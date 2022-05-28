import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Pages/Home/Home";
import Cart from "./component/Pages/Cart/Cart";
import Breakfast from "./component/Pages/Home/Breakfast";
import Launch from "./component/Pages/Home/Launch";
import Diner from "./component/Pages/Home/Diner";

function App() {
  return (
    <div className="max-w-7xl mx-auto lg:px-12">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Breakfast />}></Route>
          <Route path="/breakfast" element={<Breakfast />}></Route>
          <Route path="/launch" element={<Launch />}></Route>
          <Route path="/diner" element={<Diner />}></Route>
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
