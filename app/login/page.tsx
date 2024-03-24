import React from "react";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="mx-4 sm:mx-[50px] mt-32">
        <form className="max-w-lg mx-auto">
          <div className="text-2xl mb-10">Log in to your account</div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="yourname@gmail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="**********"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
            You don`t have an account yet? <Link href={"signup"} className="text-blue-400"> Sign Up</Link>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default page;
