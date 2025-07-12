import Features from './components/Features';
import Services from './components/Services';
import WhyInvest from './components/WhyInvest';
import { Hero } from './components/Hero';
import SobreNosotros from './pages/sobrenosotros/SobreNosotros';
import { Carousel } from './components/Carousel';
import {Bunny} from './components/Bunny';


function App() {
  return (
<div className="w-7xl mx-auto"> 
      <Hero />
      <Features />
      <Carousel />
      <Services />
      <Bunny />
    {/* <WhyInvest />*/}
</div>
  );
}

export default App;
