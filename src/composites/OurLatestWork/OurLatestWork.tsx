import Container from "@/components/elements/Container"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import React, { useMemo, useRef, useState } from "react"

interface ExperienceType {
  position: number
  image: string
}

interface ExperiencesProps {
  direction?: "left" | "right"
  experienceList?: Array<ExperienceType>
  translate?: number | null
}

interface CircleElementProps {
  image?: string
}

const CircleElement = (props: CircleElementProps) => (
  <div className="ring-1 ring-primary ring-inset rounded-[32px] w-[320px] h-[240px] mr-2">
    {props.image && <img src={props.image} />}
  </div>
)

const Experiences = (props: ExperiencesProps) => {
  const { translate, direction = "left" } = props
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
          {Array.from(Array(12).keys()).map((_, idx) => {
            // const obj = experienceList?.find((item) => item.position === idx)
            // if (!obj) return <CircleElement key={idx} />
            return <CircleElement key={idx} />
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
    <div ref={containerRef} className="mb-[200px]">
      <Container className="my-[200px] text-white md:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="relative">
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
          <div className="w-[80%]">
            <p className="text-[22px] font-thin mt-5 lg:mt-0">
              Our team is expert in developing designs and animations that can help you showcase and
              represent your business.
            </p>
          </div>
        </div>
      </Container>
      <div className="hidden sm:block mt-16 mb-10">
        <Experiences translate={translate && translate} direction="left" />
        <Experiences translate={translate && translate} direction="right" />
        <Experiences translate={translate && translate} direction="left" />
      </div>
    </div>
  )
}

export default OurLatestWork
