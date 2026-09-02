import { useState } from "react";
import "../../styles/FAQ.css";
import faqItems from "./faqData.json";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderAnswer(text) {
  const parts = [];
  let lastIndex = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const [fullMatch, label, url] = match;
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a key={match.index} href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleItem(index) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="faq-section" id="faq">
      <h1>FAQ</h1>
      <div className="faq-list">
        {faqItems.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <div className={`faq-item${isOpen ? " open" : ""}`} key={index}>
              <button
                className="faq-question"
                aria-expanded={isOpen}
                onClick={() => toggleItem(index)}
              >
                {item.question}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{renderAnswer(item.answer)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
