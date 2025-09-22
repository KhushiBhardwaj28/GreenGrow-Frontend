import { useState } from "react";
import { FaSeedling, FaLeaf, FaHandsHelping } from "react-icons/fa";

function SoilRestoration() {
  const [lastCrop, setLastCrop] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // fake API response
    setRecommendations([
      "Legumes (e.g., Lentils, Chickpeas)",
      "Groundnut",
      "Green Manure Crops",
    ]);
  };

  return (
    <div className="relative w-screen min-h-screen">
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524592714635-d77511a4834c?auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* ✅ Content */}
      <div className="relative max-w-3xl mx-auto p-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-green-800 mb-6 text-center flex items-center justify-center gap-3">
          <FaHandsHelping size={32} /> Soil Restoration
        </h2>

        {/* Intro Tips Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/80 p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <FaSeedling className="text-green-700 mb-2" size={28} />
            <p className="text-sm font-medium text-gray-700">Rotate crops to improve soil fertility</p>
          </div>
          <div className="bg-white/80 p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <FaLeaf className="text-green-700 mb-2" size={28} />
            <p className="text-sm font-medium text-gray-700">Add organic manure or compost</p>
          </div>
          <div className="bg-white/80 p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <FaHandsHelping className="text-green-700 mb-2" size={28} />
            <p className="text-sm font-medium text-gray-700">Use cover crops to restore balance</p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white/80 p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-2xl transition"
        >
          <input
            type="text"
            placeholder="Enter last harvested crop (e.g., Wheat)"
            value={lastCrop}
            onChange={(e) => setLastCrop(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition font-semibold"
          >
            Get Suggestions
          </button>
        </form>

        {/* Results */}
        {recommendations.length > 0 && (
          <div className="mt-8 bg-green-50 p-6 rounded-2xl shadow-md border border-green-100 transition animate-fadeIn soil-sprout">
            <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
              🌱 Suggested Crops for Soil Restoration
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {recommendations.map((crop, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center transition"
                >
                  <p className="text-green-700 font-medium">{crop}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SoilRestoration;
