import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const faqs = [
    {
        question: 'What is Apple Books',
        answer: 'Apple Books is a built-in app that lets you find, buy, listen to, and read audiobooks and ebooks all in one place. You can browse curated collections, top audiobooks, and top ebooks and even get personalized recommendations. If you can’t find the app on your device, use the search function or look for Apple Books in the App Store.',
    },
    {
        question: 'How much does Apple Books cost?',
        answer: 'The Apple Books app is free and there is no subscription. Audiobooks and ebooks are priced individually, and thousands of free audiobooks and ebooks are available. You can also sample audiobooks and ebooks for free while you browse.',
    },
    {
        question: 'Can I play audiobooks on my devices?',
        answer: 'Yes. Audiobooks can be played on iPhone, iPad, CarPlay, Apple Watch, Mac, and Apple Vision Pro. You can even play audiobooks on a Bluetooth speaker from your iPhone.',
    },
    {
        question: 'Can I pre-order an audiobook or ebook?',
        answer: 'Yes. Apple Books makes it easy to find the most anticipated audiobooks and ebooks. Search for the title and select the Pre-Order button to confirm the purchase. The title will be added to your library automatically once it is available. To preview upcoming releases, look for the Coming Soon section in the app.',
    },
];

const Faq = () => {
    return (
        <div className="lg:mx-80 py-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white text-center my-8">Questions?<br/>Answers.</h2>
            <Accordion>
                {faqs.map(({ question, answer }, index) => (
                    <AccordionPanel key={index}>
                        <AccordionTitle>{question}</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
                        </AccordionContent>
                    </AccordionPanel>
                ))}
            </Accordion>
        </div>
    )
}

export default Faq
