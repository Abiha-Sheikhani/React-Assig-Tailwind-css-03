import { motion } from "framer-motion";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";

const images = [pic1, pic2, pic3, pic4, pic5, pic6];

const SectionTwo = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <span className="text-xs font-semibold text-teal-500 uppercase rounded-xl bg-blue-100 p-2">
          Awards
        </span>
        <h2 className="mt-3 text-2xl font-semibold text-gray-900">
          An award winning platform, loved by customers.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="flex items-center flex-col justify-center rounded-xl bg-gray-50 p-4 cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.15)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img src={img} alt={`award-${index + 1}`} className="max-h-32 object-contain" />
              <p className="mt-4 text-md font-medium text-gray-900">
                Market leader across
              </p>
              <p className="mt-2 text-md font-medium text-gray-900">
                18 Categories
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
