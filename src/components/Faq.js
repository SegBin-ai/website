import React from 'react';

const faqs = [
  {
    question: "What is TerraVortex?",
    answer: "TerraVortex is a cutting-edge technology company dedicated to revolutionizing the manufacturing industry. Our innovative product provides real-time visual aid to manufacturing workers, preventing errors and increasing productivity."
  },
  {
    question: "How can TerraVortex benefit manufacturers?",
    answer: "With our state-of-the-art technology, manufacturers can ensure precision and efficiency in their operations, leading to increased productivity and reduced errors in manufacturing processes."
  },
  {
    question: "How does TerraVortex prevent errors in manufacturing?",
    answer: "TerraVortex provides real-time visual aid to manufacturing workers, guiding them through processes and alerting them to potential errors before they occur, ensuring precision and accuracy in manufacturing operations."
  },
  {
    question: "How can I join TerraVortex in shaping the future of manufacturing?",
    answer: "You can join us by partnering with TerraVortex to implement our technology in your manufacturing operations, or by staying updated on our latest developments and innovations in the manufacturing industry."
  }
];

const FAQSection = () => {
  return (
    <div className="section-container bg-white">
      <h2 className="text-4xl font-bold text-blue-500 mb-10">FAQ</h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
            <p className="text-lg text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;