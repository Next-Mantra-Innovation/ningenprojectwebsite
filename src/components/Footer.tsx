import React from 'react';
import { Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    // { name: 'Research', href: '#research' },
    // { name: 'Projects', href: '#projects' },
    // { name: 'Technology', href: '#technology' },
    // { name: 'Team', href: '#team' }
  ];

  const resources = [
    // { name: 'Documentation', href: '#' },
    // { name: 'GitHub', href: '#' },
    // { name: 'Research Papers', href: '#' },
    // { name: 'Blog', href: '#' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    // { name: 'Code of Conduct', href: '#' },
    // { name: 'Open Source License', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div
                className="w-10 h-10 bg-gradient-to-r  rounded-lg flex items-center justify-center">
                {/*<Zap className="w-6 h-6 text-white" />*/}
                <img src="https://nextmantra.com/assets/NextMantra-Logo-NoBG-u0HW3lWa.png" alt="brand" />
              </div>

              <div>
                <h1 className="text-xl font-bold">Ningen Project</h1>
                <p className="text-sm text-gray-400">by Next Mantra Innovation</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              At our Ningen Project Labs, we fuse artificial intelligence with decentralized infrastructure to build tomorrow’s tools—today
            </p>
            <div className="flex space-x-4">
              {/*<button className="text-gray-400 hover:text-white transition-colors">*/}
              {/*  <Github className="w-5 h-5" />*/}
              {/*</button>*/}
              {/*<button className="text-gray-400 hover:text-white transition-colors">*/}
              {/*  <Twitter className="w-5 h-5" />*/}
              {/*</button>*/}
              <a href="https://www.linkedin.com/showcase/web3-innovation-lab" target={'_blank'}>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              </a>
              {/*<button className="text-gray-400 hover:text-white transition-colors">*/}
              {/*  <Mail className="w-5 h-5" />*/}
              {/*</button>*/}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href} className="text-gray-400 hover:text-white transition-colors">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              <a href="http://nextmantra.com" target="_blank"> © 2025 Next Mantra Innovation OU.</a> All rights
              reserved. Building intelligence infrastructure
            </p>
            {/*<div className="flex items-center space-x-2 mt-4 md:mt-0">*/}
            {/*  <span className="text-gray-400 text-sm">Made with</span>*/}
            {/*  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>*/}
            {/*  <span className="text-gray-400 text-sm">for the Web3 community</span>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;