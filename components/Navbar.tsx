"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";
import clsx from "clsx";

interface Props {}

interface ItemProps {
  href: string;
  text: string;
}

const Item = ({ href = "/", text = "Link" }: ItemProps) => {
  const pathName = usePathname();

  return (
    <>
      <Link
        href={href}
        className={clsx(
          "text-[#E2E2E2] hover:text-white",
          pathName === href || (pathName === "#" && href === "#")
            ? "text-[#E2E2E2]"
            : null
        )}
      >
        {text}
      </Link>
    </>
  );
};

const Navbar = ({}: Props) => {
  return (
    <>
      <Popover className="mx-4 lg:mx-[50px] flex items-center h-[100px]">
        <Link href="/" className="tracking-widest font-semibold text-sm">
          CodePlus
        </Link>
        <div className="grow">
          <div className="hidden font-normal text-sm sm:flex items-center justify-center gap-2 md:gap-[30px]">
            <Item href={"#about"} text="About" />
            <Item href={"#program"} text="Program" />
            <Item href={"#pricing"} text="Pricing" />
          </div>
        </div>
        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center p-2 focus:outline-none">
            <span className="sr-only">Open menu</span>
            <Bars3Icon
              className="h-5 w-5 text-[#E2E2E2]"
              aria-hidden="true"
            />
          </Popover.Button>
        </div>
        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30" />
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scle-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            className="absolute inset-x-0 top-[100px] origin-top-right transform transition md:hidden z-10"
          >
            <div className="">
              <div className="px-[50px] py-[50px]">
                <div className="">
                  <nav className="grid gap-y-8 font-normal text-sm">
                  <Item href={"#about"} text="About" />
                  <Item href={"#program"} text="Program" />
                  <Item href={"#pricing"} text="Pricing" />
                  </nav>
                </div>
                <div className="mt-7 flex flex-col">
                  <Link
                    href={"login"}
                    className="font-normal text-sm text-[#E2E2E2] mb-8"
                  >
                    Login
                  </Link>
                  <Link
                    href={"signup"}
                    className="font-normal text-sm text-[#E2E2E2]"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>

        <div className="hidden sm:block">
          <Link href={"login"} className="font-normal text-sm text-[#E2E2E2] mr-8">
            Login
          </Link>
          <Link href={"signup"} className="font-normal text-sm text-[#E2E2E2]">
            Sign Up
          </Link>
        </div>
      </Popover>
    </>
  );
};

export default Navbar;
