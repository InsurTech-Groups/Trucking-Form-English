import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is Liability?",
    answer:
      "With the proper coverage, there won't be much to worry about. Let's say someone happens to get injured on your property, the expenses of their injuries can be covered without you having to deal with any of the expenses yourself. Medical bills can get pretty expensive, and with the right coverage, you will not even have to worry about these bills yourself in the chance that an injury may occur on your premise. Get a quote with ITG and see what the best option for you is.",
  },
  {
    question: "What about my expenses?",
    answer:
      "Having your home affected by natural disasters or other uncommon events (such as a house fire, flooding, etc.) can be a hassle and could put your living conditions at risk. With the proper coverage the expenses for more suitable living arranges would be covered while the damages to the home are being taken care of. ",
  },
  {
    question: "Are my personal belongings covered?",
    answer:
      "No one wants to go through the loss of personal possessions for any reason, but the reality is that these things unfortunately happen whether it'd be from natural disasters, theft, or any other reason and we have to be prepared for that. Make sure your covered with Insurtech Groups today and protect your belongings.",
  },
  
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  return (
    <div className="bg-dark-purple">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y bg-white rounded-lg p-5 divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

