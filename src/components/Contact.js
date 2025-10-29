import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, MessageCircle, Github } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link
    const mailtoLink = `mailto:laxman.sr.iitkgp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "laxman.sr.iitkgp@gmail.com",
      href: "mailto:laxman.sr.iitkgp@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 929-409-1436",
      href: "tel:+19294091436",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "laxman-s-rawat",
      href: "https://linkedin.com/in/laxman-s-rawat",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "LaxmanSRawat",
      href: "https://github.com/LaxmanSRawat",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "NY, USA",
      href: null,
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-github-accent">
      <div className="container-max">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-github-400 max-w-2xl mx-auto">
            Ready to collaborate on innovative solutions? Let's connect and discuss opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end animate-on-scroll">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-github-border shadow-2xl">
                <img 
                  src={`${process.env.PUBLIC_URL}/laxman-photo.jpeg`}
                  alt="Laxman Singh Rawat" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle className="text-white" size={32} />
              </div>
            </div>
          </div>

          {/* Contact Information and Form */}
          <div className="animate-on-scroll">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <MessageCircle className="text-primary-400" size={24} />
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm currently pursuing my Master's in Computer Science at NYU and actively seeking 
                opportunities in solution architecture, full-stack development, and automation. 
                Whether you're looking for a skilled developer, have a project in mind, or want to 
                discuss innovative technology solutions, I'd love to hear from you.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With 5+ years of experience at AB InBev, I bring expertise in enterprise-scale 
                solutions, cloud technologies, and process automation. Let's explore how we can 
                work together to create impactful solutions.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index}
                  className="bg-github-900/50 backdrop-blur-sm rounded-xl p-6 border border-github-border hover:border-primary-500/50 transition-all duration-300 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} p-3 flex items-center justify-center text-white`}>
                      {contact.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">{contact.label}</h4>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-white hover:text-primary-400 transition-colors duration-300 font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-white font-medium">{contact.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll mt-8" style={{ animationDelay: '0.2s' }}>
            <div className="bg-github-900/50 backdrop-blur-sm rounded-xl p-8 border border-github-border">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Send className="text-primary-400" size={24} />
                Send a Message
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-github-900 border border-github-border rounded-lg text-github-50 placeholder-github-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-github-900 border border-github-border rounded-lg text-github-50 placeholder-github-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-github-900 border border-github-border rounded-lg text-github-50 placeholder-github-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                    placeholder="Project Collaboration Opportunity"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-github-900 border border-github-border rounded-lg text-github-50 placeholder-github-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300 resize-vertical"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-dark-700 text-center animate-on-scroll">
          <p className="text-gray-400">
            © 2025 Laxman Singh Rawat. Built with React, TailwindCSS, and passion for clean code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
