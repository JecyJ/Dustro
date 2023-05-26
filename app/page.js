import Aboutus from "@components/construction/Aboutus";
import Contact from "@components/construction/Contact";
import Hero from "@components/construction/Hero";
import OilRig from "@components/construction/OilRig";
import Portfolio from "@components/construction/Portfolio";
import Services from "@components/construction/Services";
import Testimonials from "@components/construction/Testimonials";



const Construction = () => {
  return (
    <section>
      <Hero />
      <Aboutus />
      <Services />
      <Portfolio />
      <Contact />
      <Testimonials />
      <OilRig />    
    </section>
  )
}

export default Construction;
