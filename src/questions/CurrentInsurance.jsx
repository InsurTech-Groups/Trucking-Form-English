import { useEffect, useState, Fragment } from 'react';
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { toast } from "react-toastify";
import { userData } from "../data/userData";
import { currentInsurance } from '../data/addToUserData';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const provider = [
  { id: 'Not Insured', name: 'Not Insured' },
  { id: 'Progressive', name: 'Progressive' },
  { id: 'Allstate', name: 'Allstate' },
  { id: 'StateFarm', name: 'State Farm' },
  { id: 'Nationwide', name: 'Nationwide' },
  { id: 'LibertyMutual', name: 'Liberty Mutual' },
  { id: 'AIG', name: 'AIG' },
  { id: 'TheHartford', name: 'The Hartford' },
  { id: 'Chubb', name: 'Chubb' },
  { id: 'Travelers', name: 'Travelers' },
  { id: 'Hiscox', name: 'Hiscox' },
  { id: 'MetLife', name: 'MetLife' },
  { id: 'Hanover', name: 'Hanover' },
  { id: 'CNA', name: 'CNA' },
  { id: 'Geico', name: 'Geico' },
  { id: 'BerkshireHathaway', name: 'Berkshire Hathaway' },
  { id: 'Other', name: 'Other' }
];

export default function CurrentInsurance() {
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [selected, setSelected] = useState(provider[0]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Set the default value of the Combobox based on userData.current_insurance
    if (userData.current_insurance) {
      const defaultSelection = provider.find(
        (p) => p.name.toLowerCase() === userData.current_insurance.toLowerCase()
      );
      setSelected(defaultSelection || provider[0]);
    } else {
      setSelected(provider[0]);
    }
  }, []);

  const filteredProviders = query === ''
    ? provider
    : provider.filter((p) =>
        p.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
      );

  const checkSelected = () => {
    if (!selected ) {
      setIsButtonDisabled(true);
      return;
    }

    currentInsurance(selected.name);
    navigate('/policy-start');
  };

  return (
    <div className="pb-10 bg-dark-purple">
      <Banner setProgress={80} />

      <div className="flex flex-col items-center px-4 py-5 mt-20 formArea justify-top sm:px-6 lg:px-4">
        <div className="space-y-8 m-w-1/2">
          <div>
            <h2 className="mt-4 text-4xl font-extrabold text-center text-white">
              Who is your current{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                Insurance Provider
              </span>
              ?
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <Combobox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <div className="relative w-full overflow-hidden text-left rounded-lg shadow-md cursor-default bg-input-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-input-purple sm:text-sm">
                  <Combobox.Input
                    className="w-full h-20 py-2 pl-3 pr-10 mx-auto font-bold leading-5 text-center text-gray-900 border-none text-md focus:ring-0"
                    displayValue={(person) => person.name}
                    onChange={(event) => {
                      setIsButtonDisabled(false);
                      setQuery(event.target.value);
                    }}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery('')}
                >
                  <Combobox.Options className="absolute z-40 w-full py-1 mt-1 overflow-auto text-lg rounded-md shadow-lg bg-input-purple max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredProviders.length === 0 && query !== '' ? (
                      <div className="relative px-4 py-2 text-lg text-white cursor-default select-none">
                        Nothing found. Try 'Other' or 'Not Insured'
                      </div
>
                      ) : (
                        filteredProviders.map((person) => (
                          <Combobox.Option
                            key={person.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active ? 'bg-dark-purple text-white' : 'text-white'
                              }`
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                  }`}
                                >
                                  {person.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? 'text-white' : 'text-teal-600'
                                    }`}
                                  >
                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
              <div className="leading-5">
                <button
                  type="submit"
                  disabled={isButtonDisabled}
                  onClick={checkSelected}
                  className={`px-6 py-4 mt-5 text-lg justify-center text-center w-full bg-pink-600 ${
                    isButtonDisabled
                      ? "cursor-not-allowed disabled:opacity-75  bg-input-purple"
                      : ""
                  } hover:shadow-lg text-white rounded transition duration-200`}
                  id="zipCodeButton"
                >
                  Next
                </button>
              </div>

              <LinkWithQuery to="/business-address">Back</LinkWithQuery>
            </form>
          </div>
        </div>
        <CTA />
      </div>
    );
}