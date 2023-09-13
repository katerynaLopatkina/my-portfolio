import logo from './logo.svg';
import './App.css';
import { Header } from './header/header';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { About } from './about/about';
import { Footer } from './footer/footer';
import './media.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <Skills/>
      <Portfolio/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
