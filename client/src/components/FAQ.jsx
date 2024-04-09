import React from "react";
// import "./styles.css";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question text-gray-300">{faq.question}</div>
      <div className="faq-answer text-gray-300">{faq.answer}</div>
    </div>
  );
};

export default FAQ;
