import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Containter';

export function Hero() {
  return (
    <div className="relative mt-6 md:mt-40">
      <Blur />
      <Container>
        <div className="relative ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="relative text-4xl tracking-tight font-extrabold text-slate-700 sm:text-5xl md:text-6xl z-40">
              Bogey Management
              <br />
              <span className="text-blue-600"> Made Easy</span>
            </h1>
            <p className="mt-8 text-xl text-zinc-700 dark:text-zinc-300 leading-8">
              Transform your workflow for earnings events with a real-time,
              intuitive dashboard to help you save time and alpha with improved
              bogey accuracy.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <div>
                <Link
                  href="https://mjkcbhiln9o.typeform.com/to/I6Lo0PRY"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-blue-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-white">
                    Join the Waitlist →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Companies />
      </Container>
    </div>
  );
}

export function Blur() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div className="fix-safari-blur blur-[106px] h-56 bg-gradient-to-br from-blue-500 to-blue-400 dark:from-blue-700"></div>
      <div className="fix-safari-blur blur-[106px] h-32 bg-gradient-to-r from-blue-400 to-blue-300 dark:to-blue-600"></div>
    </div>
  );
}

function Companies() {
  return (
    <div className="mt-36 text-center lg:mt-32 md:block hidden">
      <span className="uppercase text-sm font-semibold tracking-wider text-gray-800 dark:text-white">
        Join waitlisted users across firms industry-wide
      </span>
      <div className="mt-4 flex justify-around items-center">
        <div className="p-4 grayscale opacity-60 hover:opacity-100 transition duration-200 hover:grayscale-0">
          <a
            href="https://www.bamfunds.com/"
            target="_blank"
            className="flex items-center gap-3 text-xl font-semibold"
          >
            <BAMLogo />
          </a>
        </div>
        <div className="p-4 grayscale opacity-60 hover:opacity-100 transition duration-200 hover:grayscale-0">
          <a
            href="https://www.citadel.com/"
            target="_blank"
            className="flex items-center gap-3 text-xl font-semibold"
          >
            <CitadelLogo />
          </a>
        </div>
        <div className="p-4 grayscale opacity-60 hover:opacity-100 transition duration-200 hover:grayscale-0">
          <a
            href="https://point72.com/"
            target="_blank"
            className="flex items-center gap-3 text-xl font-semibold"
          >
            <P72Logo />
          </a>
        </div>
        <div className="p-4 grayscale opacity-60 hover:opacity-100 transition duration-200 hover:grayscale-0">
          <a
            href="https://www.exoduspoint.com/"
            target="_blank"
            className="flex items-center gap-3 text-xl font-semibold"
          >
            <ExodusPointLogo />
          </a>
        </div>
        <div className="p-4 grayscale opacity-60 hover:opacity-100 transition duration-200 hover:grayscale-0">
          <a
            href="https://www.mwam.com/"
            target="_blank"
            className="flex items-center gap-3 text-xl font-semibold"
          >
            <MarshallWaceLogo />
          </a>
        </div>
      </div>
    </div>
  );
}

function WyzeLogo() {
  return (
    <svg
      width="100"
      height="23"
      viewBox="0 0 96 21"
      fill="none"
      className="invert dark:invert-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Wyze</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7772 0.191406H10.8936L14.7772 8.03827L11.379 14.8466L4.09734 0.191406H0.213745L10.1655 20.3855H12.5927L16.719 12.0771L20.8453 20.3855H23.2726L33.2243 0.191406H29.3407L22.0589 14.962L14.7772 0.191406Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.671 0.191406L44.9961 10.3461L38.3212 0.191406H34.1949L43.297 13.9234V20.2701H46.8166V13.9234L55.7973 0.191406H51.671Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.5212 20.3854H95.9683V16.9236H77.5212V20.3854Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.5212 3.65326H95.9683V0.191406H77.5212V3.65326Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.5212 11.9619H95.9683V8.5H77.5212V11.9619Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.8897 0.191406V3.53786H69.0259L55.4333 20.3855H75.2154V17.0391H62.7151L76.4289 0.191406H56.8897Z"
        fill="white"
      ></path>
    </svg>
  );
}

function BAMLogo() {
  return (
    <Image
      src="/bam-logo.png"
      alt="BAM"
      className="dark:invert"
      width={120}
      height={25}
    />
  );
}

function CitadelLogo() {
  return (
    <svg width="145" height="19" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 17.777h33.133v-4.77H0zM0 5.973h6.629V1.207H0zm13.254 0h6.629V1.207h-6.63zm13.254 0h6.625V1.207h-6.625zm-10.512 5.902H0V7.109h15.996zm17.137 0H17.137V7.109h15.996zm25.062 5.344c2.192-.074 2.676-.489 2.676-1.387V3.23c0-.898-.484-1.335-2.676-1.41v-.535h7.664v.535c-2.191.075-2.675.512-2.675 1.41v12.602c0 .898.484 1.313 2.675 1.387v.558h-7.664v-.558zm12.821 0c2.164-.074 2.82-.489 2.82-1.387V1.965H72.62c-2.043 0-3.09.015-4.281 3.008l-.535-.051.144-3.637h14.059l.172 3.637-.535.05c-1.094-2.8-2.165-3.007-4.282-3.007H76.12v13.867c0 .898.66 1.313 2.824 1.387v.558h-7.93v-.558zm43.668 0c2.113-.074 2.652-.489 2.652-1.387V3.23c0-.898-.54-1.335-2.652-1.41v-.535h13.379l.07 3.633-.535.023c-1.02-2.945-1.848-2.949-4.621-2.949h-3.332v6.883h1.484c1.922 0 2.773-.437 3.406-3.043h.485v6.766h-.485c-.633-2.606-1.484-3.02-3.406-3.02h-1.484v7.36h3.332c3.261 0 4.355.085 5.425-3.028l.536.027-.122 3.84h-14.132v-.558zm16.734 0c2.117-.074 2.652-.489 2.652-1.387V3.23c0-.898-.535-1.335-2.652-1.41v-.535h7.492v.535c-2.164.075-2.531.489-2.531 1.41v13.707h2.434c3.21 0 4.355-.96 5.523-4.511l.535.023-.195 5.328h-13.258v-.558zm-27.055-.254h-1.8v-15h1.777c4.426 0 6.617 1.922 6.617 7.422 0 5.398-1.414 7.578-6.594 7.578m.242-15.68h-6.601v.559c1.77.117 2.25.55 2.25 1.386v12.602c0 .836-.48 1.25-2.25 1.36v.585h6.824c6.129 0 8.777-4.113 8.777-8.539 0-4.62-3.039-7.953-9-7.953M85.828 10.82l2.676-6.883h.098l2.382 6.883h-5.156zm9.121 4.184L89.793.894h-.824l-5.063 12.672c-.972 2.41-1.652 3.309-3.285 3.7v.511h5.477v-.511c-2.168-.364-2.41-.899-1.387-3.551l.852-2.215h5.667l1.313 3.797c.484 1.363.144 1.848-2.07 1.969v.511h6.855v-.586c-1.465-.27-1.867-.812-2.379-2.187zM50.61 1.555c-2.872 0-5.547 2.527-5.547 8.074 0 5.277 3.21 7.465 6.007 7.465a5.21 5.21 0 0 0 2.438-.637c.754-.414 1.441-.98 1.93-1.695.343-.5.59-1.008.808-1.621l.54.164c-.274.879-.653 1.738-1.212 2.476a5.982 5.982 0 0 1-2.015 1.707 6.436 6.436 0 0 1-.696.301 5.786 5.786 0 0 1-.808.23 7.986 7.986 0 0 1-1.64.172c-4.696 0-8.005-3.382-8.005-8.464 0-5.036 3.723-8.832 8.465-8.832 1.727 0 3.113.464 4.137 1.023l.851-.012.176 1.594.332 2.77h-.508c-1.12-3.016-2.797-4.715-5.254-4.715"
        fill="#002E6C"
      />
    </svg>
  );
}

function P72Logo() {
  return (
    <Image
      src="/point72logo.png"
      alt="Point72"
      className="dark:invert"
      width={120}
      height={25}
    />
  );
}

function ExodusPointLogo() {
  return (
    <Image
      src="/exodus-point-logo.png"
      alt="Exodus Point"
      className="dark:invert"
      width={120}
      height={25}
    />
  );
}

function MarshallWaceLogo() {
  return (
    <Image
      src="/marshall-wace-logo-png.png"
      alt="Marshall Wace"
      className="dark:invert"
      width={120}
      height={25}
    />
  );
}
