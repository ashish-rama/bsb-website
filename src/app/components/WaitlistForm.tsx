'use client';

import { ArrowRight, Check, Loader2, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { Input } from './Input';
import { Select } from '@radix-ui/react-select';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select';
import AnimateHeight from 'react-animate-height';
import { cn } from '../utils/cn';
import { Blur } from './Hero';
import { Container } from './Containter';
import Link from 'next/link';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [reason, setReason] = useState<
    'STUDENT' | 'PROJECT' | 'BOTH' | undefined
  >(undefined);
  const [formDisabled, setFormDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  return (
    <main>
      <header className="container mx-auto mt-8 flex justify-center md:mt-40 xl:mt-40">
        <div className="flex flex-col gap-6">
          <div className="relative">
            <Blur />
            <div className="relative ml-auto">
              <div className="lg:w-2/3 text-center mx-auto">
                <h1 className="relative text-4xl tracking-tight font-extrabold text-slate-800 sm:text-5xl md:text-6xl z-40">
                  <Balancer>
                    Join the waitlist and transform your bogey management
                    workflow.
                  </Balancer>
                </h1>
                <p className="mt-8 text-xl text-zinc-700 dark:text-zinc-300 leading-8">
                  <Balancer>
                    By signing up to our waitlist, you will be first to know
                    when we launch and will be notified on a rolling basis for
                    early access.
                  </Balancer>
                </p>
              </div>
            </div>
          </div>
          <form
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
          </form>
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
                      shortly when Noodle becomes available. Until then, you can{' '}
                      <a
                        href="https://twitter.com/noodle_run"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-12 dark:text-graydark-12 underline underline-offset-2"
                      >
                        follow us on twitter
                      </a>{' '}
                      for all updates.
                    </Balancer>
                  </p>
                </div>
              </div>
            </AnimateHeight>
            <AnimateHeight
              height={error ? 'auto' : 0}
              className={cn(error && 'w-full')}
            >
              <div className="bg-red-1 border-red-2 dark:bg-reddark-2/50 dark:border-reddark-2 flex w-full items-center gap-6 rounded-lg border px-4 py-4">
                <div className="flex h-full items-start">
                  <div className="bg-red-1 border-red-11 dark:bg-reddark-1 dark:border-reddark-11 rounded-full border p-[4px]">
                    <Check className="text-red-10 h-4 w-4" />
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
