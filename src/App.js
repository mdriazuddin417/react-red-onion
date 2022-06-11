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
import Purchase from "./component/Pages/Home/Purchase";
import { useQuery } from "react-query";
import Loading from "./Shared/Loading";
import fetcher from "./api/fetcher";
import Login from "./component/Pages/Login";
import SignUp from "./component/Pages/SignUp";

function App() {
  const {
    data: cart,
    isLoading,
    refetch,
  } = useQuery("cart", async () => await fetcher.get("/cart"));
  if (isLoading) {
    return <Loading />;
  }

  const count = cart?.data.length;
  const carts = cart?.data;
  return (
    <div className="max-w-7xl mx-auto lg:px-12">
      <Header count={count} />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Breakfast />}></Route>
          <Route path="/breakfast" element={<Breakfast />}></Route>
          <Route path="/launch" element={<Launch />}></Route>
          <Route path="/diner" element={<Diner />}></Route>
        </Route>
        <Route
          path="/purchase/:id"
          element={<Purchase refetch={refetch} />}
        ></Route>
        <Route
          path="/cart"
          element={<Cart carts={carts} refetch={refetch} />}
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
