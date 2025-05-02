// Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 py-8 border-t">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-40 justify-center ">
        {/* About */}
        <div>
          <h3 className="font-bold mb-2">About</h3>
          <ul className="space-y-1">
            <li>About MyFeedback</li>
            <li>Investor Relations</li>
            <li>Trust &amp; Safety</li>
            <li>Content Guidelines</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Your Privacy Choices</li>
          </ul>
        </div>

        {/* MyFeedback */}
        <div>
          <h3 className="font-bold mb-2">MyFeedback</h3>
          <ul className="space-y-1">
            <li>MyFeedback for business</li>
            <li>Collections</li>
            <li>Talk</li>
            <li>Events</li>
            <li>MyFeedback blog</li>
            <li>Support</li>
            <li>Developers</li>
          </ul>
        </div>

        {/* Languages and Countries */}
        <div>
          <h3 className="font-bold mb-2">Languages</h3>
          <select className="w-40 p-1 border border-gray-300 rounded mb-4">
            <option>English</option>
            <option>বাংলা (Bengali)</option>
            <option>Español (Spanish)</option>
            <option>Français (French)</option>
            <option>Deutsch (German)</option>
            <option>中文 (Chinese)</option>
            <option>हिन्दी (Hindi)</option>
            <option>Português</option>
            <option>العربية (Arabic)</option>
            <option>Русский (Russian)</option>
          </select>

          <h3 className="font-bold mb-2">Countries</h3>
          <select className="w-40 p-1 border border-gray-300 rounded">
            <option>Singapore</option>
            <option>Bangladesh</option>
            <option>United States</option>
            <option>India</option>
            <option>United Kingdom</option>
            <option>Germany</option>
            <option>France</option>
            <option>Japan</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="text-center text-gray-600 text-xs mt-6">
        Copyright © September 2023 myfeedback, designed by scott
      </div>
    </footer>
  );
};

export default Footer;
