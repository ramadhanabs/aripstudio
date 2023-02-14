import Container from "@/components/elements/Container"
import { motion } from "framer-motion"
import React from "react"

const DATA = [
  {
    id: 1,
    title: "Discussion",
    subtitle: "1. First Step",
    img: "/images/work-discuss.png",
    description:
      "Understand the client's business, goals, and challenges for building relationships.",
  },
  {
    id: 2,
    title: "Ideation",
    subtitle: "2. Second Step",
    img: "/images/work-idea.png",
    description: "Gather ideas and create the first concept for the future product.",
  },
  {
    id: 3,
    title: "Execution",
    subtitle: "3. Third Step",
    img: "/images/work-execute.png",
    description: "Provide the first draft of a project, accept minor and major revisions",
  },
]

const UnionIllustration = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="path-1-outside-1_3_454"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="60"
      height="60"
      fill="black"
    >
      <rect fill="white" width="60" height="60" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.316 44.0503V59H35.916V43.9542L46.4869 54.5251L54.6893 46.3227L44.0506 35.684H59V24.084H44.2823L54.6893 13.677L46.4869 5.47456L35.916 16.0455V1H24.316V15.9494L13.6771 5.31051L5.47471 13.5129L16.0458 24.084H1V35.684H16.2775L5.47471 46.4868L13.6771 54.6892L24.316 44.0503Z"
      />
    </mask>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M26.0675 45.318L26.6711 60.2555L38.2616 59.7872L37.6542 44.7537L48.6432 54.8892L56.5078 46.3623L45.4483 36.1618L60.3855 35.5583L59.9171 23.9677L45.2115 24.5619L55.1898 13.7432L46.6629 5.87863L36.5274 16.8677L35.92 1.83449L24.3295 2.30281L24.933 17.24L13.8733 7.03932L6.00871 15.5662L16.9979 25.7019L1.96443 26.3093L2.43275 37.8999L17.6978 37.2831L7.33995 48.5131L15.8669 56.3777L26.0675 45.318Z"
      fill="white"
    />
    <path
      d="M24.316 59H23.316V60H24.316V59ZM24.316 44.0503H25.316V41.6361L23.6089 43.3432L24.316 44.0503ZM35.916 59V60H36.916V59H35.916ZM35.916 43.9542L36.6231 43.2471L34.916 41.54V43.9542H35.916ZM46.4869 54.5251L45.7798 55.2323L46.4869 55.9394L47.194 55.2323L46.4869 54.5251ZM54.6893 46.3227L55.3965 47.0298L56.1036 46.3227L55.3965 45.6156L54.6893 46.3227ZM44.0506 35.684V34.684H41.6364L43.3435 36.3911L44.0506 35.684ZM59 35.684V36.684H60V35.684H59ZM59 24.084H60V23.084H59V24.084ZM44.2823 24.084L43.5752 23.3769L41.8681 25.084H44.2823V24.084ZM54.6893 13.677L55.3964 14.3841L56.1036 13.677L55.3964 12.9699L54.6893 13.677ZM46.4869 5.47456L47.194 4.76745L46.4869 4.06035L45.7798 4.76745L46.4869 5.47456ZM35.916 16.0455H34.916V18.4597L36.6231 16.7526L35.916 16.0455ZM35.916 1H36.916V0H35.916V1ZM24.316 1V0H23.316V1H24.316ZM24.316 15.9494L23.6089 16.6565L25.316 18.3636V15.9494H24.316ZM13.6771 5.31051L14.3843 4.6034L13.6771 3.89629L12.97 4.6034L13.6771 5.31051ZM5.47471 13.5129L4.7676 12.8058L4.0605 13.5129L4.7676 14.2201L5.47471 13.5129ZM16.0458 24.084V25.084H18.46L16.7529 23.3769L16.0458 24.084ZM1 24.084V23.084H0V24.084H1ZM1 35.684H0V36.684H1V35.684ZM16.2775 35.684L16.9846 36.3911L18.6917 34.684H16.2775V35.684ZM5.47471 46.4868L4.7676 45.7796L4.0605 46.4868L4.7676 47.1939L5.47471 46.4868ZM13.6771 54.6892L12.97 55.3963L13.6771 56.1034L14.3843 55.3963L13.6771 54.6892ZM25.316 59V44.0503H23.316V59H25.316ZM35.916 58H24.316V60H35.916V58ZM34.916 43.9542V59H36.916V43.9542H34.916ZM47.194 53.818L36.6231 43.2471L35.2089 44.6613L45.7798 55.2323L47.194 53.818ZM53.9822 45.6156L45.7798 53.818L47.194 55.2323L55.3965 47.0298L53.9822 45.6156ZM43.3435 36.3911L53.9822 47.0298L55.3965 45.6156L44.7577 34.9769L43.3435 36.3911ZM59 34.684H44.0506V36.684H59V34.684ZM58 24.084V35.684H60V24.084H58ZM44.2823 25.084H59V23.084H44.2823V25.084ZM53.9822 12.9699L43.5752 23.3769L44.9894 24.7911L55.3964 14.3841L53.9822 12.9699ZM45.7798 6.18167L53.9822 14.3841L55.3964 12.9699L47.194 4.76745L45.7798 6.18167ZM36.6231 16.7526L47.194 6.18167L45.7798 4.76745L35.2089 15.3384L36.6231 16.7526ZM34.916 1V16.0455H36.916V1H34.916ZM24.316 2H35.916V0H24.316V2ZM25.316 15.9494V1H23.316V15.9494H25.316ZM12.97 6.01761L23.6089 16.6565L25.0231 15.2423L14.3843 4.6034L12.97 6.01761ZM6.18182 14.2201L14.3843 6.01761L12.97 4.6034L4.7676 12.8058L6.18182 14.2201ZM16.7529 23.3769L6.18182 12.8058L4.7676 14.2201L15.3387 24.7911L16.7529 23.3769ZM1 25.084H16.0458V23.084H1V25.084ZM2 35.684V24.084H0V35.684H2ZM16.2775 34.684H1V36.684H16.2775V34.684ZM6.18182 47.1939L16.9846 36.3911L15.5704 34.9769L4.7676 45.7796L6.18182 47.1939ZM14.3843 53.9821L6.18182 45.7796L4.7676 47.1939L12.97 55.3963L14.3843 53.9821ZM23.6089 43.3432L12.97 53.9821L14.3843 55.3963L25.0231 44.7574L23.6089 43.3432Z"
      fill="black"
      mask="url(#path-1-outside-1_3_454)"
    />
  </svg>
)

const WorkingProcess = () => {
  return (
    <Container className="my-[80px] text-white md:max-w-7xl">
      <div className="mb-[100px]">
        <div className="hidden md:grid grid-cols-2 items-center gap-6">
          <p className="text-[80px] font-semibold leading-tight tracking-tighter text-right">
            Working
          </p>

          <div style={{ transform: "rotate(2deg)" }}>
            <div className="relative w-max">
              <span className="bg-primary px-3 py-1 rounded-[16px] text-black text-[80px] font-semibold tracking-tighter">
                process
              </span>
            </div>
          </div>
        </div>
        <p className="block md:hidden text-[48px] text-center font-bold leading-none mb-4">
          Working <strong className="text-primary">Process</strong>
        </p>
        <p className="text-center text-lg md:text-[22px] font-thin">
          A well-structured workflow with great design execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DATA.map((item, index) => (
          <motion.div
            className="bg-white rounded-[20px] p-8 text-black"
            key={item.id}
            whileHover={{ rotate: -2, border: "3px solid #ABFF00" }}
          >
            <p className="font-thin text-black">{item.subtitle}</p>
            <img src={item.img} alt={`illustration-${index}`} />
            <div className="mt-[-24px]">
              <p className="font-bold text-2xl">{item.title}</p>
              <p className="font-thin">{item.description}</p>
            </div>
            <div className="flex justify-end mt-4">
              <UnionIllustration />
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

export default WorkingProcess
