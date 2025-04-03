import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";
import "../Styles/Faq.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "is" : ""}`}>
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <p className="faq-text">{question}</p>
        <button className={isOpen ? "doib1" : "doib"}>
          {isOpen ? (
            <RiSubtractFill className="plus1" />
          ) : (
            <FaPlus className="plus" />
          )}
        </button>
      </div>
      
      {isOpen && <p className="faq-answer need">{answer}</p>}

      {/* ✅ Add an <hr> line after each question-answer block */}
      <hr className="faq-divider" />
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: "How does ServerPie differ from other web hosting providers?",
      answer: "No, you only pay for transactions that take place.",
    },
    {
      question: "How do I migrate my website to ServerPie?",
      answer: "Instapay supports various platforms including web and mobile applications.",
    },
    {
      question: "How fast is ServerPie’s hosting speed?",
      answer: "Do I need to pay to Instapay even when there is no transaction going on in my business?",
    },
    {
      question: "What data centers does ServerPie use, and where are they located?",
      answer: "Yes, Instapay supports international payments in multiple currencies.",
    },
  ];

  return (
    <div className="frammain6">
      <div className="minifram6">
        <p className="miniframpar7">
          Here Are Some Common Questions About <span className="serve">ServerPie</span>
        </p>
        <p 
          className="font-normal text-[12px] text-[#2D5087] text-2xl text-start"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Host your websites closer to your audience with our worldwide server locations, including London, New York, Sydney, Singapore, and more. Improve speed, reliability, and SEO rankings with optimized server placement.
        </p>
      </div>
      
      <div className="minifram7">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
