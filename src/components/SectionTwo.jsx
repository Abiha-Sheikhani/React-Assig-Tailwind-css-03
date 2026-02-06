import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";

const awards = [
  {
    title: "Market leader across",
    subtitle: "18 categories",
    bg: "bg-red-50",
    label: "Leader 2022"
  },
  {
    title: "Most loved SaaS tool",
    subtitle: "in 2021",
    bg: "bg-gray-100",
    label: "Top Rated"
  },
  {
    title: "Category leader",
    subtitle: "in 2022",
    bg: "bg-teal-50",
    label: "GetApp"
  },
  {
    title: "Most recommended",
    subtitle: "tool in 2021",
    bg: "bg-indigo-50",
    label: "Software Advice"
  },
  {
    title: "Champion in survey",
    subtitle: "tool 2022",
    bg: "bg-yellow-50",
    label: "Champion"
  },
  {
    title: "Top performer spring",
    subtitle: "2021",
    bg: "bg-orange-50",
    label: "G2 Crowd"
  },
];
const images = [pic1, pic2, pic3, pic4, pic5, pic6];

const SectionTwo = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Label */}
        <span className="text-xs font-semibold text-teal-500 uppercase rounded-xl bg-blue-100 p-2">
          Awards
        </span>

        {/* Heading */}
        <h2 className="mt-3 text-2xl font-semibold text-gray-900">
          An award winning platform, loved by customers.
        </h2>

        {/* Cards grid */}
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="flex items-center flex-col justify-center rounded-xl bg-gray-50 p-4 hover:shadow-md transition"
            >
              <img
                src={img}
                alt={`award-${index + 1}`}
                className="max-h-32 object-contain"
              />
                <p className="mt-4 text-md  font-medium text-gray-900">
                Market leader across
              </p>
              <p className="mt-4 text-md  font-medium text-gray-900">
                18 Categories
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SectionTwo;
