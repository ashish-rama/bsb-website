'use client';

import {
  NumberInput,
  Select,
  SelectItem,
  Text,
  TextInput,
} from '@tremor/react';
import { Check, X } from 'lucide-react';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { Balancer } from 'react-wrap-balancer';
import { cn } from '../utils/cn';
import { Blur } from './Hero';
import { useFormspark } from '@formspark/use-formspark';
import LoadingDots from './LoadingDots/LoadingDots';

export default function WaitlistForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  // const [personalEmail, setPersonalEmail] = useState('');
  const [fundType, setFundType] = useState('');
  const [aumRange, setAumRange] = useState('');
  const [sectorCoverage, setSectorCoverage] = useState('');
  const [industryCoverage, setIndustryCoverage] = useState('');
  const [seniority, setSeniority] = useState('');
  const [teamMembers, setTeamMembers] = useState('');
  // const [historicalBogeyAccuracy, setHistoricalBogeyAccuracy] = useState('');
  const [referralCode, setReferralCode] = useState('');

  type ErrorsType = {
    firstName?: boolean;
    lastName?: boolean;
    workEmail?: boolean;
    // personalEmail?: boolean;
    fundType?: boolean;
    aumRange?: boolean;
    sectorCoverage?: boolean;
    industryCoverage?: boolean;
    seniority?: boolean;
    teamMembers?: boolean;
    // historicalBogeyAccuracy?: boolean;
    referralCode?: boolean;
  };

  //   Form validation
  const [errors, setErrors] = useState<ErrorsType>({});

  //   Handle validation
  const handleValidation = () => {
    let formIsValid = true;
    let errors: ErrorsType = {};

    // First Name
    if (!firstName) {
      formIsValid = false;
      errors['firstName'] = true;
    }

    // Last Name
    if (!lastName) {
      formIsValid = false;
      errors['lastName'] = true;
    }

    // Work Email
    if (!workEmail || !workEmail.includes('@')) {
      formIsValid = false;
      errors['workEmail'] = true;
    }

    // Personal Email
    // if (!personalEmail || !personalEmail.includes('@')) {
    //   formIsValid = false;
    //   errors['personalEmail'] = true;
    // }

    // Fund Type
    if (!fundType) {
      formIsValid = false;
      errors['fundType'] = true;
    }

    // AUM Range
    if (!aumRange) {
      formIsValid = false;
      errors['aumRange'] = true;
    }

    // Sector Coverage
    if (!sectorCoverage) {
      formIsValid = false;
      errors['sectorCoverage'] = true;
    }

    // Industry Coverage
    if (!industryCoverage) {
      formIsValid = false;
      errors['industryCoverage'] = true;
    }

    // Seniority
    if (!seniority) {
      formIsValid = false;
      errors['seniority'] = true;
    }

    // Can this be empty?

    // Team Members
    // if (!teamMembers) {
    //   formIsValid = false;
    //   errors['teamMembers'] = true;
    // }

    // Historical Bogey Accuracy
    // if (!historicalBogeyAccuracy) {
    //   formIsValid = false;
    //   errors['historicalBogeyAccuracy'] = true;
    // }

    // Historical Bogey Accuracy
    // if (!referralCode) {
    //   formIsValid = false;
    //   errors['referralCode'] = true;
    // }

    setErrors(errors);
    return formIsValid;
  };

  // Formspark

  const FORMSPARK_FORM_ID = 'sKpwe9ui';

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  //   Handle submit
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleValidation()) {
      try {
        setIsLoading(true);
        setButtonText('Submitting...');
        setFormDisabled(true);

        const res = await submit({
          firstName,
          lastName,
          workEmail,
          // personalEmail,
          fundType,
          aumRange,
          sectorCoverage,
          industryCoverage,
          seniority,
          teamMembers,
          // historicalBogeyAccuracy,
          referralCode,
        });

        if (res) {
          setIsLoading(false);
          setIsSuccess(true);
          setButtonText('Submitted');

          //   Reset form
          setFirstName('');
          setLastName('');
          setWorkEmail('');
          // setPersonalEmail('');
          setFundType('');
          setAumRange('');
          setSectorCoverage('');
          setIndustryCoverage('');
          setSeniority('');
          setTeamMembers('');
          // setHistoricalBogeyAccuracy('');
          setReferralCode('');
        } else {
          setIsLoading(false);
          setIsSuccess(false);
          setButtonText('Secure Your Spot Now');
          setError('Something went wrong, please try again.');
        }
        setError('');
      } catch (error: any) {
        console.log(error);
        console.log(error.message);
        setIsLoading(false);
        setIsSuccess(false);
        // setFormDisabled(false);
        setError('Something went wrong, please try again.');
        setButtonText('Secure Your Spot Now');
      }
    }
  };

  //   Setting button text
  const [buttonText, setButtonText] = useState('Secure Your Spot Now');

  const [formDisabled, setFormDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  function generateRandomReferralCode(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <main>
      <header className="container mx-auto mt-8 flex justify-center md:mt-40 xl:mt-40">
        <div className="flex flex-col gap-6">
          <div className="relative">
            <Blur />
            <div className="relative ml-auto">
              <div className="lg:w-2/3 text-center mx-auto">
                <h1
                  data-aos="fade-down"
                  className="relative text-4xl tracking-tight font-extrabold text-slate-700 sm:text-5xl md:text-6xl z-40"
                >
                  {/* <Balancer> */}
                  Join the waitlist and transform your{' '}
                  <span className="text-blue-600"> bogey management </span>
                  workflow.
                  {/* </Balancer> */}
                </h1>
                <p
                  data-aos="fade-down"
                  className="mt-8 text-xl text-zinc-800 dark:text-zinc-300 leading-8"
                >
                  <Balancer>
                    By signing up to our waitlist, you will be first to know
                    when we launch and will be notified on a rolling basis for
                    onboarding.
                  </Balancer>
                </p>
              </div>
            </div>
          </div>
          {/* <form
            // onSubmit={onSubmit}
            className="mx-auto mt-6 flex w-full max-w-lg flex-col items-center gap-4"
          >
            <Input
              type="text"
              placeholder="Your name..."
              icon={<User />}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              type="email"
              placeholder="Email address..."
              icon={<Mail />}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Select
              onValueChange={(e: 'STUDENT' | 'PROJECT' | 'BOTH') => {
                setReason(e);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Why are you interested in Noodle?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="STUDENT">I&apos;m a student</SelectItem>
                <SelectItem value="PROJECT">
                  I&apos;m interested in the project
                </SelectItem>
                <SelectItem value="BOTH">Both</SelectItem>
              </SelectContent>
            </Select>
            <button
              type="submit"
              disabled={formDisabled}
              className="bg-primary-500 text-gray-12 dark:disabled:bg-graydark-4 dark:disabled:text-graydark-8 dark:disabled:border-graydark-6 hover:bg-primary-700 disabled:bg-gray-4 disabled:text-gray-8 disabled:border-gray-6 flex w-full items-center justify-center gap-4 rounded-md px-6 py-3 font-semibold transition-colors disabled:border"
            >
              {isLoading ? (
                <Loader2 />
              ) : (
                <span className="flex items-center gap-4">
                  Secure your spot <ArrowRight size={20} />
                </span>
              )}
            </button>
          </form> */}

          <form data-aos="fade-down" onSubmit={onSubmit} className="mt-14">
            <div className="space-y-8 mx-auto w-full max-w-2xl flex flex-col justify-center items-center">
              <span className="flex justify-between w-full">
                <div className="flex-grow pr-4 sm:pr-8">
                  <Text className="text-bold mb-2 text-gray-600">
                    First Name
                  </Text>
                  <TextInput
                    name="firstName"
                    error={errors?.firstName}
                    errorMessage="First name cannot be empty."
                    placeholder="Warren"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="flex-grow pl-4 sm:pl-8">
                  <Text className="text-bold mb-2 text-gray-600">
                    Last Name
                  </Text>
                  <TextInput
                    name="lastName"
                    error={errors?.lastName}
                    errorMessage="Last name cannot be empty."
                    placeholder="Buffett"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </span>

              <div className="flex flex-col w-full">
                <Text className="text-bold mb-2 text-gray-600">Work Email</Text>
                <TextInput
                  name="workEmail"
                  error={errors?.workEmail}
                  errorMessage="Work email cannot be empty."
                  placeholder="name@work-email.com"
                  value={workEmail}
                  onChange={(e) => {
                    setWorkEmail(e.target.value);
                  }}
                />
              </div>

              {/* <div className="flex flex-col w-full">
                <Text className="text-bold mb-2 text-gray-600">
                  Personal Email
                </Text>
                <TextInput
                  name="personalEmail"
                  error={errors?.personalEmail}
                  errorMessage="Personal email cannot be empty."
                  placeholder="name@example.com"
                  value={personalEmail}
                  onChange={(e) => {
                    setPersonalEmail(e.target.value);
                  }}
                />
              </div> */}

              <div className="flex flex-col w-full">
                <Text className="text-bold mb-2 text-gray-600">Fund Type</Text>
                <Select
                  // name="fundType"
                  value={fundType}
                  onValueChange={setFundType}
                >
                  <SelectItem value="Multimanager L/S">
                    Multimanager L/S
                  </SelectItem>
                  <SelectItem value="Single manager L/S">
                    Single manager L/S
                  </SelectItem>
                  <SelectItem value="Long-Only">Long-Only</SelectItem>
                  <SelectItem value="Quant">Quant</SelectItem>
                </Select>

                {errors?.fundType && (
                  <p className="mt-2 text-sm text-left text-red-500">
                    Fund type cannot be empty.
                  </p>
                )}
              </div>

              <div className="flex flex-col w-full">
                <Text className="text-bold mb-2 text-gray-600">
                  AUM Range of Firm
                </Text>
                <Select
                  // name="aumRange"
                  value={aumRange}
                  onValueChange={setAumRange}
                >
                  <SelectItem value="<$50M">{'<$50M'}</SelectItem>
                  <SelectItem value="$50M - $250M">{'$50M - $250M'}</SelectItem>
                  <SelectItem value="$250M - $500M">
                    {'$250M - $500M'}
                  </SelectItem>
                  <SelectItem value="$500M - $1B">{'$500M - $1B'}</SelectItem>
                  <SelectItem value="$1B - $3B">{'$1B - $3B'}</SelectItem>
                  <SelectItem value="$3B - $5B">{'$3B - $5B'}</SelectItem>
                  <SelectItem value="$5B - $10B">{'$5B - $10B'}</SelectItem>
                  <SelectItem value="$10B - $20B">{'$10B - $20B'}</SelectItem>
                  <SelectItem value="$20B+">{'$20B+'}</SelectItem>
                </Select>

                {errors?.aumRange && (
                  <p className="mt-2 text-sm text-left text-red-500">
                    AUM range cannot be empty.
                  </p>
                )}
              </div>

              <div className="flex flex-col w-full">
                <Text className="text-bold mb-2 text-gray-600">
                  Sector Coverage
                </Text>
                <Select
                  // name="sectorCoverage"
                  value={sectorCoverage}
                  onValueChange={setSectorCoverage}
                >
                  <SelectItem value="Generalist">{'Generalist'}</SelectItem>
                  <SelectItem value="Consumer">{'Consumer'}</SelectItem>
                  <SelectItem value="Energy">{'Energy'}</SelectItem>
                  <SelectItem value="Financials">{'Financials'}</SelectItem>
                  <SelectItem value="Healthcare">{'Healthcare'}</SelectItem>
                  <SelectItem value="Industrials">{'Industrials'}</SelectItem>
                  <SelectItem value="Real Estate">{'Real Estate'}</SelectItem>
                  <SelectItem value="Technology">{'Technology'}</SelectItem>
                  <SelectItem value="Telecom">{'Telecom'}</SelectItem>
                  <SelectItem value="Utilities">{'Utilities'}</SelectItem>
                  <SelectItem value="Other">{'Other'}</SelectItem>
                </Select>

                {errors?.sectorCoverage && (
                  <p className="mt-2 text-sm text-left text-red-500">
                    Sector coverage cannot be empty.
                  </p>
                )}
              </div>

              <div className="flex flex-col w-full">
                <Text className="text-bold mb-2 text-gray-600">
                  Industry Coverage
                </Text>
                <TextInput
                  name="industryCoverage"
                  error={errors?.industryCoverage}
                  errorMessage="Industry coverage cannot be empty."
                  placeholder="Sector Verticals"
                  value={industryCoverage}
                  onChange={(e) => {
                    setIndustryCoverage(e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-col w-full">
                <Text className="text-bold mb-2 text-gray-600">
                  Seniority / Title
                </Text>
                <Select
                  // name="seniority"
                  value={seniority}
                  onValueChange={setSeniority}
                >
                  <SelectItem value="Associate">{'Associate'}</SelectItem>
                  <SelectItem value="Senior Associate">
                    {'Senior Associate'}
                  </SelectItem>
                  <SelectItem value="Analyst">{'Analyst'}</SelectItem>
                  <SelectItem value="Senior Analyst">
                    {'Senior Analyst'}
                  </SelectItem>
                  <SelectItem value="Portfolio Manager">
                    {'Portfolio Manager'}
                  </SelectItem>
                  <SelectItem value="Trader">{'Trader'}</SelectItem>
                  <SelectItem value="Executive">{'Executive'}</SelectItem>
                </Select>

                {errors?.seniority && (
                  <p className="mt-2 text-sm text-left text-red-500">
                    Title cannot be empty.
                  </p>
                )}
              </div>

              <div className="flex flex-col w-full">
                <Text className="text-bold mb-2 text-gray-600">
                  Team Members (optional)
                </Text>
                <TextInput
                  name="teamMembers"
                  error={errors?.teamMembers}
                  errorMessage="Team members cannot be empty."
                  placeholder="Charlie Munger, Ben Graham, ..."
                  value={teamMembers}
                  onChange={(e) => {
                    setTeamMembers(e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-col w-full">
                <Text className="text-bold mb-2 text-gray-600">
                  Referral Code (optional)
                </Text>
                <TextInput
                  name="referralCode"
                  error={errors?.referralCode}
                  errorMessage="Team members cannot be empty."
                  placeholder="XXXXXX"
                  value={referralCode}
                  onChange={(e) => {
                    setReferralCode(e.target.value);
                  }}
                />
              </div>

              {/* <a href="mailto:someone@yoursite.com">Email Us</a> */}

              {/* <div className="flex flex-col w-full">
                <Text className="text-bold mb-2 text-gray-600">
                  Historical Bogey Accuracy (%)
                </Text>
                <NumberInput
                  name="historicalBogeyAccuracy"
                  error={errors?.historicalBogeyAccuracy}
                  errorMessage="Historical bogey accuracy cannot be empty."
                  min={0}
                  max={100}
                  enableStepper={false}
                  placeholder="55"
                  value={historicalBogeyAccuracy}
                  onChange={(e) => {
                    setHistoricalBogeyAccuracy(e.target.value);
                  }}
                />
              </div> */}

              {/* <Button className="w-full" variant="primary">
                Secure your spot
              </Button> */}
              <div className="flex w-full">
                <button
                  disabled={formDisabled}
                  className="w-full h-14 mt-6 bg-blue-500 flex items-center justify-center border border-transparent rounded-lg py-2 px-4 text-base font-medium text-white hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all"
                >
                  {isLoading ? <LoadingDots color="#ffffff" /> : buttonText}
                </button>
              </div>
            </div>
          </form>

          <div
            className="mx-auto w-full max-w-2xl flex flex-col justify-center items-center"
            data-aos="fade-down"
          >
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-scale-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-sm bg-scale-200 bg-white text-scale-1200">
                  or
                </span>
              </div>
            </div>
            <a
              className="flex w-full mt-6"
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:?cc=buysidebogey@outlook.com&subject=Join Me on Buyside Bogey! Making Earnings Season a Whole Lot Easier&body=Hello,%0D%0A%0D%0AExciting news! I've just signed up for Buyside Bogey ${`—`} a new platform offering real-time insights into buyside expectations for earnings prints, on a mission to make earnings season (and alpha) easier. Plus, I've got a referral code that grants you exclusive access to the waitlist so sign up below!%0D%0A%0D%0AReferral code: ${generateRandomReferralCode(
                6
              )}%0D%0A%0D%0ABuyside Bogey: https://www.buysidebogey.com/waitlist%0D%0A%0D%0A%0D%0AHere's a sneak peak of what's in store:%0D%0A%0D%0A    - Real-time updates on EPS bogeys, no more last-minute surveys%0D%0A    - Filter out bogeys based on submission date and other factors to see updates after comps prints%0D%0A    - Fully anonymized profiles%0D%0A    - Tracking your hit rate and historical consensus bogeys vs actual performance%0D%0A    - Cash prizes for bogey accuracy and more!`}
            >
              <button className="w-full h-14 bg-zinc-800 flex items-center justify-center border border-transparent rounded-lg py-2 px-4 text-base font-medium text-white hover:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400 transition-all">
                Send a Referral
              </button>
            </a>
          </div>

          <div className="mx-auto flex w-full max-w-lg justify-center">
            <AnimateHeight
              height={isSuccess ? 'auto' : 0}
              className={cn(isSuccess && 'w-full')}
            >
              <div className="bg-teal-2 border-teal-2 dark:bg-tealdark-2/50 dark:border-tealdark-2 flex w-full items-center gap-6 rounded-lg border px-4 py-4">
                <div className="flex h-full items-start">
                  <div className="bg-teal-1 border-teal-11 dark:bg-tealdark-1 dark:border-tealdark-11 rounded-full border p-[4px]">
                    <Check className="text-teal-10 h-4 w-4" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-11 dark:text-graydark-11">
                    <Balancer>
                      Thanks for signing up to our waitlist, we will be in touch
                      shortly once we are ready to onboard.
                      {/* Until then, you can{' '}
                      <a
                        href="https://twitter.com/noodle_run"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-12 dark:text-graydark-12 underline underline-offset-2"
                      >
                        follow us on twitter
                      </a>{' '}
                      for all updates. */}
                    </Balancer>
                  </p>
                </div>
              </div>
            </AnimateHeight>
            <AnimateHeight
              height={error ? 'auto' : 0}
              className={cn(error && 'w-full')}
              data-aos="fade-down"
            >
              <div className="bg-red-1 border-red-2 dark:bg-reddark-2/50 dark:border-reddark-2 flex w-full items-center gap-6 rounded-lg border px-4 py-4">
                <div className="flex h-full items-start">
                  <div className="bg-red-1 border-red-11 dark:bg-reddark-1 dark:border-reddark-11 rounded-full border p-[4px]">
                    <X className="text-red-10 h-4 w-4" />
                  </div>
                </div>
                <div>
                  <p className="text-red-11 dark:text-reddark-11">
                    {/* <Balancer>{error?.message}</Balancer> */}
                    <Balancer>{error}</Balancer>
                  </p>
                </div>
              </div>
            </AnimateHeight>
          </div>
        </div>
      </header>
    </main>
  );
}
