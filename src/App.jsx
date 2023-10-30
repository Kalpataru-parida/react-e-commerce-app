import Header from "./component/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import Kids from "./pages/Kids/Kids";
import "./App.css";
import { AuthProvider } from "./Context/Auth.context";
import LogIn from "./pages/LogIn/LogIn";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <>
        <AuthProvider>
          <Header/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/SignIn" element={<SignIn />} />
            {/* <Route path="/Kids" element={<Kids />} /> */}
          </Routes>
        </AuthProvider>
    </>
  );
}

export default App;
