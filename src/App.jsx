import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppWrapper from "./components/AppWrapper";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import CropRecommendations from "./pages/CropRecommendations"; 
import DiseaseDetection from "./pages/DiseaseDetection";
import SoilRestoration from "./pages/SoilRestoration";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Background wrapper */}
      <div className="flex-grow">
        <AppWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crop-recommendations" element={<CropRecommendations />} />
            <Route path="/disease-detection" element={<DiseaseDetection />} />
            <Route path="/soil-restoration" element={<SoilRestoration />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppWrapper>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}


export default App;
