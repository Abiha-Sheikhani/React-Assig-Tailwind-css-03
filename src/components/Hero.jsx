import hero from "../assets/hero.png";
import brands from "../assets/brands.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Top blue background */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-[#F3FBFA] -z-10" />

      {/* Bottom white background */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-white -z-10" />

      <div className="max-w-5xl mx-auto px-4 pt-28 pb-20 text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
          A powerful online engagement tool <br className="hidden md:block" />
          that’s intuitive and simple to use.
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-sm text-gray-500 max-w-xl mx-auto">
          With stellar one-click reports and unmatched support, see how
          Circle will make a difference in your business.
        </p>

        {/* CTA */}
        <div className="mt-6">
          <button className="bg-teal-500 hover:bg-teal-600 transition text-white text-sm font-medium px-6 py-3 rounded">
            Get started free →
          </button>
        </div>

        {/* Hero Image (overlapping both backgrounds) */}
        <div className="mt-14 flex justify-center">
          <img
            src={hero}
            alt="Team working"
            className="relative z-10"
          />
        </div>

        {/* Trust text */}
        <p className="mt-14 text-sm text-gray-700">
          Trusted by <span className="font-semibold">100,000+</span> customers in{" "}
          <span className="font-semibold">90+</span> countries
        </p>

        {/* Brands */}
        <div className="mt-6 flex justify-center">
          <img src={brands} alt="Brands" />
        </div>

        {/* Footer bullets */}
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-6 text-xs text-gray-500">
          <span>✔ 18,231 signed up last month</span>
          <span>✔ GDPR & CCPA-ready</span>
          <span>✔ Leader@G2 Summer</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
