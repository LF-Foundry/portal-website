"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Does Portal replace the AI websites?",
    answer: "No. Portal opens the official AI websites in one desktop window, so each service keeps its own interface and sign-in flow.",
  },
  {
    question: "Which systems are supported?",
    answer: "Portal is currently available for Windows and Apple-silicon Macs.",
  },
  {
    question: "Why might my computer show a warning?",
    answer: "Portal is not currently code-signed for Windows or verified by Apple. The install guides explain how to review and continue through those prompts.",
  },
];

export default function FaqList() {
  const [openItems, setOpenItems] = useState<boolean[]>(() => faqItems.map(() => false));

  function toggleItem(index: number) {
    setOpenItems((currentItems) => currentItems.map((isOpen, itemIndex) => (
      itemIndex === index ? !isOpen : isOpen
    )));
  }

  return (
    <div className="faq-list">
      {faqItems.map((item, index) => {
        const isOpen = openItems[index];
        const answerId = `faq-answer-${index + 1}`;

        return (
          <div className="faq-item" data-open={isOpen} key={item.question}>
            <button
              className="faq-question"
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => toggleItem(index)}
            >
              {item.question}
            </button>
            <div className="faq-answer" id={answerId} aria-hidden={!isOpen}>
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
