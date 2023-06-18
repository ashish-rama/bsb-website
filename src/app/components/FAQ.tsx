'use client';

import { Disclosure, Transition } from '@headlessui/react';
import { Container } from './Containter';

const faq = [
  {
    question: <>What is Buyside Bogey?</>,
    answer: (
      <>
        Buyside Bogey is an intuitive, real-time dashboard that allows hedge
        fund managers to view and analyze anonymous bogey predictions from
        across the industry. It's designed to enhance decision-making efficiency
        by aggregating vital insights in one place.
      </>
    ),
  },
  {
    question: <>How are the bogey predictions on Buyside Bogey sourced?</>,
    answer: (
      <>
        The bogey predictions on our platform are collected anonymously from
        hedge fund managers across the industry. This allows us to provide a
        broad and comprehensive view of market sentiment while preserving
        confidentiality.
      </>
    ),
  },
  {
    question: <>How real-time are the updates on Buyside Bogey?</>,
    answer: (
      <>
        Our platform updates in real-time as new bogey predictions are made.
        This ensures that you always have the most current and relevant
        information at your fingertips.
      </>
    ),
  },
  {
    question: <>How does Buyside Bogey ensure the anonymity of its users?</>,
    answer: (
      <>
        We take privacy and anonymity very seriously. All bogey predictions are
        submitted anonymously, and we have robust security measures in place to
        protect the confidentiality of our users.
      </>
    ),
  },
  {
    question: <>Can I customize my Buyside Bogey dashboard?</>,
    answer: (
      <>
        Absolutely! Buyside Bogey is designed to fit your unique needs. You can
        customize your dashboard to focus on specific companies or metrics that
        are most relevant to you.
      </>
    ),
  },
  {
    question: <>How can I join the Buyside Bogey platform?</>,
    answer: (
      <>
        We're thrilled that you're interested in joining Buyside Bogey! Simply
        fill in your details on our waitlist form, and we'll notify you when the
        platform is ready.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <div className="mt-32" id="faq">
      <Container>
        <div className="mt-32 flex flex-col gap-12 lg:flex-row">
          <div className="text-center lg:w-5/12 lg:pl-12 lg:text-left">
            <div className="mb-2.5 text-blue-600 text-sm leading-6 font-semibold tracking-wide uppercase truncate">
              FAQ
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl lg:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              You can find more specific information about our product, pricing,
              and support by scheduling a call with us.
            </p>
          </div>
          <div className="lg:w-7/12">
            <Disclosures />
          </div>
        </div>
      </Container>
    </div>
  );
}

export function Disclosures({ full = false }) {
  return (
    <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
      {faq.map((item, i) => (
        <Disclosure
          as="div"
          key={String(i)}
          className={`mx-auto text-lg ${full ? '' : 'max-w-2xl'}`}
        >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-start justify-between py-6 text-left text-gray-400">
                <span className="font-medium text-gray-900 dark:text-white">
                  {item.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <svg
                    className={`arrow-down h-6 w-6 transform duration-300 ${
                      open ? 'rotate-180' : 'rotate-0'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  className={`pr-12 duration-300 ease-in-out ${
                    open ? '' : 'hidden'
                  }`}
                >
                  <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
