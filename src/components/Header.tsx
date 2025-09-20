import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              {/*<div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">*/}
              {/*    <Zap className="h-6 w-6 text-white"/>*/}
              {/*   */}
              {/*</div>*/}
              <div>
                <img src="https://nextmantra.com/assets/NextMantra-Logo-NoBG-u0HW3lWa.png" alt="logo" style={{width:'50px'}}/>
              </div>
              {/*<span className="text-xl font-bold text-gray-900">Next Mantra</span>*/}
            </a>
            {/*<div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">*/}
            {/*  /!*<Zap className="w-6 h-6 text-white" />*!/*/}



            {/*</div>*/}
            <div>
              <h1 className="text-xl font-bold text-gray-900">Ningen Project</h1>
              <p className="text-xs text-gray-600">by Next Mantra Innovation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#research" className="text-gray-700 hover:text-purple-600 transition-colors">Research</a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">Projects</a>
            {/*<a href="#technology" className="text-gray-700 hover:text-purple-600 transition-colors">Technology</a>*/}
            {/*<a href="#team" className="text-gray-700 hover:text-purple-600 transition-colors">Team</a>*/}
            <a href="#contact" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#research" className="text-gray-700 hover:text-purple-600 transition-colors">Research</a>
              <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">Projects</a>
              {/*<a href="#technology" className="text-gray-700 hover:text-purple-600 transition-colors">Technology</a>*/}
              {/*<a href="#team" className="text-gray-700 hover:text-purple-600 transition-colors">Team</a>*/}
              <a href="#contact" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all inline-block text-center">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;