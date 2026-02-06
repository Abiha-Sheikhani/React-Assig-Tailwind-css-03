import hand from "../assets/hand.png";
import girl from "../assets/girl.png";
import laptop from "../assets/laptop.png";
import paypal from "../assets/paypal.png";

const FeaturesSection = () => {
  return (
    <section className="bg-white">

      {/* Section heading + tabs */}
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-12 text-center">
        <span className="text-xs font-semibold text-teal-500 uppercase rounded-xl bg-blue-100 p-2">
          Built for people
        </span>

        <h2 className="mt-2 text-5xl font-semibold text-gray-900">
          <span className="font-bold"> Easy</span> for beginners.<span className="font-bold"> Powerful</span> for experts.  
        </h2>

        <div className="mt-8 flex justify-center gap-8 text-sm text-gray-400">
          <span className="text-teal-500 border-b-2 border-teal-500 pb-2">
            Create
          </span>
          <span>Distribute</span>
          <span>Collect</span>
          <span>Analyze</span>
        </div>
      </div>

      {/* Sub section 1 — BLUE BG */}
      <div className="bg-[#ECF9F8] py-20">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-5xl font-semibold text-gray-900">Create</h3>
            <h5 className="text-xl mt-2 font-bold text-gray-900">Advanced Researched form</h5>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Ask the right questions and get the answers you need with the most
              secure and collaborative survey platform.
            </p>
            <button className="mt-6 bg-teal-500 text-white px-6 py-3 text-sm rounded">
              Get started for free
            </button>
          </div>

          <img src={hand} className="rounded-xl shadow-md" />
        </div>
      </div>

{/* Sub section 2 — WHITE BG */}


<div className="bg-white py-24">
  <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
 <div>
      <span className="text-xs font-semibold text-teal-500 uppercase rounded-xl bg-blue-100 p-2">
        Testimonials
      </span>

      <h3 className="mt-3 text-5xl font-semibold text-gray-900">
        See how customers <span className="font-bold"> drive impact</span> 
      </h3>

      <button className="mt-4 text-sm text-teal-500">
        See case studies →
      </button>
    </div>
    {/* Image + play */}
    <div className="relative">
      <img src={girl} className="rounded-xl " />

      {/* Testimonial card */}
      <div className="absolute -bottom-8 right-4 md:right-8 bg-[#F8FAFB] p-6 shadow-lg rounded-xl max-w-xs md:max-w-sm">
        <img src={paypal} className="h-8 mb-4" />
        <p className="text-md text-gray-600">
          “I used to have a bunch of different tools that do pay for,
          Circle gives everything in one bundle.”
        </p>
        <p className="mt-4 text-xs font-semibold text-gray-900">
          Michel Dedrick
        </p>
        <p className="text-xs text-gray-500">
          Senior Conversion Optimizer
        </p>
      </div>
    </div>

    {/* Text + PayPal */}
   

  </div>
</div>

      {/* Sub section 3 — WHITE BG */}
      <div className="bg-white pb-32">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-5xl font-semibold text-gray-900">
              Looking for a <span className="font-bold"> solution</span>  for your business?
            </h3>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Check out Sogolytics enterprise feedback and experience management
              platform.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="bg-teal-500 text-white px-6 py-3 text-sm rounded">
                Learn more
              </button>
              <button className="border px-6 py-3 text-sm rounded">
                Schedule a consultation
              </button>
            </div>
          </div>

          <img src={laptop} className="rounded-xl shadow-md" />
        </div>
      </div>

    </section>
  );
};

export default FeaturesSection;
