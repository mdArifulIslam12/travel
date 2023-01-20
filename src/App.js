import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./pages/Home/Blogs/Blogs";
import Home from "./pages/Home/Home/Home";
import ServiceDetail from "./pages/Home/ServiceDetail/ServiceDetail";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Footer from "./pages/Shered/Footer/Footer";
import Header from "./pages/Shered/Header/Header";
import NotFound from "./pages/Shered/NotFound/NotFound";
import RequireAuth from "./pages/Shered/RequireAuth/RequireAuth";
import About from "./pages/Home/About/About";
import Destinations from "./pages/Destinations/Destinations";
import AboutUs from "./pages/AboutUs/AboutUs";
import LoginV2 from "./pages/Login/Login/LoginV2";
import RegisterV2 from "./pages/Login/Register/RegisterV2";

function App() {
  function loader() {
    document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut;
  return (
    <div className="">
      
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={
            <RequireAuth>
              <ServiceDetail></ServiceDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/destination"
          element={<Destinations></Destinations>}
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/loginV2" element={<LoginV2 />}></Route>
        <Route path="/registerV2" element={<RegisterV2 />}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <div class="loader-container">
      <img src="https://travo.iamabdus.com/v1.1/wp-content/uploads/2021/04/loading.gif" alt="" />
    </div>
    </div>
  );
}

export default App;
