import React from 'react';
import { Mail, MapPin, Phone, Send, Globe, Users } from 'lucide-react';

const Contact = () => {
  const locations = [
    {
      city: "Estonia",
      address: "",
      type: "HQ"
    },
    // {
    //   city: "Zurich",
    //   address: "ETH District, Crypto Valley",
    //   type: "Research Outpost"
    // },
    // {
    //   city: "Singapore",
    //   address: "Fintech Hub, Marina Bay",
    //   type: "Asia Office"
    // }
  ];

  const partnerships = [
    "Leading Universities",
    "Research Institutions",
    "AI Projects",
    "Enterprise Partners"
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're interested in our research, want to collaborate, or explore partnership opportunities, we'd love to connect
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">General Inquiries</h4>
                    <p className="text-gray-600">research [at] ningenproject.org</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Partnerships</h4>
                    <p className="text-gray-600">partners [at] ningenproject.org</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-cyan-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Media & Press</h4>
                    <p className="text-gray-600">press [at] ningenproject.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h3>
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{location.city}</h4>
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                        {location.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnerships */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Types</h3>
              <div className="grid grid-cols-2 gap-3">
                {partnerships.map((partnership, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg text-center text-sm font-medium">
                    {partnership}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            {/*<form className="space-y-6">*/}
            {/*  <div className="grid grid-cols-2 gap-4">*/}
            {/*    <div>*/}
            {/*      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">*/}
            {/*        First Name*/}
            {/*      </label>*/}
            {/*      <input*/}
            {/*        type="text"*/}
            {/*        id="firstName"*/}
            {/*        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">*/}
            {/*        Last Name*/}
            {/*      </label>*/}
            {/*      <input*/}
            {/*        type="text"*/}
            {/*        id="lastName"*/}
            {/*        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*  </div>*/}

            {/*  <div>*/}
            {/*    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">*/}
            {/*      Email*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*      type="email"*/}
            {/*      id="email"*/}
            {/*      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"*/}
            {/*    />*/}
            {/*  </div>*/}

            {/*  <div>*/}
            {/*    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">*/}
            {/*      Subject*/}
            {/*    </label>*/}
            {/*    <select*/}
            {/*      id="subject"*/}
            {/*      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"*/}
            {/*    >*/}
            {/*      <option>Research Collaboration</option>*/}
            {/*      <option>Partnership Inquiry</option>*/}
            {/*      <option>Press/Media</option>*/}
            {/*      <option>General Question</option>*/}
            {/*      <option>Other</option>*/}
            {/*    </select>*/}
            {/*  </div>*/}

            {/*  <div>*/}
            {/*    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">*/}
            {/*      Message*/}
            {/*    </label>*/}
            {/*    <textarea*/}
            {/*      id="message"*/}
            {/*      rows={4}*/}
            {/*      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"*/}
            {/*      placeholder="Tell us about your project or inquiry..."*/}
            {/*    ></textarea>*/}
            {/*  </div>*/}

            {/*  <button*/}
            {/*    type="submit"*/}
            {/*    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all flex items-center justify-center space-x-2 group"*/}
            {/*  >*/}
            {/*    <span>Send Message</span>*/}
            {/*    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />*/}
            {/*  </button>*/}
            {/*</form>*/}
            <iframe
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              width="520"
              height="700"
              src="https://docs.google.com/forms/d/e/1FAIpQLSegIcNApaI7nlVXDbf3lQyJfDt7vskp4351wVypPzyLVHfY4g/viewform?usp=header"

            ></iframe>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;