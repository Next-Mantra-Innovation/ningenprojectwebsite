import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Innovation Officer",
      bio: "Former MIT researcher with 15+ years in distributed systems and blockchain architecture.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: ["Consensus Protocols", "Distributed Systems", "Cryptography"]
    },
    {
      name: "Alex Rodriguez",
      role: "Head of Research",
      bio: "PhD in Computer Science, pioneering work in zero-knowledge proofs and privacy-preserving technologies.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: ["Zero-Knowledge Proofs", "Privacy Tech", "Formal Verification"]
    },
    {
      name: "Dr. Marcus Kim",
      role: "Director of Protocol Development",
      bio: "Former Google engineer specializing in large-scale distributed systems and blockchain scalability.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: ["Scalability", "Protocol Design", "Performance Optimization"]
    }
  ];

  const stats = [
    { number: "25+", label: "Researchers" },
    { number: "12", label: "PhD Holders" },
    { number: "8", label: "Former Big Tech" },
    { number: "15+", label: "Countries" }
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            World-Class Research Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of researchers, engineers, and innovators brings together expertise from leading academic institutions and technology companies
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="text-gray-600 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Research Team</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            We're always looking for brilliant minds to join our mission of advancing Web3 technology. If you're passionate about blockchain innovation, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-medium">
              Research Internships
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;