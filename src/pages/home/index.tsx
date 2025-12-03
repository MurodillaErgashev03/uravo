import Banner from './components/banner';
import Connectivity from './section/connectivity';
import Efficiency from './section/efficiency';
import BusinessFeatures from './section/heritage';
import Hero from './section/hero';
import Issues from './section/Issues';
import Pricing from './section/pricing';
import Savings from './section/savings';
import ComparisonTable from './section/strengths/strengths';
import FlowSection from 'src/pages/home/section/implementation';
// import BusinessFeatures from './section/heritage';
// import Hero from './section/hero';
// import Issues from './section/Issues';
import CaseStudySection from 'src/pages/home/section/casestudy';
import OtherServices from 'src/pages/home/section/otherservices';
import ContactSection from 'src/pages/home/section/form';

function Home() {
  return (
    <div>
      <Hero />
      <Issues />
      <BusinessFeatures />
      <Savings />
      <Banner />
      <Efficiency />
      <Connectivity />
      <Banner />
      <Pricing />
      <ComparisonTable />
      <Banner />
      <FlowSection />
      <CaseStudySection />
      <OtherServices />
      <ContactSection />
    </div>
  );
}

export default Home;
