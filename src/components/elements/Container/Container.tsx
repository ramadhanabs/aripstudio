import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

interface ContainerProps {
  className?: string
}

const Container = (props: PropsWithChildren<ContainerProps>) => {
  const { className, children } = props
  return <div className={twMerge("w-full max-w-[400px] md:max-w-[1920px] mx-auto px-4 lg:px-16", className)}>{children}</div>
}

export default Container
