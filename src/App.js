import './App.css';
import NavAppBar from './Components/NavAppBar/NavAppBar';
import HeroSection from './Components/HeroSection/HeroSection';
import Build from './Components/Build/Build';
import DeliverInfo from './Components/DeliverInfo/DeliverInfo';
import RequestSection from './Components/RequestSection/RequestSection';
import Template from './Components/Template/Template';
import Feature from './Components/Feature/Feature';
import Review from './Components/Review/Review';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <NavAppBar></NavAppBar>
      <HeroSection></HeroSection>
      <Build></Build>
      <DeliverInfo></DeliverInfo>
      <RequestSection></RequestSection>
      <Template></Template>
      <Feature></Feature>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}

export default App;
