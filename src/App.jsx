import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import PicContextProvider from "./contexts/PicContext";

const App = () => {
  return (
    <div>
      <PicContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </PicContextProvider>
    </div>
  );
};
export default App;
