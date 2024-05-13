import Nav from "./components/nav/page";
import Hero from "./components/hero/page";
import Features from "./components/features/page";
import Featured from "./components/featured/page";
import Contact from "./components/contact/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <Featured />
      <Contact />
      <Footer />
    </div>
  );
}
