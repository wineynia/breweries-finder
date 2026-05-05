import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home/index.jsx"
import About from "./pages/About/index.jsx"
import Breweries from "./pages/Breweries/index.jsx";
import BreweryDetails from "./pages/BreweryDetails/index.jsx";
import Contact from "./pages/Contact/index.jsx";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/breweries" element={<Breweries />} />
        <Route path="/breweries/:id" element={<BreweryDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
