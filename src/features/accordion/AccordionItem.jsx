import { useState } from "react";

export default function AccordionItem({ title, description, index }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <article className="accordion__item">
      <div className="accordion__title text text--medium text--semi-bold">
        <h3 id={`accordion-title-${index}`}>{title}</h3>
        <button
          type="button"
          aria-expanded="false"
          aria-label="open accordion"
          aria-controls={`accordion-description-${index}`}
          onClick={toggle}
          className={`accordion__toggle-button button button--primary button--dropdown ${isOpen ? "rotate-forward" : "rotate-backward"}`}
          aria-pressed={isOpen}
        >
          <svg className="icon icon--large">
            <symbol fill="none" id="plus-icon" viewBox="0 0 30 31">
              <path
                fill="currentColor"
                d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
              />
            </symbol>

            <symbol fill="none" id="minus-icon" viewBox="0 0 30 31">
              <path
                fill="#301534"
                d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
              />
            </symbol>
          </svg>
        </button>
      </div>
      <div
        id={`accordion-description-${index}`}
        aria-labelledby={`accordion-title-${index}`}
        className={`accordion__description text text--small text--regular ${
          isOpen ? "accordion__description--opened" : ""
        }`}
      >
        <p>{description}</p>
      </div>
    </article>
  );
}
