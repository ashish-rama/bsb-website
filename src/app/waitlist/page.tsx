import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import WaitlistForm from '../components/WaitlistForm';

export default function WaitlistPage() {
  return (
    <div className="">
      <main className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 mb-40">
        <Header />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
