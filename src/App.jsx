import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";
import CharacterDetails from "./pages/CharacterDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
