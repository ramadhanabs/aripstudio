import Container from "@/components/elements/Container"
import useCoordinate from "@/hooks/useCoordinate"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import React, { PropsWithChildren, useEffect, useRef, useState } from "react"
import { DATA } from "./constant"

const AnimateWrapper = ({ children }: PropsWithChildren) => (
  <motion.p
    className="font-semibold text-[64px] leading-none"
    initial={{ opacity: "0%", y: "10%" }}
    whileInView={{ opacity: "100%", y: "0%" }}
    viewport={{ once: true }}
    transition={{ delay: 0.5 }}
  >
    {children}
  </motion.p>
)

interface CardWhyUsProps {
  title: string
  description: string
  img_url: string
}

const CardWhyUs = (props: CardWhyUsProps) => {
  const { title, description, img_url } = props
  return (
    <div className="bg-primary rounded-lg px-8 py-12 w-[400px] h-[400px] flex flex-col justify-center">
      <img src={img_url} alt="" className="w-[70px]" />
      <p className="text-[32px] font-semibold mb-4 leading-tight">{title}</p>
      <p className="text-[20px] font-thin leading-tight">{description}</p>
    </div>
  )
}

const WhyUs = () => {
  const ref = useRef(null)
  const { scrollY } = useScroll({
    target: ref,
  })
  const [positionX, setPositionX] = useState<number | null>(null)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPositionX(latest)
  })

  return (
    <>
      <Container className="py-[300px]">
        <div className="flex flex-col items-center justify-between gap-[500px] text-white text-center">
          <AnimateWrapper>
            Creative design
            <br />
            attracts <span className="text-primary">people.</span>
          </AnimateWrapper>
          <AnimateWrapper>
            Me?
            <br />
            Deliver <span className="text-primary">both.</span>
          </AnimateWrapper>
          <AnimateWrapper>
            Creative design
            <br />
            attracts <span className="text-primary">people.</span>
          </AnimateWrapper>
          <AnimateWrapper>
            For you, for people,
            <br />
            for <span className="text-primary">business.</span>
          </AnimateWrapper>
        </div>
      </Container>

      <section className="relative">
        <div className="top-[360px] fixed w-full right-[-5000px]">
          <motion.div
            className="flex items-start gap-[40px] w-max"
            style={{ translateX: positionX !== null ? `-${positionX}px` : "none" }}
          >
            {DATA.map((item) => (
              <CardWhyUs
                title={item.title}
                description={item.description}
                img_url={item.img_url}
                key={item.title}
              />
            ))}
          </motion.div>
        </div>
        <div className="h-screen sticky py-[80px] z-10 top-0">
          <p className="text-[64px] mt-[48px] font-semibold text-center text-white z-10">Why us?</p>
        </div>
        <div className="h-[3500px] overflow-hidden relative bg-transparent z-20" ref={ref}></div>
      </section>
    </>
  )
}

export default WhyUs
