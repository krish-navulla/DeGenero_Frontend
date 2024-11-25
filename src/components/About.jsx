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
            width:'50vw',
            height:'50vh',
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
            <h2 className="font-general text-sm uppercase md:text-[1rem]">
            Why Choose De Genero for Your Reporting Needs?
            </h2>
            <AnimatedTitle title= "<b>T</b>imely, <b>A</b>ccurate data with customizable reports"
            containerClass="mt-5 !text-black text-center"/>


            <div className="about-subtext">
                <p>De Genero simplifies social impact reporting with innovative, real-time solutions, empowering organizations to drive transparency, efficiency, and meaningful change.
                </p>
            </div>
        </div>
        <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
                <img 
                src="public\img\about.png"
                alt="Background"
                className="absolute left-0 top-0 size-full object-cover"
                />
            </div>
        </div>
        {/* <div className="h-dvh w-screen mt-36">
        <div class="features">
            <div class="feature" id="feature1">Feature 1 Content</div>
            <div class="feature" id="feature2">Feature 2 Content</div>
            <div class="feature" id="feature3">Feature 3 Content</div>
            <div class="feature" id="feature4">Feature 4 Content</div>
        </div>
        </div> */}

    </div>
    )
}

export default About