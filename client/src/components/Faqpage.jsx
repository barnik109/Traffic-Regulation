import React, { useState } from "react";
// import "./style.css"
import Header from "./Header";
import FAQ from "./FAQ";

export default function Faqpage() {
  const [faqs, setFaqs] = useState([
    {
      question: "What are the speed limits in residential areas?",
      answer:
        "In most residential areas, the speed limit is typically 25-30 miles per hour (mph). However, it may vary depending on local regulations.",
      open: true
    },
    {
      question: "How can I renew my vehicle registration?",
      answer: "Vehicle registration renewal can usually be done online through the Department of Motor Vehicles (DMV) website or in person at a local DMV office.",
      open: false
    },
    {
      question:
        "What should I do if my car breaks down on the highway?",
      answer: "If your car breaks down on the highway, try to move it to the shoulder if possible. Turn on your hazard lights and call for roadside assistance or emergency services.",
      open: false
    },
    {
      question:
        "Are there any penalties for driving without a valid license?",
      answer: "Driving without a valid license is illegal and may result in fines, license suspension, or even imprisonment, depending on the severity of the offense and local laws.",
      open: false
    },
    {
      question:
        "How often should I check my vehicle\'s tire pressure?",
      answer: "It is recommended to check your vehicle\'s tire pressure at least once a month and before long trips. Proper tire pressure helps improve fuel efficiency and ensures safety.",
      open: false
    },
    {
      question:
        "What should I do if I witness a traffic accident?",
      answer: "If you witness a traffic accident, try to safely pull over and offer assistance if needed. Call emergency services immediately and provide them with accurate information about the location and nature of the accident.",
      open: false
    },
    {
      question: "Are electric scooters legal on public roads?",
      answer: "The legality of electric scooters on public roads varies depending on local regulations. In some areas, electric scooters may be classified as motor vehicles and subject to specific laws.",
      open: false
    },
    {
      question:
        "How can I report a traffic violation?",
      answer: "You can report a traffic violation by contacting local law enforcement or using official reporting channels provided by transportation authorities. Be prepared to provide details and evidence of the violation.",
      open: false
    },
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="flex flex-col p-5 justify-center items-center">
      <Header />
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
