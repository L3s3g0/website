import PageHeader from "./components/nav/header";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Conact";
import HomePage from "./pages/Home/Home";

export default function Home() {
  return (
    <div>
      <PageHeader/>
      <HomePage/>
      <AboutPage/>
      <ContactPage/>
    </div>
  );
}
