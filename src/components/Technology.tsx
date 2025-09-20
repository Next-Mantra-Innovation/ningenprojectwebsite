import React from 'react';
import { Code, Database, Shield, Zap, Users, Globe } from 'lucide-react';

const Technology = () => {
  // const stats = [
  //   { number: "50+", label: "Research Papers", icon: Code },
  //   { number: "25+", label: "Patents Filed", icon: Shield },
  //   { number: "100k+", label: "TPS Achieved", icon: Zap },
  //   { number: "15+", label: "Open Source Tools", icon: Database }
  // ];

  const technologies = [
    {
      category: "Consensus Mechanisms",
      items: ["Proof of Innovation", "Quantum-Resistant PBFT", "Hybrid Consensus Protocols"]
    },
    // {
    //   category: "Cryptography",
    //   items: ["Post-Quantum Encryption", "Multi-Party Computation", "Homomorphic Encryption"]
    // },
    {
      category: "Scalability",
      items: ["Sharding 2.0", "State Channels", "Rollup Optimizations"]
    },
    {
      category: "Privacy",
      items: ["Zero-Knowledge Rollups", "Private Smart Contracts", "Anonymous Transactions"]
    }
  ];

  return (
    <section id="technology" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our technology stack represents the forefront of Web3 innovation, built from ground-up research and development
          </p>
        </div>

        {/* Statistics */}
        {/*<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">*/}
        {/*  {stats.map((stat, index) => {*/}
        {/*    const Icon = stat.icon;*/}
        {/*    return (*/}
        {/*      <div key={index} className="text-center">*/}
        {/*        <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">*/}
        {/*          <Icon className="w-8 h-8 text-white" />*/}
        {/*        </div>*/}
        {/*        <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>*/}
        {/*        <div className="text-gray-600">{stat.label}</div>*/}
        {/*      </div>*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</div>*/}

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{tech.category}</h3>
              <ul className="space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 text-sm flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/*<div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 mt-16 text-center text-white">*/}
        {/*  <h3 className="text-2xl font-bold mb-4">Open Source Contributions</h3>*/}
        {/*  <p className="text-purple-100 mb-6 max-w-2xl mx-auto">*/}
        {/*    Many of our innovations are released as open source tools for the Web3 community. Join thousands of developers using our frameworks and protocols.*/}
        {/*  </p>*/}
        {/*  <div className="flex flex-col sm:flex-row gap-4 justify-center">*/}
        {/*    <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium">*/}
        {/*      Explore GitHub*/}
        {/*    </button>*/}
        {/*    <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-medium">*/}
        {/*      Documentation*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default Technology;