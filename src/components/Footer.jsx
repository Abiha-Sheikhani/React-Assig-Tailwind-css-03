import map from "../assets/map.png";
import links from "../assets/socials.png";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-gray-400">
      <div className="max-w-6xl mx-auto px-4 pt-20 text-center md:text-left">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-gray-700">

          {/* Map */}
          <div className="flex flex-col items-center md:items-start">
            <img src={map} className="mb-4 w-32" alt="Map" />
            <p className="text-xs hover:text-white transition-colors cursor-default">
              Made with lots of ❤️ in San Francisco
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              {["Delta","Sigma","Zeta","Alpha","Acumen"].map((item, i) => (
                <li key={i} className="hover:text-teal-500 transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {["Help","Training Videos","Webinars","Request a Demo","Create Surveys","Quiz Maker"].map((item, i) => (
                <li key={i} className="hover:text-teal-500 transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About Us","Careers","Team","Contact Us"].map((item, i) => (
                <li key={i} className="hover:text-teal-500 transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-xs gap-4 md:gap-0">
          <p>Copyright 2022 Circle. All rights reserved.</p>

          {/* Socials */}
          <div className="flex gap-4">
            <img src={links} alt="socials" className="hover:scale-110 transition-transform cursor-pointer" />
          </div>

          {/* Footer links */}
          <div className="flex gap-4 flex-wrap justify-center md:justify-end">
            {["Privacy Policy","Data & Security","Terms of Service"].map((link, i) => (
              <span key={i} className="hover:text-teal-500 transition-colors cursor-pointer">{link}</span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
