/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
// import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  /> */}
                  <div className="block lg:hidden h-8 w-auto font-mono font-extrabold text-white text-3xl">
                    Beelink
                  </div>
                  <div className="hidden lg:block font-mono font-extrabold h-8 w-auto text-white text-3xl">
                    Beelink
                  </div>
                  {/* <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
