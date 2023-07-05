'use client';

import { Disclosure, Transition } from '@headlessui/react';
import { Container } from './Containter';

const faq = [
  {
    question: <>What is Buyside Bogey?</>,
    answer: (
      <>
        Buyside Bogey is a platform which enables institutional public equities
        investors and portfolio managers to view and analyze anonymized bogey
        estimates for various KPIs across their coverage. By aggregating vital
        insights in one place, we enhance decision-making efficiency to save you
        time, increase bogey accuracy, and drive better investment decisions.
      </>
    ),
  },
  {
    question: <>How are the bogey predictions on Buyside Bogey sourced?</>,
    answer: (
      <>
        The bogey estimates on our platform are collected on an anonymized basis
        from portfolio managers across funds industry-wide. This allows us to
        provide a broad and comprehensive view of market sentiment whilst
        preserving confidentiality.
      </>
    ),
  },
  {
    question: <>How real-time are the updates on Buyside Bogey?</>,
    answer: (
      <>
        Our platform updates in real-time as new bogey estimates are submitted.
        This ensures that you always have the most current and relevant
        information at your fingertips. Our aim is to make stale and outdated
        bogeys a thing of the past.
      </>
    ),
  },
  {
    question: <>How does Buyside Bogey ensure the anonymity of its users?</>,
    answer: (
      <>
        We take privacy and anonymity very seriously. All bogey estimates are
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
        We{"'"}re excited to have you on board! Please sign up for our waitlist
        as we will be notifying investors shortly on a rolling basis once we
        begin onboarding users.
      </>
    ),
  },
  {
    question: <>How much does Buyside Bogey cost?</>,
    answer: (
      <>
        Buyside Bogey will be free for individual new users as we onboard
        investors and add additional features + functionality over time. For
        larger teams or firm-wide inquiries, please contact us directly via our
        Contact form.
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
              For more detailed information regarding the Buyside Bogey
              platform, pricing, or support please contact us directly via our
              Contact form.
            </p>
            <div className="mt-8 mb-8">
              <a href="#contact">
                <span className="group inline-flex items-center font-semibold text-blue-500 transition hover:text-blue-600">
                  Contact us
                  <svg
                    className="mt-0.5 ml-2 -mr-1 stroke-blue-500 stroke-2 group-hover:stroke-blue-600"
                    fill="none"
                    width="11"
                    height="11"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                  >
                    <path
                      className="opacity-0 transition group-hover:opacity-100"
                      d="M0 5h7"
                    ></path>
                    <path
                      className="transition group-hover:translate-x-[3px]"
                      d="M1 1l4 4-4 4"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
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
