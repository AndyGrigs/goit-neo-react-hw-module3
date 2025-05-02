
import { Github, Twitter, Linkedin, ArrowRight, Rocket,  } from 'lucide-react';
import Hreader from './components/Hreader';
import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';

const footerLinks = [
  { icon: Github, href: 'https://github.com', name: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', name: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', name: 'LinkedIn' }
]

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hreader/>
      


      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-indigo-600">Phonebook</span>
                </h1>
              </div>

              <ContactForm/>
              <SearchBox/>
              
            </main>
          </div>
        </div>
    
      </div>


      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            {footerLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-300"
              >
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-base text-gray-400">
              &copy; 2024 RocketApp. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;