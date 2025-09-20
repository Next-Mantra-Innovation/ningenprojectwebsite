import React from 'react';
import { ArrowRight, Beaker, Cpu, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm px-3 py-1 rounded-full">
                Innovation Lab
              </span>
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                Start in 2025
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Inventing the
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Future </span>
              of Intelligence
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At our Ningen Project Labs, we fuse artificial intelligence with decentralized infrastructure to build tomorrow’s tools—today
            </p>
            
            {/*<div className="flex flex-col sm:flex-row gap-4">*/}
            {/*  <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all flex items-center justify-center space-x-2 group">*/}
            {/*    <span>Explore Research</span>*/}
            {/*    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />*/}
            {/*  </button>*/}
            {/*  <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-purple-500 hover:text-purple-600 transition-all">*/}
            {/*    View Projects*/}
            {/*  </button>*/}
            {/*</div>*/}
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Beaker className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Research</h3>
                <p className="text-gray-600 text-sm">Algorithm, Model, Framework and Tools</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow mt-8">
                <Cpu className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Next gen Artificial Intelligence</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow -mt-4">
                <Zap className="w-12 h-12 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Development</h3>
                <p className="text-gray-600 text-sm">Intelligence for daily activity</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-xl text-white mt-4">
                <div className="text-2xl font-bold mb-2">2</div>
                <p className="text-purple-100">Active Research Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;