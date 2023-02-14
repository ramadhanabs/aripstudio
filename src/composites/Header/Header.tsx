/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/elements/Container"
import { Menu } from "@headlessui/react"
import { Bars2Icon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

const MENU = [
  {
    label: "Why Us",
    target: "/",
  },
  {
    label: "Services",
    target: "/",
  },
  {
    label: "Our Process",
    target: "/",
  },
  {
    label: "Portfolios",
    target: "/",
  },
  {
    label: "FAQs",
    target: "/",
  },
]

const Header = () => {
  return (
    <nav className="text-white fixed w-full top-0 left-0 z-50 bg-black">
      {/* Desktop */}
      <Container className="items-center justify-between md:py-4 hidden md:flex">
        <img src="/logo.svg" alt="logo-aripstudio" />
        <div className="flex items-center gap-5">
          {MENU.map((item) => (
            <Link href={item.target} key={item.label}>
              <p className="font-thin text-sm">{item.label}</p>
            </Link>
          ))}
        </div>
        <button className="bg-primary text-black px-4 py-3 rounded-full font-semibold">
          Let's Talk
        </button>
      </Container>

      {/* Mobile */}
      <Container className="flex md:hidden items-center justify-between py-4 mx-0">
        <img src="/logo.svg" alt="logo-aripstudio" className="w-[120px]" />
        <Menu as="div" className="relative">
          {({ open }) => (
            <>
              <Menu.Button className="border rounded-lg p-2">
                <motion.div
                  animate={{
                    rotate: open ? 90 : 0,
                  }}
                >
                  <Bars2Icon className="w-4 h-4" />
                </motion.div>
              </Menu.Button>
              <Menu.Items
                as="div"
                className="mt-3 p-4 absolute w-[240px] right-0 rounded-lg bg-gray-800 flex flex-col gap-4"
              >
                {MENU.map((item) => (
                  <Menu.Item as="div" key={item.label} className="text-lg">
                    <Link href="/">
                      <p className="font-thin text-sm">{item.label}</p>
                    </Link>
                  </Menu.Item>
                ))}
                <Menu.Item as="div" className="text-lg">
                  <Link href="/">
                    <p className="font-thin text-sm">Contact Us</p>
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </>
          )}
        </Menu>
      </Container>
    </nav>
  )
}

export default Header
