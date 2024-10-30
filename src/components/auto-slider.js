import Image from "next/image";



const AutoSlider = ({data, duration}) => {
    return (
        <div className="flex overflow-hidden">
            <div className="flex gap-5 mt-7 mx-2 animate-swipe hover:[animation-play-state:paused]" style={{animationDuration:`${duration}s`}}>
                {[...data, ...data, ...data].map(({ src, title, author }, index) => (
                    <div className="flex flex-col items-start shrink-0">
                        <Image src={src} alt={title} width={260} height={555} key={index} className="object-cover h-52 w-52 rounded-lg"/>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{title}</p>
                        <p className="text-gray-500 dark:text-gray-400">{author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AutoSlider
