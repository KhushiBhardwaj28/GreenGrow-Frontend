import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-20 text-center relative overflow-hidden">
        {/* Floating Leaves 🍃 */}
        <motion.div
          className="absolute top-10 left-10 text-4xl"
          animate={{ y: [0, 20, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          🍃
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-4xl"
          animate={{ y: [0, -20, 0], rotate: [0, -15, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          🍂
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            🌱 Welcome to GreenGrow
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Empowering farmers with smart crop recommendations, disease detection,
            and soil restoration for sustainable agriculture.
          </motion.p>

          <motion.a
            href="/crop-recommendations"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 hover:shadow-lg transition inline-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-green-900 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">🌦 Crop Recommendations</h3>
              <p className="text-gray-700">
                Get AI-powered crop suggestions based on weather, soil, and regional data.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">🩺 Disease Detection</h3>
              <p className="text-gray-700">
                Upload crop images to detect diseases early and get treatment advice.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">🌍 Soil Restoration</h3>
              <p className="text-gray-700">
                Learn which crops to grow next to restore soil nutrients naturally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
