import { Header } from '@/src/components/header';
import { Abstract } from '@/src/dashboard-sections/abstract';
import { WhyIbadan } from '@/src/dashboard-sections/why-ibadan';
import { HeroSection } from '@/src/dashboard-sections/hero-section';
import { Programs } from '@/src/dashboard-sections/programs';
import { Event } from '@/src/dashboard-sections/event';
import { Footer } from '@/src/dashboard-sections/footer';
import { JoinUs } from '@/src/dashboard-sections/join-us';
import { Housing } from '@/src/dashboard-sections/housing';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center font-clash text-4xl font-semibold">
          ...Loading
        </div>
      }
    >
      <div className=" pt-12 flex flex-col  px-[clamp(1.8rem,5vw,8.5rem)]">
        <Header src="/logo.svg" />
        <HeroSection />
      </div>
      <Abstract />
      <WhyIbadan />
      <Programs />
      <Event />
      <Housing />
      <JoinUs />
      <Footer />
    </Suspense>
  );
}
