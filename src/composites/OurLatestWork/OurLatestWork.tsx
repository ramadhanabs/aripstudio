import Container from "@/components/elements/Container"
import { useMotionValueEvent, useScroll, motion } from "framer-motion"
import React, { useMemo, useRef, useState } from "react"
import { DATA_1, DATA_2, DATA_3 } from "./constant"

interface ExperienceType {
  position: number
  image: string
}

interface ExperiencesProps {
  portfolios: string[] 
  direction?: "left" | "right"
  translate?: number | null
}

interface CircleElementProps {
  image?: string
}

const CircleElement = (props: CircleElementProps) => (
  <motion.img
    className=" rounded-[32px] w-[240px] h-[140px] md:w-[320px] md:h-[240px] mr-2 object-cover hover:cursor-pointer"
    src={props.image}
    whileHover={{ rotate: -2, scale: 0.9 }}
  />
)

const Experiences = (props: ExperiencesProps) => {
  const { translate, direction = "left", portfolios } = props
  const mappedDirection = useMemo(() => {
    if (!translate) return "0"
    if (direction === "left") {
      return `-${translate}`
    }
    return `${translate - 3000}`
  }, [direction, translate])
  return (
    <>
      <div className="overflow-hidden -mx-10 mb-4">
        <div
          className="flex w-max gap-2"
          style={{ transform: `translate(${mappedDirection}px, 0%)` }}
        >
          {portfolios.map((portfolio, idx) => {
            // const obj = experienceList?.find((item) => item.position === idx)
            // if (!obj) return <CircleElement key={idx} />
            return <CircleElement key={idx} image={portfolio} />
          })}
        </div>
      </div>
    </>
  )
}

const OurLatestWork = () => {
  const containerRef = useRef(null)
  const { scrollY } = useScroll({ target: containerRef })
  const [translate, setTranslate] = useState<number | null>(null)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setTranslate(latest - 9700 * 0.9)
  })

  return (
    <div ref={containerRef} className="my-[200px]">
      <Container className="mt-[100px] md:my-[200px] text-white md:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="hidden md:block relative">
            <p className="text-[80px] font-semibold leading-tight tracking-tighter">Our Latest</p>

            <div className="absolute bottom-[-110px]" style={{ transform: "rotate(2deg)" }}>
              <div className="relative w-max">
                <span className="bg-primary px-2 py-1 rounded-[16px] text-black text-[80px] font-semibold tracking-tighter">
                  work
                </span>
                <span className="absolute top-[-20px] right-[-40px]">
                  <p className="text-[80px]">*</p>
                </span>
              </div>
            </div>
          </div>
          <p className="block md:hidden text-[48px] font-bold leading-none">
            Our Latest <strong className="text-primary">Work</strong>
          </p>
          <div className="md:w-[80%]">
            <p className="text-lg md:text-[22px] font-thin mt-5 lg:mt-0">
              Our team is expert in developing designs and animations that can help you showcase and
              represent your business.
            </p>
          </div>
        </div>
      </Container>
      <div className="mt-10 md:mt-16 mb-10">
        <Experiences translate={translate && translate} direction="left" portfolios={DATA_1} />
        <Experiences translate={translate && translate} direction="right" portfolios={DATA_2} />
        <Experiences translate={translate && translate} direction="left" portfolios={DATA_3} />
      </div>
    </div>
  )
}

export default OurLatestWork
