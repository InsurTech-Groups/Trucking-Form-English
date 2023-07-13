import React from 'react'

export default function CTA() {
  return (
    <div className="mx-auto bg-input-purple lg:w-1/2 sm:w-full rounded-xl">
      <div className="max-w-2xl px-4 py-5 mx-auto text-center sm:py-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Want to talk to an agent?</span>
        </h2>
       
        <a
          href="tel:18045313796"
          className="inline-flex items-center justify-center w-full py-3 mt-2 text-xl font-medium text-white ease-in border border-transparent rounded-md bg-gradient-to-r from-purple-500 to-purple-800 via-purple-400 animate-text px-9 sm:w-auto"
        >
          	👉 (804) 453-3796 👈
        </a>

        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Get a quote over the phone! We have agents standing by to answer your questions and get you a free quote for your home insurance today! 
        </p>
      </div>
    </div>
  )
}
