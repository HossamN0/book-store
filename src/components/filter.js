import AutoSlider from "./auto-slider"

const title = (<>A library you'll want<br/>to get lost in.</>)
const description = 'Apple Books is the single destination for you to find and dive into ebooks you love and will love next. Share your books with up to five family members.* All with no subscription or monthly commitment.'

const bestselling = [
    { src: '/assets/images/book_01.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/assets/images/book_02.jpg', title: 'Conviction', author: 'Denise Mina' },
    { src: '/assets/images/book_03.jpg', title: 'Hillbilly Elegy', author: 'Sarah J.Maas' },
    { src: '/assets/images/book_04.jpg', title: 'Harry Poter', author: 'Liz Moore' },
    { src: '/assets/images/book_05.jpg', title: 'Irom Flame', author: 'Tessa Bailey' },
    { src: '/assets/images/book_06.jpg', title: 'Irom Flame', author: 'Tessa Bailey' },
    { src: '/assets/images/book_07.jpg', title: 'Irom Flame', author: 'Tessa Bailey' },
];
const trending = [
    { src: '/assets/images/book_08.jpg', title: 'Harry Poter', author: 'Liz Moore' },
    { src: '/assets/images/book_09.jpg', title: 'Conviction', author: 'Denise Mina' },
    { src: '/assets/images/book_10.jpg', title: 'Hillbilly Elegy', author: 'Sarah J.Maas' },
    { src: '/assets/images/book_11.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/assets/images/book_12.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/assets/images/book_13.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/assets/images/book_14.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
];

const Filter = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{description}</p>
            </div>

            <div className="flex justify-center items-center">
                <ul className="flex flex-col sm:flex-row items-center justify-center bg-gray-200 rounded-lg sm:rounded-full px-4 py-2">
                    <li className="hover:bg-black hover:text-white mx-2 px-4 py-1 rounded-full cursor-pointer my-2 sm:my-0">Bestselling Audiobooks</li>
                    <li className="bg-black text-white mx-2 px-4 py-1 rounded-full cursor-pointer my-2 sm:my-0">News & Trending Ebooks</li>
                    <li className="hover:bg-black hover:text-white mx-2 px-4 py-1 rounded-full cursor-pointer my-2 sm:my-0">Fan-Favorite Audiobooks</li>
                </ul>
            </div>
                <AutoSlider data={bestselling} duration={25}/>
                <AutoSlider data={trending} duration={45}/>
        </section>
    )
}

export default Filter
