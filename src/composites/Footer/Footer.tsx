import Container from "@/components/elements/Container"
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid"
import React from "react"

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="border-y flex flex-col gap-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 text-white">
            <div>
              <img src="/logo.svg" alt="logo-aripstudio" />
              <p className="mt-4 md:text-[24px] font-thin">
                Design Agency Specialized in Illustrations,
                <br />
                UI/UX Design and Motion Graphic
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 my-4 md:my-0 gap-4">
              <div>
                <p className="font-bold text-[24px] mb-4 md:mb-6">Navigations</p>
                <div className="md:text-[20px]">
                  <p className="font-thin mb-2">Home</p>
                  <p className="font-thin mb-2">Why Us</p>
                  <p className="font-thin mb-2">Services</p>
                  <p className="font-thin mb-2">Our Process</p>
                  <p className="font-thin mb-2">Portfolios</p>
                  <p className="font-thin mb-2">FAQs</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-[24px] mb-4 md:mb-6">Services</p>
                <div className="md:text-[20px]">
                  <p className="font-thin mb-2">Brand Identity</p>
                  <p className="font-thin mb-2">Visual Design</p>
                  <p className="font-thin mb-2">Development</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-[24px] mb-4 md:mb-6">Services</p>
                <div className="md:text-[20px]">
                  <p className="font-thin mb-2">Behance</p>
                  <p className="font-thin mb-2">Instagram</p>
                  <p className="font-thin mb-2">Twitter</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 text-white">
            <div className="flex items-center mb-3 md:mb-0">
              <MapPinIcon className="text-primary w-6 h-6 mr-2" />
              <p className="font-thin md:text-[24px]">Yogyakarta City. Indonesia.</p>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="text-primary w-6 h-6 mr-2" />
              <p className="font-thin md:text-[24px]">achmadaarifty@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="py-8 flex items-center justify-between text-white">
          <p className="md:text-[20px] font-thin">© 2023 Aripstudio.</p>
          <div className="hidden md:flex items-center gap-6">
            <p className="text-[20px] font-thin">Terms and Conditions</p>
            <p className="text-[20px] font-thin">Privacy Policy</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
