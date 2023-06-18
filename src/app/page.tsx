import { About } from './components/About';
import { CTA } from './components/CTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

export default function Home() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto px-6 sm:px-8">
      <Header />
      <main className="space-y-40 mb-40">
        <Hero />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
