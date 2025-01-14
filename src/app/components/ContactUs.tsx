'use client';

import { useFormspark } from '@formspark/use-formspark';
import { Text, TextInput } from '@tremor/react';
import React, { useRef, useState } from 'react';
import { Balancer } from 'react-wrap-balancer';
import LoadingDots from './LoadingDots/LoadingDots';

export function ContactUs() {
  type ErrorsType = {
    fullname?: boolean;
    email?: boolean;
    subject?: boolean;
    message?: boolean;
  };

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //   Form validation
  const [errors, setErrors] = useState<ErrorsType>({});

  //   Setting button text
  const [buttonText, setButtonText] = useState('Send Message');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const [formDisabled, setFormDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Formspark

  const FORMSPARK_FORM_ID = 's11ZCZI6';

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      try {
        setIsLoading(true);
        setFormDisabled(true);
        setButtonText('Sending Message...');
        const result = await submit({ fullname, email, subject, message });
        // console.log(result);
        if (result) {
          setShowSuccessMessage(true);
          setShowFailureMessage(false);
          setIsLoading(false);
          setButtonText('Message sent');
          // Reset form fields
          setFullname('');
          setEmail('');
          setMessage('');
          setSubject('');
        } else {
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          setIsLoading(false);
          setButtonText('Send Message');
        }
      } catch (error) {
        console.log(error);
        setButtonText('Send Message');
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setIsLoading(false);
      }
    }
  };

  const [isFocused, setIsFocused] = useState(false);

  const textareaInputRef = useRef<HTMLTextAreaElement>(null);

  const handleFocusChange = (isFocused: boolean) => {
    if (isFocused === false) {
      textareaInputRef.current?.blur();
    } else {
      textareaInputRef.current?.focus();
    }
    setIsFocused(isFocused);
  };

  const handleValidation = () => {
    let tempErrors: { [key: string]: boolean } = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (email.length <= 0 || email.includes('@') === false) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    // console.log('errors', errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Sending Message');
      //   const res = await fetch('/api/sendgrid', {
      //     body: JSON.stringify({
      //       email: email,
      //       fullname: fullname,
      //       subject: subject,
      //       message: message,
      //     }),
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     method: 'POST',
      //   });
      const form = e.currentTarget;
      form.submit();

      //   const { error } = await res.json();
      //   if (error) {
      //     console.log(error);
      //     setShowSuccessMessage(false);
      //     setShowFailureMessage(true);
      //     setButtonText('Send Message');

      //     // Reset form fields
      //     setFullname('');
      //     setEmail('');
      //     setMessage('');
      //     setSubject('');
      //     return;
      //   }
      //   setShowSuccessMessage(true);
      //   setShowFailureMessage(false);
      setButtonText('Send Message');
      // Reset form fields
      setFullname('');
      setEmail('');
      setMessage('');
      setSubject('');
    }
    // console.log(fullname, email, subject, message);
  };
  return (
    <main className="">
      <header className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 lg:px-20 bg-blue-50 dark:bg-blue-900 md:h-96">
        <div data-aos="fade-down" className="mx-auto mb-10 md:mt-20">
          <div className="mb-2.5 text-blue-600 text-sm leading-6 font-semibold tracking-wide uppercase truncate">
            Contact Us
          </div>
          <h1 className="text-4xl font-bold mt-4 dark:text-gray-50 text-gray-700">
            <Balancer>Want to get in touch with our team?</Balancer>
          </h1>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            Complete the below form and we will respond shortly.
          </p>
        </div>
        <form
          data-aos="fade-down"
          onSubmit={onSubmit}
          // onSubmit={handleSubmit}
          // action="https://formsubmit.co/b16ebd00d10666674de3572675c49af9"
          // method="POST"
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
        >
          <h1 className="text-3xl font-bold dark:text-gray-50">
            Send a message
          </h1>

          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Full name <span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <TextInput
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            placeholder=""
            className="mt-4"
          />
          {/* <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500"
          /> */}
          {errors?.fullname && (
            <p className="mt-2 text-red-500">Name cannot be empty.</p>
          )}

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            E-mail <span className="mt-2 text-red-500">*</span>
          </label>
          <TextInput
            type="text"
            name="email"
            value={email}
            placeholder=""
            className="mt-4"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500"
          /> */}
          {errors?.email && (
            <p className="mt-2 text-red-500">Please enter a valid email.</p>
          )}

          <label
            htmlFor="subject"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Subject <span className="mt-2 text-red-500">*</span>
          </label>
          <TextInput
            type="text"
            name="subject"
            value={subject}
            placeholder=""
            className="mt-4"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          {/* <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500"
          /> */}
          {errors?.subject && (
            <p className="mt-2 text-red-500">Subject cannot be empty.</p>
          )}
          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Message <span className="text-red-500">*</span>
          </label>

          <div
            className={[
              'tremor-TextInput-root relative w-full flex items-center min-w-[10rem] outline-none',
              'rounded-tremor-default shadow-tremor-input dark:shadow-dark-tremor-input',
              'bg-tremor-background dark:bg-dark-tremor-background hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted',
              'text-tremor-content dark:text-dark-tremor-content border mt-4',
              isFocused
                ? 'ring border-tremor-brand-subtle ring-tremor-brand-muted dark:border-dark-tremor-brand-subtle dark:ring-dark-tremor-brand-muted'
                : 'border-tremor-border dark:border-dark-tremor-border',
            ].join(' ')}
          >
            <textarea
              onClick={() => {
                handleFocusChange(true);
              }}
              onFocus={() => {
                handleFocusChange(true);
              }}
              onBlur={() => {
                handleFocusChange(false);
              }}
              placeholder=""
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="tremor-TextInput-input w-full focus:outline-none focus:ring-0 border-none bg-transparent text-tremor-default text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis pl-4 pr-4 py-2 placeholder:text-tremor-content dark:placeholder:text-dark-tremor-content"
            ></textarea>
          </div>

          {/* <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500"
          ></textarea> */}
          {errors?.message && (
            <p className="mt-2 text-red-500">Message body cannot be empty.</p>
          )}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              disabled={formDisabled}
              className="w-full h-14 px-10 mt-8 py-2 bg-blue-600 hover:bg-blue-700 text-gray-50 font-light rounded-md text-lg flex flex-row items-center transition duration-150 text-center justify-center"
            >
              {isLoading ? <LoadingDots color="#ffffff" /> : buttonText}
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p
                data-aos="fade-down"
                className="text-green-500 font-semibold text-sm my-2 mt-4"
              >
                Thank you! Your message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p
                data-aos="fade-down"
                className="text-red-500 font-semibold text-sm my-2 mt-4"
              >
                Oops! Something went wrong, please reload the page and try
                again.
              </p>
            )}
          </div>
        </form>
      </header>
      <section className="">
        {/* <h1
          className={`text-4xl font-bold text-center md:mt-60 my-10 text-gray-700 ${
            errors ? 'md:mt-80' : 'md:mt-60'
          }`}
        >
          Our Direct Contact
        </h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 md:grid-cols-3 gap-6 max-w-6xl md:mx-auto my-20">
          {/* <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:cursor-pointer hover:shadow-lg transition duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-cyan-500 h-4 w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                fill="currentColor"
              />
              <path
                d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                fill="currentColor"
              />
              <path
                d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-gray-500 font-light">+91 9293929392</p>
          </div> */}
          {/* <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200">
            <svg
              width="24"
              height="24"
              className="text-cyan-500 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-gray-500 font-light">
              freealancer@mywebsite.com
            </p>
          </div> */}
          {/* <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-cyan-500 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-gray-500 font-light">
              freealancer@mywebsite.com
            </p>
          </div> */}
        </div>
      </section>
    </main>
  );
}
