import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FormEvent, useEffect, useRef, useState } from "react";
import { RiAddFill } from "react-icons/ri";

import React from 'react';

type AddFormProps = {
  
  placeholder: string;
  onSubmit: (name: string) => void;
};

const AddForm:React.FC<AddFormProps> = (props) => {
  
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowForm(false);
        setName("");
      }
    };
    formRef.current?.addEventListener("keydown", handleKeyDown);
    return () => {
      formRef.current?.removeEventListener("keydown", handleKeyDown);
    };
  });
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (name) {
      setName("");
      props.onSubmit(name);
    } else return;
    setShowForm(false);
  };
  
  return (
    <div>
      {showForm ? (
        <form
          ref={formRef}
          autoComplete="off"
          onSubmit={handleSubmit}
          onBlur={() => {
            if (name) return;
            setShowForm(false);
          }}
        >
          <div className="w-64 appearance-none rounded-lg bg-components p-3">
            <input
              className="w-full rounded-lg text-[#656464]"
              placeholder={props.placeholder}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <div className="mt-4 flex items-center justify-between text-[#ffffff]">
              <button className="flex items-center gap-1 rounded-md px-3 py-1 text-sm">
                <CheckIcon className="h-5 w-5 text-[#ffff]" />
                Add
              </button>
              <button
                onClick={() => {
                  setName("");
                  setShowForm(false);
                }}
                className="rounded-md p-2 text-red-600"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="text-[#ffffff] flex items-center justify-center bg-selected font-bold text-lg h-6 w-6 rounded-lg">
                <RiAddFill />
        </button>
      )}
    </div>
  );
}
export default AddForm;



