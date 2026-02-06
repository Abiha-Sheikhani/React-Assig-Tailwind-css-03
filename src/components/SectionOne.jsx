import ctn from "../assets/ctn.png";

const SectionOne = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* Left content */}
        <div>
          <span className="text-xs font-semibold text-teal-500 uppercase rounded-xl bg-blue-100 p-2">
            Our Story
          </span>

          <h2 className="mt-3 text-3xl font-semibold text-gray-900">
            Tool <span className="font-bold">built for people.</span>
          </h2>

          <p className="mt-4 text-md text-gray-500 leading-relaxed max-w-md">
            Whether you want to edit your Google Docs, resolve Jira issues,
            or collaborate over Zoom
          </p>

   <p className="mt-4 text-md text-gray-500 leading-relaxed max-w-md">
            

Circle has 100+ integrations with tools you already use and love.
          </p>
          <button className="mt-6 bg-teal-500 hover:bg-teal-600 transition text-white text-sm font-medium px-6 py-3 rounded">
            Get started free
          </button>
        </div>

        {/* Right image */}
        <div className="flex justify-center">
          <img
            src={ctn}
            alt="Team collaboration"
            className="rounded-xl shadow-lg max-w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default SectionOne;
