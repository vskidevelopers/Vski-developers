import {
  Routes,
  Route
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Blog from "./Pages/Blog";

import './App.css';
import Category from "./Pages/Category";


function App() {
  return (
    
    <div className="App">
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/category/:id" element={<Category/>} />

    </Routes>
    </div>
    
  );
}

export default App;
