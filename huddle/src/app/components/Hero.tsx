import Image from "next/image";
import Arrow from "../../../public/assets/blue-button.svg"
import Gradient from "../../../public/assets/Gradient.svg"
import hero from "../../../public/assets/Image.svg";
import Google from '../../../public/assets/Google.svg'
import Slack from '../../../public/assets/Slack.svg'
import Trust from '../../../public/assets/Trustpilot.svg'
import Cnn from '../../../public/assets/CNN.svg'
import Clutch from '../../../public/assets/Clutch.svg'

export function Hero() {
    return (
        <div className="pt-4 lg:pt-10 w-full lg:container lg:mx-auto">
           <div className="px-10 lg:px-[297px] ">
               <h1 className="text-center leading-[40px] text-[28px] font-medium lg:text-[64px] lg:leading-[78px] ">Start monitoring your website like a pro</h1>
               <p className="text-center pt-6 lg:text-[18px] lg:leading-[24px]">Get a bird's eye view with our customizable dashboard. Stay on top of things! Revamp your work process with 
                  our game-changing feature. Boost productivity and efficiency!
                </p>

                <div className="flex w-full pt-6 justify-center">
                    <button className="bg-[#4328eb] text-[#ffffff] p-4 rounded w-1/2  cursor-pointer lg:w-fit ">Try for Free</button>
                    <button className=" p-4 rounded text-[#4328eb] flex items-center w-1/2 gap-2 cursor-pointer lg:w-fit">View Pricing <span><Image src={Arrow} alt="arrow"/></span></button>
                </div>
           </div>

           <div className="relative flex h-full w-full justify-center">
            <Image src={Gradient}  alt="gradient" className="min-h-[580px] object-cover w-full lg:h-auto"/>

            <div className="absolute top-8 flex flex-col w-full items-center">
                <Image src={hero} alt="hero" className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-[800px] xl:w-[70%]" />

                <div className=" flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20 lg:bottom-10">
                    <p className="text-[#ffffff] text-center lg:text-[18px]">Trusted by these companies</p>
                    <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px]  lg:grid-cols-5">
                        <Image src={Google} alt="google" />
                        <Image src={Slack} alt="slack" />
                        <Image src={Trust} alt="trust" />
                        <Image src={Cnn} alt="cnn" />
                        <Image src={Clutch} alt="clutch" />
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}

