import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people = [
  { name: "Bamenda" },
  { name: "Buea" },
  { name: "Douala" },
  { name: "Yaounde" },
  { name: "Kumba" },
  { name: "Baffousam" },
];

export default function SelectMenu(props) {
  const [selected, setSelected] = useState(people[0]);
  const { customStyle } = props;

  return (
    <div className={"w-72 font-bold font-rubik "}>
      <Listbox value={selected} onChange={setSelected} className={customStyle}>
        <div className="relative ">
          <Listbox.Button className="relative w-full border py-4 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className=" z-50 absolute w-72 py-1 mt-1 overflow-x-hidden overflow-y-scroll text-lg bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${
                      active
                        ? " bg-amber-100 hover:text-blue-700 hover:bg-blue-100"
                        : "text-gray-900"
                    }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={person}>
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-semibold" : "font-normal"
                        } block truncate`}>
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-amber-600" : "text-amber-600"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}>
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
