import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useState } from "react";

export const PeopleColors: string[] = [
  "bg-blue text-[#ffff]",
  "bg-pink text-[#ffff]",
  "bg-green text-[#ffff]",
  "bg-white text-[#ffff]",
];

type CreatePeopleModalProps = {
  show: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (PeopleName: string, colorIndex: number) => void;
};

const CreatePeopleModal:React.FC<CreatePeopleModalProps> = (props) => {
  
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<number>(0);

  const handleCreate = (PeopleName: string, colorIndex: number) => {
    if (name === "") return;
    props.handleSubmit(name, color);
    setName("");
    props.handleClose(false);
  };

  return (
    <Transition appear show={props.show}>
      <Dialog as="div" className="relative z-[70]" onClose={props.handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-500 bg-opacity-40"></div>
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100 bg-theme"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 bg-theme"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all bg-components">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-[#ffff]"
                >
                  Create People
                </Dialog.Title>
                <div className="mt-3">
                  <input
                    type="text"
                    className="w-full rounded-lg font-semibold placeholder:font-normal bg-components text-[#ffff] pl-2 hover:border"
                    placeholder="People name...."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mt-3 text-[#ffff]">
                  <RadioGroup value={color} onChange={setColor}>
                    <RadioGroup.Label className="sr-only">
                      People color
                    </RadioGroup.Label>
                    <div className="flex flex-wrap gap-3">
                      {PeopleColors.map((color, index) => (
                        <RadioGroup.Option
                          key={color}
                          value={index}
                          className={`flex h-10 w-10 items-center justify-center rounded-lg font-semibold ${color}`}
                        >
                          {({ active, checked }) =>
                            checked ? (
                              <CheckIcon className="h-7 w-7" />
                            ) : (
                              <p></p>
                            )
                          }
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="mt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-components px-3 py-1 text-base font-medium text-[#ffff] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 "
                    onClick={() => handleCreate(name, color)}
                  >
                    Create
                  </button>
                  <button
                    onClick={() => props.handleClose(false)}
                    type="button"
                    className="inline-flex justify-center rounded-md border bg-components px-3 py-1 text-base font-medium transition-colors duration-150 focus:outline-none focus:ring-1 hover:ring-1 text-[#ffff]"
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CreatePeopleModal;


