import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow, TiLocationArrowOutline } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 1;
    const nextVideoRef = useRef(null)

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1
    const handleVideoLoad = () => {
        setLoadedVideos((prevLoadedVideos) => prevLoadedVideos + 1)

    }

    const handleMiniVdClick = () => {
        setHasClicked(true)
        setCurrentIndex(upcomingVideoIndex)
    }

    useEffect(()=> {
        if (loadedVideos === totalVideos - 1){
            setIsLoading(false)
        }
    })

    // useGSAP(() => {
    //     if (hasClicked) {
    //         gsap.set('#next-video', {visibility: 'visible'});
    //         gsap.to('#next-video', {
    //             transformOrigin : 'center center',
    //             scale: 1,
    //             width:'100%',
    //             height: '100%',
    //             duration: 1,
    //             ease: 'power1.inOut',
    //             onStart: () => nextVideoRef.current.play(),
    //         });

    //         gsap.from('#current-video', {
    //             transformOrigin: 'center center',
    //             scale: 0,
    //             duration: 1.5,
    //             ease: 'power1.inOut',
                
    //         })
    //     }
    // }, {dependencies: [currentIndex], revertOnUpdate: true})

    useGSAP( ()=>{
        gsap.set('#video-frame', {
            clipPath : 'polygon(0% 0%, 70% 0%, 70% 100%, 0% 100%)',
            bordorRadius: '0 0 40% 10%'
        })

        gsap.from('#video-frame', {
            clipPath : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            bordorRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true
            }
        })


    })
   
    

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {isLoading && (
            <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                <div className="three-body">
                    <div className="three-body__dot" />
                    <div className="three-body__dot" />
                    <div className="three-body__dot" />

                </div>
            </div>
            )}

            <div id="video-frame" className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <div>
                {/* <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div onClick={handleMiniVdClick} 
                    className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                        <video ref={nextVideoRef}
                        src = {getVideoSrc(upcomingVideoIndex)}
                        loop
                        muted
                        id = "current-video"
                        className='size-64 origin-center scale-150 object-cover object-center'
                        onLoadedData={handleVideoLoad}
                        />
                    </div>
                
                </div> */}

                {/* <video 
                    ref={nextVideoRef}
                    src={getVideoSrc(currentIndex)}
                    loop
                    muted
                    id="next-video"
                    className="absolute-center invisible absolute z-20 size-64 object-cover object-center"   
                    onLoadedData={handleVideoLoad}                 
                /> */}
                <video 
                // src={getVideoSrc(currentIndex === totalVideos - 1 ? 1: currentIndex)}
                src={getVideoSrc(2)}
                autoPlay
                loop
                muted
                className="absolute left-0 top-0 size-full object-cover object-center"
                onLoadedData={handleVideoLoad}
                />
            </div>
            {/* <h1 className="special-font hero-heading-small absolute bottom-5 right-5 z-40 text-blue-75">
                    Imp<b>A</b>ct
                </h1> */}

            <div className="absolute left-0 top-0 z-40 size-full">
                <div className="mt-24 px-5 sm:px-10">
                    <h1 className="special-font hero-heading text-blue-100">
                        De Gener<b>o</b></h1>
                    <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                    Amplify your impact with real-time reporting</p>
                
                    <Button 
                    id="watch-trailer" scrollToId="contact" title="Start your Impact Journey" leftIcon={<TiLocationArrow />}
                    
                    containerClass="bg-yellow-300 flex-center gap-1"/>
                
                </div>

            </div>

            </div>
            <h1 className="special-font hero-heading-small absolute bottom-5 right-5 text-black">
                <span className="block font-bold">Impact</span>
                <span className="block font-bold">Trust</span>
                <span className="block font-bold">Insight</span>
            </h1>


            {/* <h1 className="special-font hero-heading-small absolute bottom-5 right-5 text-black">
                <b>E</b>fficiency
            </h1>
            <h1 className="special-font hero-heading-small absolute bottom-5 right-5 text-black">
                    <b>E</b>mpowerment
                </h1> */}
            
        </div>
        
    )
}
export default Hero