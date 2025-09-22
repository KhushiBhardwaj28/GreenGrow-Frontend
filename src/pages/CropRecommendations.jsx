import { useState, useEffect } from "react";

function CropRecommendation() {
  const [region, setRegion] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [temperature, setTemperature] = useState("");
  const [season, setSeason] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // ✅ Mock crop details
  const cropDetails = {
    Wheat: {
      season: "Rabi",
      soil: "Well-drained loamy soil",
      climate: "Cool, dry climate",
      tips: "Ensure proper irrigation at critical stages.",
    },
    Rice: {
      season: "Kharif",
      soil: "Clayey soil with good water retention",
      climate: "Hot and humid climate",
      tips: "Requires standing water for most of the season.",
    },
    Maize: {
      season: "Both Kharif & Rabi",
      soil: "Well-drained fertile soil",
      climate: "Warm climate with moderate rainfall",
      tips: "Responds well to fertilizers and irrigation.",
    },
  };

  useEffect(() => {
    setRecommendations(["Wheat", "Rice", "Maize"]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* ✅ Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1350&q=80')",
        }}
      ></div> */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/70 -z-10"></div> */}

      {/* Content */}
      <div className="relative p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          🌱 Crop Recommendation
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />

          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Season</option>
            <option value="Kharif">Kharif</option>
            <option value="Rabi">Rabi</option>
            <option value="Zaid">Zaid</option>
          </select>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <input
              type="number"
              placeholder="Rainfall (mm)"
              value={rainfall}
              onChange={(e) => setRainfall(e.target.value)}
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              placeholder="Temp (°C)"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              placeholder="Nitrogen (N)"
              value={nitrogen}
              onChange={(e) => setNitrogen(e.target.value)}
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              placeholder="Phosphorus (P)"
              value={phosphorus}
              onChange={(e) => setPhosphorus(e.target.value)}
              className="p-2 border rounded"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Potassium (K)"
              value={potassium}
              onChange={(e) => setPotassium(e.target.value)}
              className="p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
          >
            Get Recommendations
          </button>
        </form>

        {/* Results */}
        {showResults ? (
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2 justify-center">
              🌾 Recommended Crops
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((crop, i) => (
                <div
                  key={i}
                  className="bg-white/90 backdrop-blur-md border border-green-200 rounded-xl shadow-lg p-6 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-600 text-white text-2xl font-bold shadow-md plant-grow">
                    {crop.charAt(0)}
                  </div>
                  <h4 className="text-lg font-semibold text-green-700 mt-3">
                    {crop}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    🌱 Best for your soil & season
                  </p>
                  <button
                    onClick={() => setSelectedCrop(crop)}
                    className="mt-3 bg-green-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-800 transition"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // ✅ Default placeholder before recommendations appear
          <div className="mt-10 text-center text-gray-600 italic">
            🌾 Enter your details above and click "Get Recommendations" to see the best crops for your region!
          </div>
        )}
      </div>

      {/* ✅ Modal */}
      {selectedCrop && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-2xl max-w-md w-full relative border border-white/40">
            {/* Close button */}
            <button
              onClick={() => setSelectedCrop(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              ✖
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold text-green-700 mb-3 text-center">
              {selectedCrop}
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>🌱 Season:</strong> {cropDetails[selectedCrop]?.season}
              </p>
              <p>
                <strong>🌍 Soil:</strong> {cropDetails[selectedCrop]?.soil}
              </p>
              <p>
                <strong>☀️ Climate:</strong> {cropDetails[selectedCrop]?.climate}
              </p>
              <p>
                <strong>💡 Tips:</strong> {cropDetails[selectedCrop]?.tips}
              </p>
            </div>

            {/* Action button */}
            <div className="mt-4 text-center">
              <button
                onClick={() => setSelectedCrop(null)}
                className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CropRecommendation;
