import Banner from './components/banner';
import Connectivity from './section/connectivity';
import Efficiency from './section/efficiency';
import BusinessFeatures from './section/heritage';
import Hero from './section/hero';
import Issues from './section/Issues';
import Pricing from './section/pricing';
import Savings from './section/savings';
import ComparisonTable from './section/strengths/strengths';

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
    </div>
  );
}

export default Home;
