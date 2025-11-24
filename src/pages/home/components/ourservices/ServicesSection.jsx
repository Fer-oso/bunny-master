import { Container } from "../../../../routes/layout/Container";
import { HeroSlider } from "../../../servicios/components/HeroSlider";
import { StatsSection } from "../../../servicios/components/StatsSection";
import { services } from "../../../../utils/data/services";
import ServicesGrid from "./ServicesGrid";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";

const ServicesSection = () => {
 
  return (
    <Container id={"services"}>
      <div>
        <div className="min-h-screen  py-15 ">
          <ServicesGrid services={services} />
        </div>
        <HeroSlider />
        <StatsSection />
        <Testimonials />

        <ContactForm />
      </div>
    </Container>
  );
};

export default ServicesSection;
