import { Bunny } from "./components/Bunny"
import { Carousel } from "./components/Carousel"
import Features from "./components/Features"
import { Hero } from "./components/Hero"
import Services from "../servicios/Services"
import { FeaturesSection } from "./components/FeaturesSection"

export const Home = () =>{
    return (
     <>  
     <Hero />
     <FeaturesSection />
    { /*<Services />*/}
     <Carousel />
    
   {/*  <Bunny /> */}
     
     </>
    )
}