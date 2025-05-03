import { Github, Twitter, Linkedin, ArrowRight, Rocket } from "lucide-react";
import Hreader from "./components/Hreader";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import { useState } from "react";
import Footer from "./components/Footer";
import ContactList from "./components/ContactList";

const footerLinks = [
  { icon: Github, href: "https://github.com", name: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", name: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", name: "LinkedIn" },
];

const startState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(startState);
   
  const addContact =(newContact)=>{
      setContacts(prev=> [...prev, newContact])
   }
   const deleteContact =()=>{}
   const filterContacts =()=>{}

  return (
    <div className=" flex flex-col min-h-screen bg-white">
      <Hreader />

      <div className=" flex-grow bg-white overflow-hidden ">
        <div className="max-w-7xl mx-auto">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center">
                <h1 className="text-4xl  tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-center text-indigo-600">Phonebook</span>
                </h1>
              </div>

              <ContactForm anAddContact={addContact} />
              <SearchBox />
              <ContactList contacts={contacts}/>
            </main>
          </div>
      </div>

      {/* Footer */}
      <Footer links={footerLinks}/>
    </div>
  );
}

export default App;
