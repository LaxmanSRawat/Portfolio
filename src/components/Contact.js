import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "laxman.sr.iitkgp@gmail.com",
      href: "mailto:laxman.sr.iitkgp@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 929-409-1436",
      href: "tel:+19294091436",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "laxman-s-rawat",
      href: "https://linkedin.com/in/laxman-s-rawat",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "LaxmanSRawat",
      href: "https://github.com/LaxmanSRawat",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "New York, NY",
      href: null,
    }
  ];

  const ContactCard = ({ contact }) => {
    const content = (
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-500">
          {contact.icon}
        </div>
        <div className="flex-grow">
          <p className="text-xs text-gsap-muted uppercase tracking-wider mb-0.5">{contact.label}</p>
          <span className="text-gsap-text font-medium">{contact.value}</span>
        </div>
      </div>
    );

    if (contact.href) {
      return (
        <a
          href={contact.href}
          target={contact.href.startsWith('http') ? '_blank' : undefined}
          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="block glass-card p-5 card-hover hover:border-primary-500/50 transition-all duration-300 cursor-pointer"
        >
          {content}
        </a>
      );
    }

    return (
      <div className="glass-card p-5">
        {content}
      </div>
    );
  };

  return (
    <section id="contact" className="section-padding bg-gsap-bg">
      <div className="container-max">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contact</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center animate-on-scroll">
              <div className="relative">
                <div className="w-72 h-72 rounded-2xl overflow-hidden border border-gsap-border">
                  <img
                    src="/laxman-photo.jpeg"
                    alt="Laxman Singh Rawat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <a
                  href="mailto:laxman.sr.iitkgp@gmail.com"
                  className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Mail className="text-gsap-bg" size={28} />
                </a>
              </div>
            </div>

            {/* Contact Links */}
            <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <ContactCard key={index} contact={contact} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gsap-border text-center animate-on-scroll">
          <p className="text-gsap-muted text-sm">
            © 2025 Laxman Singh Rawat
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
