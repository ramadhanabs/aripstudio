import { ChevronRightIcon } from "@heroicons/react/24/solid"
import React from "react"

const ContactUs = () => {
  return (
    <section className="mt-[200px] mb-[300px] flex flex-col items-center">
      <p className="text-[120px] text-white font-semibold text-center leading-none">
        Want to work <br />
        with us?
      </p>
      <button className="bg-primary text-black px-6 py-2 rounded-full font-semibold text-[30px] hover:scale-105 ease-in-out duration-200 mt-10 flex items-center">
        Let's Talk
        <span className="w-max p-1 rounded-full bg-black flex items-center justify-center ml-3">
          <ChevronRightIcon className="w-4 h-4 text-primary" />
        </span>
      </button>
    </section>
  )
}

export default ContactUs
