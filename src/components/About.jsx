import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)
const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                // pin spacing
                pin: true,
                pinSpacing: true
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width:'100vw',
            height:'100vh',
            borderRadius:0,
        })


            // // Animate each feature alternately
            // gsap.fromTo(
            //     "#feature1", 
            //     { x: "100%", opacity: 0 }, // Start off-screen to the right
            //     {
            //         x: "40%", // Move to center
            //         opacity: 1, 
            //         duration: 4,
            //         ease: "power2.out",
            //         scrollTrigger: {
            //             trigger: "#feature1",
            //             start: "top 80%", // Start animation when the feature enters the viewport
            //             end: "top 50%", 
            //             scrub: true
            //         }
            //     }
            // );

            // gsap.fromTo(
            //     "#feature2",
            //     { x: "-100%", opacity: 0 }, // Start off-screen to the left
            //     {
            //         x: "0%",
            //         opacity: 1,
            //         duration: 4,
            //         ease: "power2.out",
            //         scrollTrigger: {
            //             trigger: "#feature2",
            //             start: "top 80%",
            //             end: "top 50%",
            //             scrub: true
            //         }
            //     }
            // );

            // gsap.fromTo(
            //     "#feature3",
            //     { x: "100%", opacity: 0 }, // Start off-screen to the right
            //     {
            //         x: "40%",
            //         opacity: 1,
            //         duration: 4,
            //         ease: "power2.out",
            //         scrollTrigger: {
            //             trigger: "#feature3",
            //             start: "top 80%",
            //             end: "top 50%",
            //             scrub: true
            //         }
            //     }
            // );

            // gsap.fromTo(
            //     "#feature4",
            //     { x: "-100%", opacity: 0 }, // Start off-screen to the left
            //     {
            //         x: "0%",
            //         opacity: 1,
            //         duration: 4,
            //         ease: "power2.out",
            //         scrollTrigger: {
            //             trigger: "#feature4",
            //             start: "top 80%",
            //             end: "top 50%",
            //             scrub: true
            //         }
            //     }
            // );

    })

    return (
    <div  id="about" className="min-h-screen w-screen">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            {/* <h2 className="font-general text-sm uppercase md:text-[1rem]">
            Why Choose De Genero for Your Reporting Needs?
            </h2> */}
            <AnimatedTitle title= "<b>API</b> Integration"
            containerClass="mt-5 !text-black text-center"/>


            <div className="about-subtext">
                <p> and many more.
                </p>
            </div>
        </div>
        <div className=" w-screen">
      <div className="grid h-80 w-full grid-cols-3 grid-rows-2 gap-2">
        {/* Image 1 */}
        <div className="flex items-center justify-center row-span-1 md:col-span-1 ms-32 md:ms-0">
          <img
            src="img/api.jpg"
            alt="Background"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {/* Image 2 */}
        <div className="flex items-center justify-center row-span-1 md:col-span-1 ms-32 md:ms-0">
          <img
            src="img/api6.png"
            alt="Background"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {/* Image 3 */}
        <div className="flex items-center justify-center row-span-1 md:col-span-1 ms-32 md:ms-0">
          <img
            src="img/api1.jpg"
            alt="Background"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {/* Image 4 */}
        <div className="flex items-center justify-center row-span-1 md:col-span-1 ms-32 md:ms-0">
          <img
            src="img/api3.webp"
            alt="Background"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="flex items-center justify-center row-span-1 md:col-span-1 ms-32 md:ms-0">
          <img
            src="img/api4.jpg"
            alt="Background"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="flex items-center justify-center row-span-1 md:col-span-1 ms-32 md:ms-0">
          <img
            src="img/api5.png"
            alt="Background"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

    </div>
    </div>
    )
}

export default About