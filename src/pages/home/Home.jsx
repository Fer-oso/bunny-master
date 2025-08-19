import { FeaturesSection } from "./components/features/FeaturesSection"
import { Hero } from "./components/hero/Hero"
import ServicesSection from "./components/ourservices/ServicesSection"

export const Home = () =>{
    return (
     <>  
     <Hero />
     <FeaturesSection />
     <ServicesSection />
     </>
    )
}