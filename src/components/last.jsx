import { motion } from "framer-motion";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const BlogSection = () => {
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#ECF9F8] -z-10" />
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-32 text-center">
        <span className="text-xs font-semibold text-teal-500 uppercase rounded-xl bg-blue-100 p-2">
          Resources
        </span>
        <h2 className="mt-2 text-5xl font-semibold text-gray-900">
          <span className="font-bold"> Stay</span> in the <span className="font-bold"> Know</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[img1, img2, img3].map((img, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.15)" }}
            >
              <img src={img} className="mx-auto mt-3" />
              <div className="p-6 text-left">
                <h4 className="text-sm font-bold text-gray-900">
                  Excepteur sint occaecat cupidatat non proident
                </h4>
                <p className="mt-2 text-xs text-gray-500">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eo
                </p>
                <p className="mt-3 text-xs text-gray-500">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eo
                </p>
                <button className="mt-4 text-teal-500 text-xs font-semibold hover:underline">
                  Read more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
