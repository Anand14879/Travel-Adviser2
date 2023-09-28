import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { NavBar } from "./pages/NavBar";
import { useState, createContext } from "react";
import { Profile } from "./pages/Profile";

export const AppContext = createContext();

function App() {
    const [username, setUsername] = useState("Anurag");

    return (
        <div>
            <AppContext.Provider value={{ username, setUsername }}>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/profile" element={<Profile />} />

                        <Route
                            path="*"
                            element={<h1> 404 ERROR - Page not found </h1>}
                        />
                    </Routes>
                </Router>
            </AppContext.Provider>
        </div>
    );
}

export default App;
