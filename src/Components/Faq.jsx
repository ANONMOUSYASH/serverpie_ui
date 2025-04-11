import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";
import "../Styles/Faq.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="faq-item">
      {/* Question + Toggle */}
      <div className="faq-question" onClick={handleToggle}>
        <p className="faq-text">{question}</p>
        <button
          className={isOpen ? "doib1" : "doib"}
          style={{
            transition: "background-color 3s ease, transform 3s ease",
            transform: isOpen ? "rotate(0deg)" : "rotate(0deg)",
          }}
        >
          {isOpen ? (
            <RiSubtractFill className="plus1" style={{ transition: "all 3s ease" }} />
          ) : (
            <FaPlus className="plus" style={{ transition: "all 2s ease" }} />
          )}
        </button>
      </div>

      {/* Animated Answer */}
      <div
        className="faq-answer"
        style={{
          maxHeight: isOpen ? "200px" : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "all 3s ease-in-out 0.1s",
          overflow: "hidden",
        }}
      >
        <p>{answer}</p>
      </div>

      {/* Animated Divider Line */}
      <hr
        className={`faq-divider ${isOpen ? "is" : ""}`}
        style={{
          transition: "border-color 3s ease-in-out 0.1s",
        }}
      />
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: "How does ServerPie differ from other web hosting providers?",
      answer: "ServerPie offers cutting-edge cloud hosting with global coverage.",
    },
    {
      question: "How do I migrate my website to ServerPie?",
      answer: "You can migrate with one click using our automatic migration tool.",
    },
    {
      question: "How fast is ServerPie’s hosting speed?",
      answer: "ServerPie delivers lightning-fast performance with SSD storage.",
    },
    {
      question: "What data centers does ServerPie use, and where are they located?",
      answer: "We use top-tier data centers in London, New York, Singapore, and more.",
    },
  ];

  return (
    <div className="frammain6">
      <div className="minifram6">
        <p className="miniframpar7">
          Here Are The Some Common Questions About <span className="serve">ServerPie</span>
        </p>
        {/* ✅ NO STYLING CHANGE HERE */}
        <p className="faq">
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
