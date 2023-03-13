import React from 'react';
import Lottie from "lottie-react";
import Sending from "../assets/Confirm.json";
import {IdentificationIcon, UserPlusIcon, FaceSmileIcon} from '@heroicons/react/20/solid'


const WhyUsFeatures = () => {

  const features = [
    {
      name: 'Insurance For Every Need',
      description:
        'We help you insure everything from personal insurance to business insurance. We cover everything that you care about',
      icon: IdentificationIcon,
    },
    {
      name: 'Qualified & Personal',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: UserPlusIcon,
    },
    {
      name: 'Top Rated',
      description: 'We are 5 Star rated across all our channels, get a quote and find out why people perfer us.',
      icon: FaceSmileIcon,
    },
  ]
  

  return (
    <div className="overflow-hidden bg-input-purple rounded-lg  mb-5 py-24 sm:py-32">
    <div className="mx-auto md:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start align-middle justify-center">
        <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 text-button-purple">Insurance Made For You</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Get Insurance Personalized For You</p>
            <p className="mt-6 text-lg leading-8 text-white">
            Insurtech Groups is a full service independent insurance agency offering a wide range of products with over 40+ carriers to find our clients the best products at the best price
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <feature.icon className="absolute top-1 left-1 h-5 w-5 text-white" aria-hidden="true" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="sm:px-6 lg:px-0">
          <div className="relative isolate overflow-hidden bg-dark-purple px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
            <div
              className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Lottie animationData={Sending} loop={true} style={{ 'width': '500px '}} />
            </div>
            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WhyUsFeatures