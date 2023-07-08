import { ContactUs } from '../components/ContactUs';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default function Contact() {
  return (
    <div className="">
      <main className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 mb-40">
        <Header />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
