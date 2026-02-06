import map from "../assets/map.png";
import links from "../assets/socials.png"
const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-gray-400">
      <div className="max-w-6xl mx-auto px-4 pt-20 text-center">

        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-gray-700">

          {/* Map */}
          <div>
            <img src={map} className="mb-4 mx-auto" />
            <p className="text-xs">
              Made with lots of ❤️ in San Francisco
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>Delta</li>
              <li>Sigma</li>
              <li>Zeta</li>
              <li>Alpha</li>
              <li>Acumen</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Help</li>
              <li>Training Videos</li>
              <li>Webinars</li>
              <li>Request a Demo</li>
              <li>Create Surveys</li>
              <li>Quiz Maker</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Contact Us</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>Copyright 2022 Circle. All rights reserved.</p>

          <div className="flex gap-4 my-4 md:my-0">
         <img src={links} alt="socials" />
          </div>

          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Data & Security</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
