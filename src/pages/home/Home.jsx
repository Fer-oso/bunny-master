import { Hero } from "./components/Hero"
import { FeaturesSection } from "./components/features/FeaturesSection"
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