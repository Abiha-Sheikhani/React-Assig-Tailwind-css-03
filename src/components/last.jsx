import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const text = [
    {
        title: "Excepteur sint occaecat cupidatat non proident",
        text1: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eo",
   text2: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eo"
    }
]
const BlogSection = () => {
  return (
    <section className="relative">

      {/* Blue background */}
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
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
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
                <button className="mt-4 text-teal-500 text-xs font-semibold">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
