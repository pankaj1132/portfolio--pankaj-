
import styles from './App.module.css' 
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar'; 
import "@fontsource/outfit"
import "@fontsource/roboto"
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact.jsx/Contact';

function App() {
  return (

  <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    
    
  </div>
    
  


   

  )
}

export default App
