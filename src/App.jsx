import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Layout from "./components/layout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Contact from "./pages/contact";
import Hosting from "./pages/hosting";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hosting/:name" element={<Hosting />}/>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
