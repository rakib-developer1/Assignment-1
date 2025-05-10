/* eslint-disable */
const Accordion = ({ question, answer, isOpen, icon: Icon, id }) => {
  return (
    <div>
      <h3 id={`accordion-flush-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 dark:border-gray-700 ${
            isOpen
              ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
          data-accordion-target={`#accordion-flush-body-${id}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-flush-body-${id}`}
        >
          <span>{question}</span>
          <Icon className={`w-6 h-6 ${isOpen ? "rotate-180" : ""} shrink-0`} />
        </button>
      </h3>
      <div
        id={`accordion-flush-body-${id}`}
        className={isOpen ? "" : "hidden"}
        aria-labelledby={`accordion-flush-heading-${id}`}
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
