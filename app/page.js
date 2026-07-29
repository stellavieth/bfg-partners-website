import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Portfolio from '@/components/Portfolio';
import Thesis from '@/components/Thesis';
import Testimonials from '@/components/Testimonials';
import Newsworthy from '@/components/Newsworthy';
import Team from '@/components/Team';
import DealCriteria from '@/components/DealCriteria';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div style={{ background: '#f4f0e7', color: '#1a1a16', minHeight: '100vh', overflowX: 'hidden' }}>
      <Header />
      <Hero />
      <Marquee />
      <Portfolio />
      <Thesis />
      <Testimonials />
      <Newsworthy />
      <Team />
      <DealCriteria />
      <Footer />
    </div>
  );
}
