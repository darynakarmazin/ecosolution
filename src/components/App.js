import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import AboutValues from './AboutValues/AboutValues.jsx';
import Electricity from './Electricity/Electricity.jsx';
import Cases from './Cases/Cases.jsx';
import FAQ from './FAQ/FAQ.jsx';
import ContactUs from './ContactUs/ContactUs.jsx';
import Footer from './Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Main />
        <AboutValues />
        <Electricity />
        <Cases />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
