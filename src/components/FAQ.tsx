import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <span className={`ml-6 flex-shrink-0 ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "What are the age restrictions for cannabis advertising?",
      answer: "Cannabis advertising must be targeted to individuals 21 years of age or older. All marketing materials must contain text stating that cannabis products may only be purchased and consumed by those 21 or older."
    },
    {
      question: "What advertising channels are available for cannabis businesses?",
      answer: "Cannabis businesses can utilize digital advertising, content marketing, email marketing, and programmatic advertising while adhering to state regulations. Traditional advertising channels may be restricted based on location and local laws."
    },
    {
      question: "How do cannabis advertising regulations vary by state?",
      answer: "Cannabis advertising regulations vary significantly by state. Each state has its own set of guidelines regarding outdoor advertising signs, digital marketing, and content restrictions. It's crucial to work with experts who understand state-specific compliance requirements."
    },
    {
      question: "What content is prohibited in cannabis advertising?",
      answer: "Cannabis advertising cannot contain depictions that target or are attractive to minors, promote excessive consumption, make unsubstantiated health claims, or cross state lines. All marketing materials shall be approved and comply with state cannabis control boards."
    },
    {
      question: "How can cannabis businesses ensure compliant advertising?",
      answer: "Work with experienced cannabis marketing agencies, maintain strict guidelines for content creation, regularly review state regulations, and implement strategic advertising approaches that prioritize compliance while effectively reaching target audiences."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}