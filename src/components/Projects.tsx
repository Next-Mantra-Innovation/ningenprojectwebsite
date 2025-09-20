import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Hospitality Intelligence Platform",
      description: "A next-gen service platform that blends AI personalization with decentralized data control. ",
      status: "In Development",
      category: "Apps",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["ai", "web3", "decentralize"]
    },
    {
      title: "AI Avatar",
      description: "Seamless AI with nice conversation both in text and audio",
      status: "Research",
      category: "Framework",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["ai", "model", "framework"]
    },
    // {
    //   title: "Quantum Bridge",
    //   description: "Revolutionary cross-chain communication protocol enabling seamless asset transfers.",
    //   status: "Research",
    //   category: "Interoperability",
    //   image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   tags: ["Cross-chain", "DeFi", "Interoperability"]
    // },
    // {
    //   title: "Neural DAO",
    //   description: "AI-powered decentralized governance system with predictive decision-making capabilities.",
    //   status: "Prototype",
    //   category: "Governance",
    //   image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   tags: ["AI", "Governance", "DAO"]
    // }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Beta':
        return 'bg-green-100 text-green-800';
      case 'In Development':
        return 'bg-blue-100 text-blue-800';
      case 'Research':
        return 'bg-purple-100 text-purple-800';
      case 'Prototype':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Innovation Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At our Ningen Project, we don’t just research—we build. Our innovation pipeline transforms bold ideas into working prototypes, scalable platforms, and real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-purple-600">{project.category}</span>
                  <div className="flex space-x-3">
                    {/*<button className="text-gray-600 hover:text-purple-600 transition-colors">*/}
                    {/*  <Github className="w-5 h-5" />*/}
                    {/*</button>*/}
                    {/*<button className="text-gray-600 hover:text-purple-600 transition-colors">*/}
                    {/*  <ExternalLink className="w-5 h-5" />*/}
                    {/*</button>*/}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/*<button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all flex items-center justify-center space-x-2 group mx-auto">*/}
          {/*  <span>View All Projects</span>*/}
          {/*  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />*/}
          {/*</button>*/}
        </div>
      </div>
    </section>
  );
};

export default Projects;