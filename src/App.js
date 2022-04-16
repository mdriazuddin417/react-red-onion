import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Cart from "./component/Cart/Cart";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Breakfast from "./component/Breakfast/Breakfast";
import Launch from "./component/Launch/Launch";
import Diner from "./component/Diner/Diner";
import NotFound from "../src/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="breakfast" element={<Breakfast />}></Route>
          <Route path="launch" element={<Launch />}></Route>
          <Route path="diner" element={<Diner />}></Route>
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
