'use client'

import Image from "next/image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

const MobileView = () => {

    const images = [
        {src:'/assets/images/iphone_01.png', alt:'iphone_01', speed:10},
        {src:'/assets/images/iphone_02.png', alt:'iphone_02', speed:30},
        {src:'/assets/images/iphone_03.png', alt:'iphone_03', speed:10},
        {src:'/assets/images/iphone_04.png', alt:'iphone_04', speed:30},
        {src:'/assets/images/iphone_05.png', alt:'iphone_05', speed:10},
    ]
    return (
        <ParallaxProvider>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mx-auto justify-center items-center align-middle overflow-hidden min-h-[35rem] max-w-[1600px]">
                {images.map(({src, alt, speed}, index)=>
                    <Parallax key={index} speed={speed}><Image src={src} alt={alt} width={260} height={555} className="mx-auto" /></Parallax>
                )}
            </div>
        </ParallaxProvider>
    )
}

export default MobileView
