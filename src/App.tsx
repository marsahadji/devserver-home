// import React from 'react';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Globe,
  Facebook,
  Youtube,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#182e7f] via-[#802175] to-[#347fc2]">
      {/* Header */}
      <header className="fixed w-full bg-black/10 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-end space-x-2">
            <img src="/src/images/icon-light.png" alt="Logo" className="h-10" />
            <span className="text-white text-xl font-bold">
              CleanSoft Solutions
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="https://soltg.com"
              className="px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-all"
            >
              Site Principal
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-32">
        <div className="flex flex-col items-center text-center">
          <div className="animate-float mb-4">
            <img src="/src/images/logo-light@2x.png" alt="Logo" className="h-24" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            CleanSoft Solutions DevHub
          </h1>
          <p className="text-xl text-white/80 max-w-2xl animate-fade-in-delay">
            Bienvenue sur le portail des développeurs de CleanSoft Solutions.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-2">
            <button className="px-8 py-3 bg-white rounded-lg text-[#182e7f] font-semibold flex items-center gap-2 hover:bg-white/90 transition-colors">
              Documentation <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 bg-white/10 rounded-lg text-white font-semibold hover:bg-white/20 transition-colors">
              API Status
            </button>
          </div> */}
        </div>
      </main>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-24 mt-24">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8">Contactez-nous</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-white/80" />
                <a
                  href="mailto:solutions@soltg.com"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  solutions@soltg.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="w-6 h-6 text-white/80" />
                <a
                  href="https://soltg.com"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  soltg.com
                </a>
              </div>
            </div>
            <div className="flex gap-6">
              <a
                href="https://www.x.com/cleansoft_tg"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Twitter className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/company/cleansoft-solutions"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="https://www.facebook.com/cleansoftsolutions"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="https://www.youtube.com/@cleansoftsolutions"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Youtube className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
