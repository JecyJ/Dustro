import Aboutus from "@components/construction/Aboutus";
import Contact from "@components/construction/Contact";
import Hero from "@components/construction/Hero";
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
    </section>
  )
}

export default Construction;
