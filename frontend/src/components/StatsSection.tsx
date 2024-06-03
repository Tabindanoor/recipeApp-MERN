import  { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const StatsBox = ({ title, end }) => (
  <div className="p-6 bg-white shadow-lg rounded-lg text-center">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <CountUp end={end} duration={2.5} className="text-4xl font-bold text-orange-600" />
  </div>
);

const StatsSection = () => {
  const [stats, setStats] = useState({
    happyCustomers: 0,
    totalListings: 0,
    featuredListings: 0,
    ourClients: 0,
  });

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setStats({
        happyCustomers: 1024,
        totalListings: 512,
        featuredListings: 128,
        ourClients: 256,
      });
    }, 2000);
  }, []);

  return (
    <div className="flex flex-wrap justify-around rounded-2xl p-6 bg-orange-200">
      <StatsBox title="Happy Customers" end={stats.happyCustomers} />
      <StatsBox title="Total Listings" end={stats.totalListings} />
      <StatsBox title="Featured Listings" end={stats.featuredListings} />
      <StatsBox title="Our Clients" end={stats.ourClients} />
    </div>
  );
};

export default StatsSection;
