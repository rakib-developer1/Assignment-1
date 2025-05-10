import Companies from "./components/Companies";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import ServicesOne from "./components/ServicesOne";
import ServiceTwo from "./components/ServiceTwo";
import Testimonial from "./components/Testimonial";
import Trial from "./components/Trial";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Companies />
      <ServicesOne />
      <ServiceTwo />
      <Testimonial />
      <Pricing />
      <FAQ />
      <Trial />
      <Footer />
    </div>
  );
};

export default App;
