/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/elements/Container"
import { Disclosure } from "@headlessui/react"
import { motion } from "framer-motion"
import React from "react"

const DATA = [
  {
    id: 1,
    question: "How long does it take to get started?",
    answer:
      "Our turnaround is lightning-fast. Just one week from signing off and we’re there with the kick-off meeting to get it rolling.",
  },
  {
    id: 2,
    question: "What is your typical working process?",
    answer:
      "It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). We always start a project with analysis, learning the requirements, and making estimates that will be shared in the price proposal. Then it’s off to signing off, kicking off, and getting your business to the next level with a pinch of our design magic.",
  },
  {
    id: 3,
    question: "Do you work on a fixed-price basis or time and material?",
    answer:
      "It all starts with grabbing a cup of coffee, chilling with mates, and some quality time at the PlayStation (just kidding!). We always start a project with analysis, learning the requirements, and making estimates that will be shared in the price proposal. Then it’s off to signing off, kicking off, and getting your business to the next level with a pinch of our design magic.",
  },
  {
    id: 4,
    question: "What are the work hour?",
    answer:
      "Our design team will work from 9:00 AM - 5:00 PM GMT +7 Jakarta, Indonesian time. Meanwhile management team will be available from 9:00 AM to 9:00 PM Jakarta time.",
  },
  {
    id: 5,
    question: "What if I don’t like the design?",
    answer: "Do not worry! We will revise your design until you are 100% satisfied.",
  },
  {
    id: 6,
    question: "What do we get after this project is finished?",
    answer:
      "We will provide your source file at the end of the finished project. Such as Figma files, Ai files and Ae files.",
  },
]

const FAQ = () => {
  return (
    <Container className="mb-[200px] text-white md:max-w-7xl">
      <p className="text-[48px] md:text-[80px] leading-none font-bold tracking-tight mb-4">
        What's your <br />
        <span className="text-primary">interest?</span>
      </p>
      <p className="text-[18px] md:text-[22px] font-thin">Do you have a question you want to ask?</p>

      <section className="my-10">
        {DATA.map((item) => (
          <Disclosure as={"div"} className="py-8 border-b border-b-white/60" key={item.id}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  as={"div"}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <p className="text-[24px] md:text-[36px] font-semibold tracking-tight">{item.question}</p>
                  <motion.img
                    src="/icons/arrow-right.svg"
                    alt="arrow-right"
                    className="w-[30px]"
                    animate={{
                      rotate: open ? 90 : 0,
                    }}
                  />
                </Disclosure.Button>
                <Disclosure.Panel as={"div"} className="md:w-3/4 pt-4">
                  <p className="md:text-[20px] font-thin opacity-90">{item.answer}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </section>
    </Container>
  )
}

export default FAQ
