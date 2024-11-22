"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Precog.ai, and how does it work?",
      answer:
        "Precog.ai is a real-time data protection tool that detects and alerts users to risky actions, such as sharing sensitive information (passwords, credit card details, etc.) on insecure platforms. By providing instant notifications, it helps users avoid costly mistakes and stay protected online.",
    },
    {
      question: "How is Precog.ai different from traditional cybersecurity tools?",
      answer:
        "Unlike traditional cybersecurity tools that act after a breach occurs, Precog.ai is proactive. It intervenes at the source, detecting risky behavior in real-time and preventing mistakes before they happen. Its focus is on empowering individuals with simple, actionable alerts.",
    },
    {
      question: "What platforms does Precog.ai support?",
      answer:
        "The initial version of Precog.ai is a browser extension compatible with popular web browsers like Chrome and Firefox. Future updates will include integrations with messaging apps and email clients to expand its coverage.",
    },
    {
      question: "Who can use Precog.ai?",
      answer:
        "Precog.ai is designed for everyone—individuals, small businesses, and even enterprises. It’s simple enough for non-technical users but powerful enough to provide robust protection for anyone at risk of scams or data breaches.",
    },
    {
      question: "Is Precog.ai affordable?",
      answer:
        "Yes! Precog.ai offers a freemium version for individuals with basic features. For advanced protection, the Pro Plan is available at $19.99 per user per month, and enterprises can request custom pricing tailored to their needs.",
    },
    {
      question: "What types of sensitive information does Precog.ai detect?",
      answer:
        "Precog.ai can identify a variety of sensitive data, including passwords, credit card numbers, and personal identifiers (e.g., Social Security Numbers). Advanced plans allow customizable detection for specific types of sensitive data.",
    },
    {
      question: "How does Precog.ai ensure user privacy?",
      answer:
        "Precog.ai focuses only on detecting sensitive information and does not store or monitor unrelated user activity. All processing is done locally or securely, ensuring user privacy while providing robust protection.",
    },
    {
      question: "When will Precog.ai be available?",
      answer:
        "The Minimum Viable Product (MVP) is currently under development and expected to launch for beta testing in the next 3–6 months. Public availability will follow shortly after, starting with the browser extension and expanding to other platforms.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg ${
              activeIndex === index ? "bg-gray-100" : "bg-white"
            }`}
          >
            <button
              className="w-full text-left p-4 flex justify-between items-center text-lg font-semibold text-black"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>
                {activeIndex === index ? (
                  <span className="text-gray-500 text-2xl">×</span>
                ) : (
                  <span className="text-gray-500 text-2xl">+</span>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-700 text-base">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
