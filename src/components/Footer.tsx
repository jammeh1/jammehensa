import { Droplet, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-2 rounded-lg">
                <Droplet className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Bati-Ngalun Company</h3>
                <p className="text-sm text-gray-400">Water Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing reliable borehole drilling and water solutions across The Gambia.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Connect With Us</h4>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
            >
              <Facebook className="w-5 h-5" />
              <span>Follow us on Facebook</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Stay updated with our latest projects and community impact.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Bati-Ngalun Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
