// FAQPage.js (FAQ component)

import React from 'react';

const FAQs = [
    {
        question: 'What are the speed limits in residential areas?',
        answer: 'In most residential areas, the speed limit is typically 25-30 miles per hour (mph). However, it may vary depending on local regulations.'
    },
    {
        question: 'How can I renew my vehicle registration?',
        answer: 'Vehicle registration renewal can usually be done online through the Department of Motor Vehicles (DMV) website or in person at a local DMV office.'
    },
    {
        question: 'What should I do if my car breaks down on the highway?',
        answer: 'If your car breaks down on the highway, try to move it to the shoulder if possible. Turn on your hazard lights and call for roadside assistance or emergency services.'
    },
    {
        question: 'Are there any penalties for driving without a valid license?',
        answer: 'Driving without a valid license is illegal and may result in fines, license suspension, or even imprisonment, depending on the severity of the offense and local laws.'
    },
    {
        question: 'How often should I check my vehicle\'s tire pressure?',
        answer: 'It is recommended to check your vehicle\'s tire pressure at least once a month and before long trips. Proper tire pressure helps improve fuel efficiency and ensures safety.'
    },
    {
        question: 'What should I do if I witness a traffic accident?',
        answer: 'If you witness a traffic accident, try to safely pull over and offer assistance if needed. Call emergency services immediately and provide them with accurate information about the location and nature of the accident.'
    },
    {
        question: 'Are electric scooters legal on public roads?',
        answer: 'The legality of electric scooters on public roads varies depending on local regulations. In some areas, electric scooters may be classified as motor vehicles and subject to specific laws.'
    },
    {
        question: 'How can I report a traffic violation?',
        answer: 'You can report a traffic violation by contacting local law enforcement or using official reporting channels provided by transportation authorities. Be prepared to provide details and evidence of the violation.'
    },
    // Add more FAQs as needed
];

function Faqpage() {
    return (
        <div className="container mx-auto py-8 overflow-hidden">
            <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FAQs.map((faq, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded shadow">
                        <h2 className="text-lg font-semibold mb-2 text-black">{faq.question}</h2>
                        <p className='text-black'>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faqpage;
