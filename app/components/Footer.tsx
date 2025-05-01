import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-t from-gray-900/90 to-gray-800/90 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content - Glassmorphism Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-xl">
          {/* Brand Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">My</span> Portfolio
            </h2>
            <p className="mt-4 text-gray-300 text-sm max-w-xs">
              Building the future with innovative and elegant digital solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <nav className="flex flex-col gap-2">
              {["Home", "Projects", "Expertise", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-300 text-sm transition-colors duration-300 hover:translate-x-1"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span>123 Innovation Street, Tech City</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V5a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
                </svg>
                <span>contact@myportfolio.com</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M3 19h18M3 12h18" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            {[
              {
                svg: (
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                ),
                href: "https://linkedin.com",
              },
              {
                svg: (
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                ),
                href: "https://github.com",
              },
              {
                svg: (
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.891-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                ),
                href: "https://twitter.com",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-300 hover:text-cyan-300 transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {social.svg}
                </svg>
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            Designed & Developed with <span className="text-cyan-300">💙</span> by Mohd Adeeb © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}