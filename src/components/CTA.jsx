import React from 'react'

export default function CTA() {
  return (
    <div className="bg-input-purple lg:w-1/2 sm:w-full mx-auto rounded-xl">
      <div className="mx-auto max-w-2xl py-5 px-4 text-center sm:py-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Want to talk to an agent?</span>
        </h2>
       
        <a
          href="tel:8777141714"
          className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r 
          from-purple-500
          to-purple-800
          via-purple-400 animate-text ease-in
          px-9 py-3 text-xl font-medium text-white  sm:w-auto"
        >
          	👉 (877) 714-1714 👈
        </a>

        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Get a quote over the phone! We have agents standing by to answer your questions and get you a free quote for your home insurance today! 
        </p>
      </div>
    </div>
  )
}
