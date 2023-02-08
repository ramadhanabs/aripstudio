import Container from "@/components/elements/Container"
import { Disclosure } from "@headlessui/react"
import { motion } from "framer-motion"
import React from "react"

const DATA = [
  {
    id: 1,
    name: "Brand Identity",
    services: [
      "Visual Branding",
      "Brand Strategy",
      "Identity Development",
      "Digital and Print Collaterral",
      "Brand Guidelines",
      "Mockup Design",
    ],
  },
  {
    id: 2,
    name: "Visual Design",
    services: [
      "Design Systems",
      "Responsive Website",
      "Digital Products",
      "Logo Design",
      "Motion & Interaction",
      "Illustration",
      "Graphic Design",
      "3D Design",
    ],
  },
  {
    id: 3,
    name: "Development ",
    services: [
      "Front-end Development",
      "CMS Integrations",
      "SEO Friendly",
      "Custom Codes",
      "Web Maintenance",
      "Quality Assurance",
    ],
  },
]

const OurService = () => {
  return (
    <Container className="mt-[600px] mb-[200px] text-white md:max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="relative">
          <p className="text-[80px] font-semibold leading-tight tracking-tighter">
            The services
            <br />
            we
          </p>

          <div className="absolute bottom-[-5%] left-[120px]" style={{ transform: "rotate(2deg)" }}>
            <div className="relative w-max">
              <span className="bg-primary px-2 py-1 rounded-[16px] text-black text-[80px] font-semibold tracking-tighter">
                provide
              </span>
              <span className="absolute top-[-20px] right-[-40px]">
                <p className="text-[80px]">*</p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[80%]">
          <p className="text-[22px] font-thin mt-5 lg:mt-0">
            The focus of the service we provide is more on UI animated illustration websites. But we
            are not limited to that, because there are other services.
          </p>
        </div>
      </div>

      <section className="my-10">
        {DATA.map((item) => (
          <Disclosure as={"div"} className="py-8 border-b border-b-white/60" key={item.id}>
            {({ open }) => (
              <>
                <Disclosure.Button as={"div"} className="flex justify-between items-center cursor-pointer">
                  <p className="text-[64px] font-semibold">{item.name}</p>
                  <motion.img
                    src="/icons/arrow-right.svg"
                    alt="arrow-right"
                    className="w-[58px]"
                    animate={{
                      rotate: open ? 90 : 0,
                    }}
                  />
                </Disclosure.Button>
                <Disclosure.Panel as={"div"} className="flex flex-wrap items-center gap-4 mt-5">
                  {item.services.map((service) => (
                    <span
                      className="flex justify-center items-center border rounded-full py-1 px-8 text-[22px] cursor-default hover:bg-primary hover:text-black hover:border-transparent ease-in-out duration-200 font-thin"
                      key={service}
                    >
                      {service}
                    </span>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </section>
    </Container>
  )
}

export default OurService
