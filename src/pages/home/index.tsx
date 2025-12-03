import FlowSection from 'src/pages/home/section/implementation';
import BusinessFeatures from './section/heritage';
import Hero from './section/hero';
import Issues from './section/Issues';
import CaseStudySection from 'src/pages/home/section/casestudy';
import OtherServices from 'src/pages/home/section/otherservices';
import ContactSection from 'src/pages/home/section/form';

function Home() {
  return (
    <div>
      <Hero />
      <Issues />
      <BusinessFeatures />
      <FlowSection />
      <CaseStudySection />
      <OtherServices />
      <ContactSection/>
    </div>
  );
}

export default Home;
