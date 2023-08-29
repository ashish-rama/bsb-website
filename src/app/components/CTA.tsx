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
            <h1
              data-aos="fade-down"
              className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl"
            >
              Still with us?
            </h1>
            <p
              data-aos="fade-down"
              className="text-center text-xl text-gray-600 dark:text-gray-300"
            >
              Sign up below and don't get left behind – users will be notified
              on a rolling basis for onboarding.
            </p>
            <div
              data-aos="fade-down"
              className="flex flex-wrap justify-center gap-6"
            >
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
        {/* <div className="relative rounded-xl overflow-hidden ring shadow lg:grid lg:grid-cols-2 lg:gap-0 lg:py-10">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            ></rect>
          </svg>
          <div className="relative z-20 p-10 lg:pl-16 lg:pr-0 lg:py-16">
            <div className="flex items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-700">
                  Tremor{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-t from-indigo-500 via-sky-500 to-cyan-500">
                    {' '}
                    Platform{' '}
                  </span>
                </h2>
                <p className="mt-4 text-md sm:text-lg leading-6 text-slate-500 lg:pr-12">
                  Connect to your database, write queries and build interactive
                  dashboards. All in one place, blazingly fast.
                </p>
                <div className="group mt-12 relative inline-flex items-center whitespace-nowrap w-full sm:w-fit">
                  <a
                    href="https://platform.tremor.so"
                    className="w-full sm:w-fit"
                  >
                    <div className="absolute transition-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-xl blur-md group-hover:opacity-50 group-hover:-inset-1 group-hover:duration-200"></div>
                    <div className="relative shadow-tremor flex items-center justify-center bg-slate-800 text-white text-center rounded-xl py-3 px-8 text-md font-medium transition-all">
                      Apply for Early Access
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:flex lg:items-center">
            <div className="absolute z-40 inset-y-0 right-0 w-24 bg-gradient-to-l from-white"></div>
            <div className="hidden lg:flex items-center">
              <div className="relative animate-hero-button1-slide-up-fade">
                <div className="absolute transition-all opacity-30 -inset-px bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-xl blur-xl z-0"></div>
                <div className="relative min-h-[144px] min-w-[144px] rounded-2xl border bg-gradient-to-b from-white to-blue-50 shadow-xl shadow-blue-500/20 z-0">
                  <div className="absolute inset-2 rounded-lg bg-gradient-to-t from-blue-500 via-sky-500 to-cyan-500 p-1 shadow-xl">
                    <div className="relative flex h-full will-change-transform w-full items-center justify-center overflow-hidden rounded-md bg-black/40 shadow-sm shadow-white/40">
                      <div className="z-2">
                        <svg
                          width="150"
                          height="150"
                          viewBox="0 0 150 150"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M48.8548 0H39.5314C40.0305 1.02133 40.553 2.05911 41.1001 3.11121C50.1394 20.4943 65.8615 41.777 92.5991 57.3917C119.538 73.124 135.378 94.5679 144.481 112.074C146.699 116.34 148.518 120.373 150 124.033V104.78C140.89 87.5637 125.251 66.7352 98.9654 51.3845C73.6962 36.6273 58.193 16.8446 48.8548 0ZM150 102.668V0H49.9995C59.2989 16.6182 74.6311 36.0153 99.4697 50.521C125.121 65.5016 140.709 85.6609 150 102.668ZM29.5334 0H38.4194C38.986 1.16994 39.5834 2.36186 40.2129 3.57256C49.3163 21.0791 65.156 42.523 92.0948 58.2553C118.832 73.87 134.555 95.1527 143.594 112.536C146.283 117.708 148.381 122.534 150 126.761V150H149.082L149.071 149.939L149.062 149.896C149.043 149.791 149.012 149.634 148.971 149.43C148.887 149.021 148.759 148.42 148.576 147.644C148.21 146.093 147.629 143.846 146.763 141.053C145.031 135.468 142.162 127.696 137.61 118.943C128.507 101.437 112.667 79.9927 85.7285 64.2605C58.9909 48.6457 43.2688 27.3631 34.2295 9.97992C32.403 6.46731 30.8495 3.1143 29.5334 0ZM28.4485 0H19.9791C21.7029 4.80627 24.0949 10.5736 27.359 16.8506C36.3982 34.2338 52.1203 55.5164 78.8579 71.1312C105.797 86.8635 121.636 108.307 130.74 125.814C135.292 134.567 138.16 142.338 139.892 147.924C140.118 148.654 140.325 149.347 140.514 150H148.064C148.046 149.905 148.022 149.781 147.991 149.63C147.909 149.231 147.783 148.639 147.602 147.874C147.242 146.343 146.666 144.119 145.808 141.349C144.09 135.811 141.243 128.096 136.723 119.405C127.684 102.021 111.962 80.7388 85.2242 65.124C58.2854 49.3917 42.4457 27.9478 33.3423 10.4413C31.4265 6.75696 29.8088 3.24662 28.4485 0ZM10.8687 0H18.9172C20.6631 4.91045 23.1079 10.8431 26.4717 17.312C35.5751 34.8186 51.4148 56.2624 78.3536 71.9947C105.091 87.6095 120.813 108.892 129.853 126.275C134.372 134.967 137.22 142.681 138.937 148.22C139.13 148.841 139.308 149.435 139.473 150H131.424C129.678 145.089 127.234 139.156 123.869 132.687C114.766 115.18 98.9263 93.7362 71.9874 78.0039C45.2498 62.3891 29.5277 41.1065 20.4885 23.7234C15.9688 15.0317 13.1213 7.31728 11.4042 1.7785C11.2117 1.15775 11.0335 0.564352 10.8687 0ZM9.82735 0H2.27699C2.29524 0.0948501 2.3195 0.218155 2.35021 0.368905C2.43154 0.768066 2.55814 1.35962 2.73851 2.12481C3.09924 3.65524 3.67496 5.88002 4.53345 8.64922C6.25054 14.188 9.09811 21.9024 13.6178 30.5941C22.657 47.9772 38.3791 69.2598 65.1167 84.8746C92.0556 100.607 107.895 122.051 116.999 139.557C118.915 143.242 120.533 146.753 121.893 150H130.363C128.639 145.193 126.247 139.426 122.982 133.148C113.943 115.765 98.2208 94.4822 71.4832 78.8674C44.5443 63.1351 28.7047 41.6913 19.6013 24.1847C15.0496 15.4315 12.1806 7.66028 10.449 2.07461C10.2228 1.34492 10.016 0.652492 9.82735 0ZM0 0H1.25944C1.26419 0.0259354 1.27052 0.0601132 1.2785 0.102383C1.29845 0.208014 1.32871 0.364183 1.37034 0.568541C1.45361 0.977252 1.58239 1.57874 1.76518 2.35423C2.13075 3.90517 2.71243 6.15231 3.57829 8.94533C5.30992 14.531 8.17888 22.3022 12.7305 31.0554C21.834 48.562 37.6736 70.0059 64.6124 85.7381C91.3501 101.353 107.072 122.636 116.111 140.019C117.938 143.532 119.492 146.885 120.808 150H111.921C111.355 148.83 110.758 147.639 110.128 146.428C101.025 128.921 85.1851 107.478 58.2463 91.7453C31.5086 76.1306 15.7865 54.8479 6.74729 37.4648C3.86499 31.9219 1.66272 26.7764 0 22.3392V0ZM0 25.1167V44.5703C9.05867 61.9096 24.7592 83.0701 51.3755 98.614C76.6455 113.372 92.1488 133.155 101.487 150H110.809C110.31 148.979 109.788 147.941 109.241 146.889C100.202 129.506 84.4796 108.224 57.742 92.6089C30.8031 76.8766 14.9635 55.4327 5.86008 37.9262C3.46855 33.3271 1.54156 28.9991 0 25.1167ZM50.8712 99.4776C75.7105 113.984 91.043 133.381 100.342 150H0V46.7024C9.24882 63.8396 24.9032 84.3122 50.8712 99.4776Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                      <div className="absolute inset-0 z-3 rounded-md bg-gradient-to-t from-blue-500 via-sky-500 to-cyan-500 opacity-50 shadow-[inset_0_0_16px_4px_rgba(0,0,0,1)]"></div>
                      <div className="absolute transition-all inset-[13px] z-5 rounded-md bg-white/10 p-1.5 backdrop-blur-[1px]">
                        <div className="relative flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-lg shadow-black/40 transition-all">
                          <div className="absolute inset-0"></div>
                          <div className="flex h-full w-full items-center justify-center">
                            <div className="scale-[0.75]">
                              <svg
                                width="81"
                                height="18"
                                viewBox="0 0 81 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.4881 17.9731C4.15971 17.9731 2.17142 16.7958 2.17142 13.8134V7.82235H0V4.78759H2.30223V1.30809L5.83406 0V4.78759H8.68569V7.82235H5.83406V12.95C5.83406 14.1012 6.40962 14.6767 7.63922 14.6767C8.03164 14.6767 8.39791 14.5982 8.68569 14.5197V17.6853C8.34558 17.79 7.40376 17.9731 6.4881 17.9731Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M11.0913 17.5807V4.78759H14.7017V6.64507C15.3295 5.23234 16.5068 4.36901 18.1288 4.36901C18.3905 4.36901 18.9137 4.42133 19.0707 4.44749V8.16245C18.6521 8.05781 18.2335 8.03164 17.7364 8.03164C16.3498 8.03164 15.0679 8.9473 14.754 10.1769V17.5807H11.0913Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M26.764 17.9731C23.0752 17.9731 20.0405 15.5139 20.0405 11.0926C20.0405 7.06366 22.9444 4.36901 26.6071 4.36901C30.6621 4.36901 32.9644 7.19447 32.9644 11.1449C32.9644 11.4588 32.9382 12.0082 32.912 12.2175H23.8601C23.9386 13.9703 25.5606 14.9383 27.1565 14.9383C28.8831 14.9383 30.3482 14.4674 32.0225 13.3686V16.5342C30.8453 17.2929 29.3279 17.9731 26.764 17.9731ZM23.9386 9.75832H29.2756C29.1971 8.55488 28.3599 7.40376 26.6071 7.40376C25.0112 7.40376 24.0171 8.6072 23.9386 9.75832Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M50.0666 4.36901C52.4734 4.36901 54.6449 6.01719 54.6449 9.05195V17.5807H50.9822V9.96761C50.9822 8.58104 50.2235 7.7177 48.9939 7.7177C48.0783 7.7177 47.3457 8.24094 46.8225 8.97346V17.5807H43.1599V9.96761C43.1599 8.58104 42.4273 7.7177 41.1977 7.7177C40.2298 7.7177 39.4972 8.2671 38.974 9.05195V17.5807H35.3114V4.78759H38.9217V5.8079C39.628 4.99689 40.7007 4.36901 42.3227 4.36901C43.8139 4.36901 45.2005 4.99689 46.0115 6.20032C46.6655 5.44164 47.9475 4.36901 50.0666 4.36901Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M63.6872 17.9731C59.5536 17.9731 56.7282 14.9907 56.7282 11.1449C56.7282 7.32528 59.5536 4.36901 63.6872 4.36901C67.8207 4.36901 70.6724 7.32528 70.6724 11.1449C70.6724 14.9907 67.8207 17.9731 63.6872 17.9731ZM63.6872 14.5197C65.4662 14.5197 66.8789 13.264 66.8789 11.1449C66.8789 9.07811 65.4662 7.79619 63.6872 7.79619C61.9344 7.79619 60.5216 9.07811 60.5216 11.1449C60.5216 13.264 61.9344 14.5197 63.6872 14.5197Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M73.021 17.5807V4.78759H76.6313V6.64507C77.2592 5.23234 78.4365 4.36901 80.0585 4.36901C80.3201 4.36901 80.8434 4.42133 81.0003 4.44749V8.16245C80.5817 8.05781 80.1631 8.03164 79.6661 8.03164C78.2795 8.03164 76.9976 8.9473 76.6836 10.1769V17.5807H73.021Z"
                                  fill="white"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-hero-button2-slide-up-fade rotate-180">
                <svg
                  width="92"
                  height="136"
                  viewBox="0 0 92 136"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-dashes"
                >
                  <g clipPath="url(#clip0_5425_9821)">
                    <path
                      d="M0 68L92 68"
                      stroke="#E2E8F0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="2 5"
                    ></path>
                    <path
                      d="M0 135L4.6456 135C15.6195 135 25.8755 129.545 32.0094 120.445L46.091 99.5548C52.2248 90.4552 62.4809 85 73.4548 85H92"
                      stroke="#E2E8F0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="2 5"
                    ></path>
                    <path
                      d="M0 1H4.64561C15.6195 1 25.8755 6.455 32.0094 15.555L46.091 36.4452C52.2248 45.5448 62.4809 51 73.4548 51L92 51"
                      stroke="#E2E8F0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="2 5"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_5425_9821">
                      <rect
                        width="92"
                        height="136"
                        fill="white"
                        transform="matrix(1 0 0 -1 0 136)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="space-y-8 w-[250px] animate-hero-button2-slide-up-fade">
                <div className="relative rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor">
                  <div className="relative flex items-center space-x-3 h-full">
                    <span className="font-medium text-slate-500 w-2">1</span>
                    <div className="border-r h-4"></div>
                    <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                      Connect to data source
                    </span>
                  </div>
                </div>
                <div className="rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor">
                  <div className="flex items-center space-x-3 h-full">
                    <span className="font-medium text-slate-500 w-2">2</span>
                    <div className="border-r h-4"></div>
                    <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                      Write queries, get APIs
                    </span>
                  </div>
                </div>
                <div className="rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor">
                  <div className="flex items-center space-x-3 h-full">
                    <span className="font-medium text-slate-500 w-2">3</span>
                    <div className="border-r h-4"></div>
                    <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                      Create dashboards
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center lg:hidden">
              <div className="space-y-8 w-[250px] animate-hero-button2-slide-up-fade">
                <div className="relative rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor">
                  <div className="relative flex items-center space-x-3 h-full">
                    <span className="font-medium text-slate-500 w-2">1</span>
                    <div className="border-r h-4"></div>
                    <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                      Connect to data source
                    </span>
                  </div>
                </div>
                <div className="rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor">
                  <div className="flex items-center space-x-3 h-full">
                    <span className="font-medium text-slate-500 w-2">2</span>
                    <div className="border-r h-4"></div>
                    <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                      Write queries, get APIs
                    </span>
                  </div>
                </div>
                <div className="rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor">
                  <div className="flex items-center space-x-3 h-full">
                    <span className="font-medium text-slate-500 w-2">3</span>
                    <div className="border-r h-4"></div>
                    <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                      Create dashboards
                    </span>
                  </div>
                </div>
              </div>
              <div className="animate-hero-button2-slide-up-fade">
                <svg
                  width="92"
                  height="136"
                  viewBox="0 0 92 136"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-dashes"
                >
                  <g clipPath="url(#clip0_5425_9821)">
                    <path
                      d="M0 68L92 68"
                      stroke="#E2E8F0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="2 5"
                    ></path>
                    <path
                      d="M0 135L4.6456 135C15.6195 135 25.8755 129.545 32.0094 120.445L46.091 99.5548C52.2248 90.4552 62.4809 85 73.4548 85H92"
                      stroke="#E2E8F0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="2 5"
                    ></path>
                    <path
                      d="M0 1H4.64561C15.6195 1 25.8755 6.455 32.0094 15.555L46.091 36.4452C52.2248 45.5448 62.4809 51 73.4548 51L92 51"
                      stroke="#E2E8F0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="2 5"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_5425_9821">
                      <rect
                        width="92"
                        height="136"
                        fill="white"
                        transform="matrix(1 0 0 -1 0 136)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="relative animate-hero-button1-slide-up-fade">
                <div className="absolute transition-all opacity-30 -inset-px bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-xl blur-xl z-0"></div>
                <div className="relative min-h-[144px] min-w-[144px] rounded-2xl border bg-gradient-to-b from-white to-blue-50 shadow-xl shadow-blue-500/20 z-0">
                  <div className="absolute inset-2 rounded-lg bg-gradient-to-t from-blue-500 via-sky-500 to-cyan-500 p-1 shadow-xl">
                    <div className="relative flex h-full will-change-transform w-full items-center justify-center overflow-hidden rounded-md bg-black/40 shadow-sm shadow-white/40">
                      <div className="z-2">
                        <svg
                          width="150"
                          height="150"
                          viewBox="0 0 150 150"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M48.8548 0H39.5314C40.0305 1.02133 40.553 2.05911 41.1001 3.11121C50.1394 20.4943 65.8615 41.777 92.5991 57.3917C119.538 73.124 135.378 94.5679 144.481 112.074C146.699 116.34 148.518 120.373 150 124.033V104.78C140.89 87.5637 125.251 66.7352 98.9654 51.3845C73.6962 36.6273 58.193 16.8446 48.8548 0ZM150 102.668V0H49.9995C59.2989 16.6182 74.6311 36.0153 99.4697 50.521C125.121 65.5016 140.709 85.6609 150 102.668ZM29.5334 0H38.4194C38.986 1.16994 39.5834 2.36186 40.2129 3.57256C49.3163 21.0791 65.156 42.523 92.0948 58.2553C118.832 73.87 134.555 95.1527 143.594 112.536C146.283 117.708 148.381 122.534 150 126.761V150H149.082L149.071 149.939L149.062 149.896C149.043 149.791 149.012 149.634 148.971 149.43C148.887 149.021 148.759 148.42 148.576 147.644C148.21 146.093 147.629 143.846 146.763 141.053C145.031 135.468 142.162 127.696 137.61 118.943C128.507 101.437 112.667 79.9927 85.7285 64.2605C58.9909 48.6457 43.2688 27.3631 34.2295 9.97992C32.403 6.46731 30.8495 3.1143 29.5334 0ZM28.4485 0H19.9791C21.7029 4.80627 24.0949 10.5736 27.359 16.8506C36.3982 34.2338 52.1203 55.5164 78.8579 71.1312C105.797 86.8635 121.636 108.307 130.74 125.814C135.292 134.567 138.16 142.338 139.892 147.924C140.118 148.654 140.325 149.347 140.514 150H148.064C148.046 149.905 148.022 149.781 147.991 149.63C147.909 149.231 147.783 148.639 147.602 147.874C147.242 146.343 146.666 144.119 145.808 141.349C144.09 135.811 141.243 128.096 136.723 119.405C127.684 102.021 111.962 80.7388 85.2242 65.124C58.2854 49.3917 42.4457 27.9478 33.3423 10.4413C31.4265 6.75696 29.8088 3.24662 28.4485 0ZM10.8687 0H18.9172C20.6631 4.91045 23.1079 10.8431 26.4717 17.312C35.5751 34.8186 51.4148 56.2624 78.3536 71.9947C105.091 87.6095 120.813 108.892 129.853 126.275C134.372 134.967 137.22 142.681 138.937 148.22C139.13 148.841 139.308 149.435 139.473 150H131.424C129.678 145.089 127.234 139.156 123.869 132.687C114.766 115.18 98.9263 93.7362 71.9874 78.0039C45.2498 62.3891 29.5277 41.1065 20.4885 23.7234C15.9688 15.0317 13.1213 7.31728 11.4042 1.7785C11.2117 1.15775 11.0335 0.564352 10.8687 0ZM9.82735 0H2.27699C2.29524 0.0948501 2.3195 0.218155 2.35021 0.368905C2.43154 0.768066 2.55814 1.35962 2.73851 2.12481C3.09924 3.65524 3.67496 5.88002 4.53345 8.64922C6.25054 14.188 9.09811 21.9024 13.6178 30.5941C22.657 47.9772 38.3791 69.2598 65.1167 84.8746C92.0556 100.607 107.895 122.051 116.999 139.557C118.915 143.242 120.533 146.753 121.893 150H130.363C128.639 145.193 126.247 139.426 122.982 133.148C113.943 115.765 98.2208 94.4822 71.4832 78.8674C44.5443 63.1351 28.7047 41.6913 19.6013 24.1847C15.0496 15.4315 12.1806 7.66028 10.449 2.07461C10.2228 1.34492 10.016 0.652492 9.82735 0ZM0 0H1.25944C1.26419 0.0259354 1.27052 0.0601132 1.2785 0.102383C1.29845 0.208014 1.32871 0.364183 1.37034 0.568541C1.45361 0.977252 1.58239 1.57874 1.76518 2.35423C2.13075 3.90517 2.71243 6.15231 3.57829 8.94533C5.30992 14.531 8.17888 22.3022 12.7305 31.0554C21.834 48.562 37.6736 70.0059 64.6124 85.7381C91.3501 101.353 107.072 122.636 116.111 140.019C117.938 143.532 119.492 146.885 120.808 150H111.921C111.355 148.83 110.758 147.639 110.128 146.428C101.025 128.921 85.1851 107.478 58.2463 91.7453C31.5086 76.1306 15.7865 54.8479 6.74729 37.4648C3.86499 31.9219 1.66272 26.7764 0 22.3392V0ZM0 25.1167V44.5703C9.05867 61.9096 24.7592 83.0701 51.3755 98.614C76.6455 113.372 92.1488 133.155 101.487 150H110.809C110.31 148.979 109.788 147.941 109.241 146.889C100.202 129.506 84.4796 108.224 57.742 92.6089C30.8031 76.8766 14.9635 55.4327 5.86008 37.9262C3.46855 33.3271 1.54156 28.9991 0 25.1167ZM50.8712 99.4776C75.7105 113.984 91.043 133.381 100.342 150H0V46.7024C9.24882 63.8396 24.9032 84.3122 50.8712 99.4776Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                      <div className="absolute inset-0 z-3 rounded-md bg-gradient-to-t from-blue-500 via-sky-500 to-cyan-500 opacity-50 shadow-[inset_0_0_16px_4px_rgba(0,0,0,1)]"></div>
                      <div className="absolute transition-all inset-[13px] z-5 rounded-md bg-white/10 p-1.5 backdrop-blur-[1px]">
                        <div className="relative flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-lg shadow-black/40 transition-all">
                          <div className="absolute inset-0"></div>
                          <div className="flex h-full w-full items-center justify-center">
                            <div className="scale-[0.75]">
                              <svg
                                width="81"
                                height="18"
                                viewBox="0 0 81 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.4881 17.9731C4.15971 17.9731 2.17142 16.7958 2.17142 13.8134V7.82235H0V4.78759H2.30223V1.30809L5.83406 0V4.78759H8.68569V7.82235H5.83406V12.95C5.83406 14.1012 6.40962 14.6767 7.63922 14.6767C8.03164 14.6767 8.39791 14.5982 8.68569 14.5197V17.6853C8.34558 17.79 7.40376 17.9731 6.4881 17.9731Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M11.0913 17.5807V4.78759H14.7017V6.64507C15.3295 5.23234 16.5068 4.36901 18.1288 4.36901C18.3905 4.36901 18.9137 4.42133 19.0707 4.44749V8.16245C18.6521 8.05781 18.2335 8.03164 17.7364 8.03164C16.3498 8.03164 15.0679 8.9473 14.754 10.1769V17.5807H11.0913Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M26.764 17.9731C23.0752 17.9731 20.0405 15.5139 20.0405 11.0926C20.0405 7.06366 22.9444 4.36901 26.6071 4.36901C30.6621 4.36901 32.9644 7.19447 32.9644 11.1449C32.9644 11.4588 32.9382 12.0082 32.912 12.2175H23.8601C23.9386 13.9703 25.5606 14.9383 27.1565 14.9383C28.8831 14.9383 30.3482 14.4674 32.0225 13.3686V16.5342C30.8453 17.2929 29.3279 17.9731 26.764 17.9731ZM23.9386 9.75832H29.2756C29.1971 8.55488 28.3599 7.40376 26.6071 7.40376C25.0112 7.40376 24.0171 8.6072 23.9386 9.75832Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M50.0666 4.36901C52.4734 4.36901 54.6449 6.01719 54.6449 9.05195V17.5807H50.9822V9.96761C50.9822 8.58104 50.2235 7.7177 48.9939 7.7177C48.0783 7.7177 47.3457 8.24094 46.8225 8.97346V17.5807H43.1599V9.96761C43.1599 8.58104 42.4273 7.7177 41.1977 7.7177C40.2298 7.7177 39.4972 8.2671 38.974 9.05195V17.5807H35.3114V4.78759H38.9217V5.8079C39.628 4.99689 40.7007 4.36901 42.3227 4.36901C43.8139 4.36901 45.2005 4.99689 46.0115 6.20032C46.6655 5.44164 47.9475 4.36901 50.0666 4.36901Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M63.6872 17.9731C59.5536 17.9731 56.7282 14.9907 56.7282 11.1449C56.7282 7.32528 59.5536 4.36901 63.6872 4.36901C67.8207 4.36901 70.6724 7.32528 70.6724 11.1449C70.6724 14.9907 67.8207 17.9731 63.6872 17.9731ZM63.6872 14.5197C65.4662 14.5197 66.8789 13.264 66.8789 11.1449C66.8789 9.07811 65.4662 7.79619 63.6872 7.79619C61.9344 7.79619 60.5216 9.07811 60.5216 11.1449C60.5216 13.264 61.9344 14.5197 63.6872 14.5197Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M73.021 17.5807V4.78759H76.6313V6.64507C77.2592 5.23234 78.4365 4.36901 80.0585 4.36901C80.3201 4.36901 80.8434 4.42133 81.0003 4.44749V8.16245C80.5817 8.05781 80.1631 8.03164 79.6661 8.03164C78.2795 8.03164 76.9976 8.9473 76.6836 10.1769V17.5807H73.021Z"
                                  fill="white"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-hero-button2-slide-up-fade">
                <svg
                  width="92"
                  height="136"
                  viewBox="0 0 92 136"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-dashes-fast"
                >
                  <g clipPath="url(#clip0_5425_9821)">
                    <path
                      d="M0 68L92 68"
                      stroke="#E2E8F0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="2 5"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_5425_9821">
                      <rect
                        width="92"
                        height="136"
                        fill="white"
                        transform="matrix(1 0 0 -1 0 136)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="relative animate-hero-button2-slide-up-fade">
                <div className="absolute -inset-px opacity-50 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 overflow-visible blur-sm"></div>
                <div className="relative w-[250px]">
                  <div className="rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor h-9">
                    <div className="flex items-center space-x-3 h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-slate-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                        Embedded analytics
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 relative flex justify-center lg:hidden">
            <div className="absolute z-40 inset-y-0 left-0 w-24 bg-gradient-to-r from-white"></div>
            <div className="absolute z-40 inset-y-0 right-0 w-24 bg-gradient-to-l from-white"></div>
            <div className="mt-10 mb-20">
              <div className="hidden lg:flex items-center">
                <div className="relative animate-hero-button1-slide-up-fade">
                  <div className="absolute transition-all opacity-30 -inset-px bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-xl blur-xl z-0"></div>
                  <div className="relative min-h-[144px] min-w-[144px] rounded-2xl border bg-gradient-to-b from-white to-blue-50 shadow-xl shadow-blue-500/20 z-0">
                    <div className="absolute inset-2 rounded-lg bg-gradient-to-t from-blue-500 via-sky-500 to-cyan-500 p-1 shadow-xl">
                      <div className="relative flex h-full will-change-transform w-full items-center justify-center overflow-hidden rounded-md bg-black/40 shadow-sm shadow-white/40">
                        <div className="z-2">
                          <svg
                            width="150"
                            height="150"
                            viewBox="0 0 150 150"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M48.8548 0H39.5314C40.0305 1.02133 40.553 2.05911 41.1001 3.11121C50.1394 20.4943 65.8615 41.777 92.5991 57.3917C119.538 73.124 135.378 94.5679 144.481 112.074C146.699 116.34 148.518 120.373 150 124.033V104.78C140.89 87.5637 125.251 66.7352 98.9654 51.3845C73.6962 36.6273 58.193 16.8446 48.8548 0ZM150 102.668V0H49.9995C59.2989 16.6182 74.6311 36.0153 99.4697 50.521C125.121 65.5016 140.709 85.6609 150 102.668ZM29.5334 0H38.4194C38.986 1.16994 39.5834 2.36186 40.2129 3.57256C49.3163 21.0791 65.156 42.523 92.0948 58.2553C118.832 73.87 134.555 95.1527 143.594 112.536C146.283 117.708 148.381 122.534 150 126.761V150H149.082L149.071 149.939L149.062 149.896C149.043 149.791 149.012 149.634 148.971 149.43C148.887 149.021 148.759 148.42 148.576 147.644C148.21 146.093 147.629 143.846 146.763 141.053C145.031 135.468 142.162 127.696 137.61 118.943C128.507 101.437 112.667 79.9927 85.7285 64.2605C58.9909 48.6457 43.2688 27.3631 34.2295 9.97992C32.403 6.46731 30.8495 3.1143 29.5334 0ZM28.4485 0H19.9791C21.7029 4.80627 24.0949 10.5736 27.359 16.8506C36.3982 34.2338 52.1203 55.5164 78.8579 71.1312C105.797 86.8635 121.636 108.307 130.74 125.814C135.292 134.567 138.16 142.338 139.892 147.924C140.118 148.654 140.325 149.347 140.514 150H148.064C148.046 149.905 148.022 149.781 147.991 149.63C147.909 149.231 147.783 148.639 147.602 147.874C147.242 146.343 146.666 144.119 145.808 141.349C144.09 135.811 141.243 128.096 136.723 119.405C127.684 102.021 111.962 80.7388 85.2242 65.124C58.2854 49.3917 42.4457 27.9478 33.3423 10.4413C31.4265 6.75696 29.8088 3.24662 28.4485 0ZM10.8687 0H18.9172C20.6631 4.91045 23.1079 10.8431 26.4717 17.312C35.5751 34.8186 51.4148 56.2624 78.3536 71.9947C105.091 87.6095 120.813 108.892 129.853 126.275C134.372 134.967 137.22 142.681 138.937 148.22C139.13 148.841 139.308 149.435 139.473 150H131.424C129.678 145.089 127.234 139.156 123.869 132.687C114.766 115.18 98.9263 93.7362 71.9874 78.0039C45.2498 62.3891 29.5277 41.1065 20.4885 23.7234C15.9688 15.0317 13.1213 7.31728 11.4042 1.7785C11.2117 1.15775 11.0335 0.564352 10.8687 0ZM9.82735 0H2.27699C2.29524 0.0948501 2.3195 0.218155 2.35021 0.368905C2.43154 0.768066 2.55814 1.35962 2.73851 2.12481C3.09924 3.65524 3.67496 5.88002 4.53345 8.64922C6.25054 14.188 9.09811 21.9024 13.6178 30.5941C22.657 47.9772 38.3791 69.2598 65.1167 84.8746C92.0556 100.607 107.895 122.051 116.999 139.557C118.915 143.242 120.533 146.753 121.893 150H130.363C128.639 145.193 126.247 139.426 122.982 133.148C113.943 115.765 98.2208 94.4822 71.4832 78.8674C44.5443 63.1351 28.7047 41.6913 19.6013 24.1847C15.0496 15.4315 12.1806 7.66028 10.449 2.07461C10.2228 1.34492 10.016 0.652492 9.82735 0ZM0 0H1.25944C1.26419 0.0259354 1.27052 0.0601132 1.2785 0.102383C1.29845 0.208014 1.32871 0.364183 1.37034 0.568541C1.45361 0.977252 1.58239 1.57874 1.76518 2.35423C2.13075 3.90517 2.71243 6.15231 3.57829 8.94533C5.30992 14.531 8.17888 22.3022 12.7305 31.0554C21.834 48.562 37.6736 70.0059 64.6124 85.7381C91.3501 101.353 107.072 122.636 116.111 140.019C117.938 143.532 119.492 146.885 120.808 150H111.921C111.355 148.83 110.758 147.639 110.128 146.428C101.025 128.921 85.1851 107.478 58.2463 91.7453C31.5086 76.1306 15.7865 54.8479 6.74729 37.4648C3.86499 31.9219 1.66272 26.7764 0 22.3392V0ZM0 25.1167V44.5703C9.05867 61.9096 24.7592 83.0701 51.3755 98.614C76.6455 113.372 92.1488 133.155 101.487 150H110.809C110.31 148.979 109.788 147.941 109.241 146.889C100.202 129.506 84.4796 108.224 57.742 92.6089C30.8031 76.8766 14.9635 55.4327 5.86008 37.9262C3.46855 33.3271 1.54156 28.9991 0 25.1167ZM50.8712 99.4776C75.7105 113.984 91.043 133.381 100.342 150H0V46.7024C9.24882 63.8396 24.9032 84.3122 50.8712 99.4776Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                        <div className="absolute inset-0 z-3 rounded-md bg-gradient-to-t from-blue-500 via-sky-500 to-cyan-500 opacity-50 shadow-[inset_0_0_16px_4px_rgba(0,0,0,1)]"></div>
                        <div className="absolute transition-all inset-[13px] z-5 rounded-md bg-white/10 p-1.5 backdrop-blur-[1px]">
                          <div className="relative flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-lg shadow-black/40 transition-all">
                            <div className="absolute inset-0"></div>
                            <div className="flex h-full w-full items-center justify-center">
                              <div className="scale-[0.75]">
                                <svg
                                  width="81"
                                  height="18"
                                  viewBox="0 0 81 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.4881 17.9731C4.15971 17.9731 2.17142 16.7958 2.17142 13.8134V7.82235H0V4.78759H2.30223V1.30809L5.83406 0V4.78759H8.68569V7.82235H5.83406V12.95C5.83406 14.1012 6.40962 14.6767 7.63922 14.6767C8.03164 14.6767 8.39791 14.5982 8.68569 14.5197V17.6853C8.34558 17.79 7.40376 17.9731 6.4881 17.9731Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M11.0913 17.5807V4.78759H14.7017V6.64507C15.3295 5.23234 16.5068 4.36901 18.1288 4.36901C18.3905 4.36901 18.9137 4.42133 19.0707 4.44749V8.16245C18.6521 8.05781 18.2335 8.03164 17.7364 8.03164C16.3498 8.03164 15.0679 8.9473 14.754 10.1769V17.5807H11.0913Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M26.764 17.9731C23.0752 17.9731 20.0405 15.5139 20.0405 11.0926C20.0405 7.06366 22.9444 4.36901 26.6071 4.36901C30.6621 4.36901 32.9644 7.19447 32.9644 11.1449C32.9644 11.4588 32.9382 12.0082 32.912 12.2175H23.8601C23.9386 13.9703 25.5606 14.9383 27.1565 14.9383C28.8831 14.9383 30.3482 14.4674 32.0225 13.3686V16.5342C30.8453 17.2929 29.3279 17.9731 26.764 17.9731ZM23.9386 9.75832H29.2756C29.1971 8.55488 28.3599 7.40376 26.6071 7.40376C25.0112 7.40376 24.0171 8.6072 23.9386 9.75832Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M50.0666 4.36901C52.4734 4.36901 54.6449 6.01719 54.6449 9.05195V17.5807H50.9822V9.96761C50.9822 8.58104 50.2235 7.7177 48.9939 7.7177C48.0783 7.7177 47.3457 8.24094 46.8225 8.97346V17.5807H43.1599V9.96761C43.1599 8.58104 42.4273 7.7177 41.1977 7.7177C40.2298 7.7177 39.4972 8.2671 38.974 9.05195V17.5807H35.3114V4.78759H38.9217V5.8079C39.628 4.99689 40.7007 4.36901 42.3227 4.36901C43.8139 4.36901 45.2005 4.99689 46.0115 6.20032C46.6655 5.44164 47.9475 4.36901 50.0666 4.36901Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M63.6872 17.9731C59.5536 17.9731 56.7282 14.9907 56.7282 11.1449C56.7282 7.32528 59.5536 4.36901 63.6872 4.36901C67.8207 4.36901 70.6724 7.32528 70.6724 11.1449C70.6724 14.9907 67.8207 17.9731 63.6872 17.9731ZM63.6872 14.5197C65.4662 14.5197 66.8789 13.264 66.8789 11.1449C66.8789 9.07811 65.4662 7.79619 63.6872 7.79619C61.9344 7.79619 60.5216 9.07811 60.5216 11.1449C60.5216 13.264 61.9344 14.5197 63.6872 14.5197Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M73.021 17.5807V4.78759H76.6313V6.64507C77.2592 5.23234 78.4365 4.36901 80.0585 4.36901C80.3201 4.36901 80.8434 4.42133 81.0003 4.44749V8.16245C80.5817 8.05781 80.1631 8.03164 79.6661 8.03164C78.2795 8.03164 76.9976 8.9473 76.6836 10.1769V17.5807H73.021Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="animate-hero-button2-slide-up-fade rotate-180">
                  <svg
                    width="92"
                    height="136"
                    viewBox="0 0 92 136"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-dashes"
                  >
                    <g clipPath="url(#clip0_5425_9821)">
                      <path
                        d="M0 68L92 68"
                        stroke="#E2E8F0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="2 5"
                      ></path>
                      <path
                        d="M0 135L4.6456 135C15.6195 135 25.8755 129.545 32.0094 120.445L46.091 99.5548C52.2248 90.4552 62.4809 85 73.4548 85H92"
                        stroke="#E2E8F0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="2 5"
                      ></path>
                      <path
                        d="M0 1H4.64561C15.6195 1 25.8755 6.455 32.0094 15.555L46.091 36.4452C52.2248 45.5448 62.4809 51 73.4548 51L92 51"
                        stroke="#E2E8F0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="2 5"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_5425_9821">
                        <rect
                          width="92"
                          height="136"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 136)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="space-y-8 w-[250px] animate-hero-button2-slide-up-fade">
                  <div className="relative rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor">
                    <div className="relative flex items-center space-x-3 h-full">
                      <span className="font-medium text-slate-500 w-2">1</span>
                      <div className="border-r h-4"></div>
                      <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                        Connect to data source
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor">
                    <div className="flex items-center space-x-3 h-full">
                      <span className="font-medium text-slate-500 w-2">2</span>
                      <div className="border-r h-4"></div>
                      <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                        Write queries, get APIs
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor">
                    <div className="flex items-center space-x-3 h-full">
                      <span className="font-medium text-slate-500 w-2">3</span>
                      <div className="border-r h-4"></div>
                      <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                        Create dashboards
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                <div className="space-y-8 w-[250px] animate-hero-button2-slide-up-fade">
                  <div className="relative rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor">
                    <div className="relative flex items-center space-x-3 h-full">
                      <span className="font-medium text-slate-500 w-2">1</span>
                      <div className="border-r h-4"></div>
                      <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                        Connect to data source
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor">
                    <div className="flex items-center space-x-3 h-full">
                      <span className="font-medium text-slate-500 w-2">2</span>
                      <div className="border-r h-4"></div>
                      <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                        Write queries, get APIs
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor">
                    <div className="flex items-center space-x-3 h-full">
                      <span className="font-medium text-slate-500 w-2">3</span>
                      <div className="border-r h-4"></div>
                      <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                        Create dashboards
                      </span>
                    </div>
                  </div>
                </div>
                <div className="animate-hero-button2-slide-up-fade">
                  <svg
                    width="92"
                    height="136"
                    viewBox="0 0 92 136"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-dashes"
                  >
                    <g clipPath="url(#clip0_5425_9821)">
                      <path
                        d="M0 68L92 68"
                        stroke="#E2E8F0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="2 5"
                      ></path>
                      <path
                        d="M0 135L4.6456 135C15.6195 135 25.8755 129.545 32.0094 120.445L46.091 99.5548C52.2248 90.4552 62.4809 85 73.4548 85H92"
                        stroke="#E2E8F0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="2 5"
                      ></path>
                      <path
                        d="M0 1H4.64561C15.6195 1 25.8755 6.455 32.0094 15.555L46.091 36.4452C52.2248 45.5448 62.4809 51 73.4548 51L92 51"
                        stroke="#E2E8F0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="2 5"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_5425_9821">
                        <rect
                          width="92"
                          height="136"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 136)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="relative animate-hero-button1-slide-up-fade">
                  <div className="absolute transition-all opacity-30 -inset-px bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-xl blur-xl z-0"></div>
                  <div className="relative min-h-[144px] min-w-[144px] rounded-2xl border bg-gradient-to-b from-white to-blue-50 shadow-xl shadow-blue-500/20 z-0">
                    <div className="absolute inset-2 rounded-lg bg-gradient-to-t from-blue-500 via-sky-500 to-cyan-500 p-1 shadow-xl">
                      <div className="relative flex h-full will-change-transform w-full items-center justify-center overflow-hidden rounded-md bg-black/40 shadow-sm shadow-white/40">
                        <div className="z-2">
                          <svg
                            width="150"
                            height="150"
                            viewBox="0 0 150 150"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M48.8548 0H39.5314C40.0305 1.02133 40.553 2.05911 41.1001 3.11121C50.1394 20.4943 65.8615 41.777 92.5991 57.3917C119.538 73.124 135.378 94.5679 144.481 112.074C146.699 116.34 148.518 120.373 150 124.033V104.78C140.89 87.5637 125.251 66.7352 98.9654 51.3845C73.6962 36.6273 58.193 16.8446 48.8548 0ZM150 102.668V0H49.9995C59.2989 16.6182 74.6311 36.0153 99.4697 50.521C125.121 65.5016 140.709 85.6609 150 102.668ZM29.5334 0H38.4194C38.986 1.16994 39.5834 2.36186 40.2129 3.57256C49.3163 21.0791 65.156 42.523 92.0948 58.2553C118.832 73.87 134.555 95.1527 143.594 112.536C146.283 117.708 148.381 122.534 150 126.761V150H149.082L149.071 149.939L149.062 149.896C149.043 149.791 149.012 149.634 148.971 149.43C148.887 149.021 148.759 148.42 148.576 147.644C148.21 146.093 147.629 143.846 146.763 141.053C145.031 135.468 142.162 127.696 137.61 118.943C128.507 101.437 112.667 79.9927 85.7285 64.2605C58.9909 48.6457 43.2688 27.3631 34.2295 9.97992C32.403 6.46731 30.8495 3.1143 29.5334 0ZM28.4485 0H19.9791C21.7029 4.80627 24.0949 10.5736 27.359 16.8506C36.3982 34.2338 52.1203 55.5164 78.8579 71.1312C105.797 86.8635 121.636 108.307 130.74 125.814C135.292 134.567 138.16 142.338 139.892 147.924C140.118 148.654 140.325 149.347 140.514 150H148.064C148.046 149.905 148.022 149.781 147.991 149.63C147.909 149.231 147.783 148.639 147.602 147.874C147.242 146.343 146.666 144.119 145.808 141.349C144.09 135.811 141.243 128.096 136.723 119.405C127.684 102.021 111.962 80.7388 85.2242 65.124C58.2854 49.3917 42.4457 27.9478 33.3423 10.4413C31.4265 6.75696 29.8088 3.24662 28.4485 0ZM10.8687 0H18.9172C20.6631 4.91045 23.1079 10.8431 26.4717 17.312C35.5751 34.8186 51.4148 56.2624 78.3536 71.9947C105.091 87.6095 120.813 108.892 129.853 126.275C134.372 134.967 137.22 142.681 138.937 148.22C139.13 148.841 139.308 149.435 139.473 150H131.424C129.678 145.089 127.234 139.156 123.869 132.687C114.766 115.18 98.9263 93.7362 71.9874 78.0039C45.2498 62.3891 29.5277 41.1065 20.4885 23.7234C15.9688 15.0317 13.1213 7.31728 11.4042 1.7785C11.2117 1.15775 11.0335 0.564352 10.8687 0ZM9.82735 0H2.27699C2.29524 0.0948501 2.3195 0.218155 2.35021 0.368905C2.43154 0.768066 2.55814 1.35962 2.73851 2.12481C3.09924 3.65524 3.67496 5.88002 4.53345 8.64922C6.25054 14.188 9.09811 21.9024 13.6178 30.5941C22.657 47.9772 38.3791 69.2598 65.1167 84.8746C92.0556 100.607 107.895 122.051 116.999 139.557C118.915 143.242 120.533 146.753 121.893 150H130.363C128.639 145.193 126.247 139.426 122.982 133.148C113.943 115.765 98.2208 94.4822 71.4832 78.8674C44.5443 63.1351 28.7047 41.6913 19.6013 24.1847C15.0496 15.4315 12.1806 7.66028 10.449 2.07461C10.2228 1.34492 10.016 0.652492 9.82735 0ZM0 0H1.25944C1.26419 0.0259354 1.27052 0.0601132 1.2785 0.102383C1.29845 0.208014 1.32871 0.364183 1.37034 0.568541C1.45361 0.977252 1.58239 1.57874 1.76518 2.35423C2.13075 3.90517 2.71243 6.15231 3.57829 8.94533C5.30992 14.531 8.17888 22.3022 12.7305 31.0554C21.834 48.562 37.6736 70.0059 64.6124 85.7381C91.3501 101.353 107.072 122.636 116.111 140.019C117.938 143.532 119.492 146.885 120.808 150H111.921C111.355 148.83 110.758 147.639 110.128 146.428C101.025 128.921 85.1851 107.478 58.2463 91.7453C31.5086 76.1306 15.7865 54.8479 6.74729 37.4648C3.86499 31.9219 1.66272 26.7764 0 22.3392V0ZM0 25.1167V44.5703C9.05867 61.9096 24.7592 83.0701 51.3755 98.614C76.6455 113.372 92.1488 133.155 101.487 150H110.809C110.31 148.979 109.788 147.941 109.241 146.889C100.202 129.506 84.4796 108.224 57.742 92.6089C30.8031 76.8766 14.9635 55.4327 5.86008 37.9262C3.46855 33.3271 1.54156 28.9991 0 25.1167ZM50.8712 99.4776C75.7105 113.984 91.043 133.381 100.342 150H0V46.7024C9.24882 63.8396 24.9032 84.3122 50.8712 99.4776Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                        <div className="absolute inset-0 z-3 rounded-md bg-gradient-to-t from-blue-500 via-sky-500 to-cyan-500 opacity-50 shadow-[inset_0_0_16px_4px_rgba(0,0,0,1)]"></div>
                        <div className="absolute transition-all inset-[13px] z-5 rounded-md bg-white/10 p-1.5 backdrop-blur-[1px]">
                          <div className="relative flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-lg shadow-black/40 transition-all">
                            <div className="absolute inset-0"></div>
                            <div className="flex h-full w-full items-center justify-center">
                              <div className="scale-[0.75]">
                                <svg
                                  width="81"
                                  height="18"
                                  viewBox="0 0 81 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.4881 17.9731C4.15971 17.9731 2.17142 16.7958 2.17142 13.8134V7.82235H0V4.78759H2.30223V1.30809L5.83406 0V4.78759H8.68569V7.82235H5.83406V12.95C5.83406 14.1012 6.40962 14.6767 7.63922 14.6767C8.03164 14.6767 8.39791 14.5982 8.68569 14.5197V17.6853C8.34558 17.79 7.40376 17.9731 6.4881 17.9731Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M11.0913 17.5807V4.78759H14.7017V6.64507C15.3295 5.23234 16.5068 4.36901 18.1288 4.36901C18.3905 4.36901 18.9137 4.42133 19.0707 4.44749V8.16245C18.6521 8.05781 18.2335 8.03164 17.7364 8.03164C16.3498 8.03164 15.0679 8.9473 14.754 10.1769V17.5807H11.0913Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M26.764 17.9731C23.0752 17.9731 20.0405 15.5139 20.0405 11.0926C20.0405 7.06366 22.9444 4.36901 26.6071 4.36901C30.6621 4.36901 32.9644 7.19447 32.9644 11.1449C32.9644 11.4588 32.9382 12.0082 32.912 12.2175H23.8601C23.9386 13.9703 25.5606 14.9383 27.1565 14.9383C28.8831 14.9383 30.3482 14.4674 32.0225 13.3686V16.5342C30.8453 17.2929 29.3279 17.9731 26.764 17.9731ZM23.9386 9.75832H29.2756C29.1971 8.55488 28.3599 7.40376 26.6071 7.40376C25.0112 7.40376 24.0171 8.6072 23.9386 9.75832Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M50.0666 4.36901C52.4734 4.36901 54.6449 6.01719 54.6449 9.05195V17.5807H50.9822V9.96761C50.9822 8.58104 50.2235 7.7177 48.9939 7.7177C48.0783 7.7177 47.3457 8.24094 46.8225 8.97346V17.5807H43.1599V9.96761C43.1599 8.58104 42.4273 7.7177 41.1977 7.7177C40.2298 7.7177 39.4972 8.2671 38.974 9.05195V17.5807H35.3114V4.78759H38.9217V5.8079C39.628 4.99689 40.7007 4.36901 42.3227 4.36901C43.8139 4.36901 45.2005 4.99689 46.0115 6.20032C46.6655 5.44164 47.9475 4.36901 50.0666 4.36901Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M63.6872 17.9731C59.5536 17.9731 56.7282 14.9907 56.7282 11.1449C56.7282 7.32528 59.5536 4.36901 63.6872 4.36901C67.8207 4.36901 70.6724 7.32528 70.6724 11.1449C70.6724 14.9907 67.8207 17.9731 63.6872 17.9731ZM63.6872 14.5197C65.4662 14.5197 66.8789 13.264 66.8789 11.1449C66.8789 9.07811 65.4662 7.79619 63.6872 7.79619C61.9344 7.79619 60.5216 9.07811 60.5216 11.1449C60.5216 13.264 61.9344 14.5197 63.6872 14.5197Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M73.021 17.5807V4.78759H76.6313V6.64507C77.2592 5.23234 78.4365 4.36901 80.0585 4.36901C80.3201 4.36901 80.8434 4.42133 81.0003 4.44749V8.16245C80.5817 8.05781 80.1631 8.03164 79.6661 8.03164C78.2795 8.03164 76.9976 8.9473 76.6836 10.1769V17.5807H73.021Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="animate-hero-button2-slide-up-fade">
                  <svg
                    width="92"
                    height="136"
                    viewBox="0 0 92 136"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-dashes-fast"
                  >
                    <g clipPath="url(#clip0_5425_9821)">
                      <path
                        d="M0 68L92 68"
                        stroke="#E2E8F0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="2 5"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_5425_9821">
                        <rect
                          width="92"
                          height="136"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 136)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="relative animate-hero-button2-slide-up-fade">
                  <div className="absolute -inset-px opacity-50 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 overflow-visible blur-sm"></div>
                  <div className="relative w-[250px]">
                    <div className="rounded-lg shadow-tremor px-5 py-1.5 bg-white ring-tremor h-9">
                      <div className="flex items-center space-x-3 h-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 text-slate-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                          Embedded analytics
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    </div>
  );
}
