import { FaBookOpen } from "react-icons/fa";

const title = (<>Read and discover.<br/>All in one app.</>)
const description = 'Apple Books is the single destination for you to find and dive into ebooks you love and will love next. Share your books with up to five family members.* All with no subscription or monthly commitment.'

const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <FaBookOpen className="text-white mx-auto text-8xl bg-orange-400 py-3 px-4 rounded-2xl shadow-md mb-1 dark:bg-transparent dark:border-orange-400 border-2"/>
                <p className="mx-auto dark:text-white text-gray-600 mb-5 font-semibold">Apple Books</p>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{description}</p>
            </div>
        </section>
    )
}

export default Hero
