import './App.css';
import About from './components/about';
import FAQ from './components/faq';
import Features from './components/feature';
import Header from './components/header';
import WhyUs from './components/why_us';
import Working from './components/working';
import MentorNFeedback from './mentor_n_feedback';

function App() {
  return (
    <div className="App">
      <Header/>
      <Working/>
      <WhyUs/>
      <MentorNFeedback/>
      <Features/>
      <FAQ/>
      <About/>
    </div>
  );
}

export default App;
