import Link from 'next/link';
import { Blur } from './Hero';
import { Container } from './Containter';

export function CTA() {
  return (
    <div className="relative pb-16">
      <Blur />
      <Container>
        <div className="relative">
          <div className="mt-6 m-auto space-y-8 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
              Still with us?
            </h1>
            <p className="text-center text-xl text-gray-600 dark:text-gray-300">
              Sign up below and don't get left behind – users will be notified
              on a rolling basis for onboarding.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                // href="https://mjkcbhiln9o.typeform.com/to/I6Lo0PRY"
                href="/waitlist"
                // rel="noopener noreferrer"
                // target="_blank"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-blue-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">
                  Join the Waitlist →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
