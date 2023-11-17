import React from 'react'
import FAQItem from './FAQItem'

import { faqData } from './data/faqData'

const FAQPage: React.FC = () => {
  return (
    <div className=" min-h-screen p-8">
      <div className="max-w-md mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-white mb-4">FAQ</h1>
      </div>

      <div className="max-w-md mx-auto">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}

        <p className="text-white text-center mb-4">
          Para mais dúvidas, entre em contato com o suporte: suporte@ibm.com.br
        </p>
        <p className="text-white text-center mb-4">K E P L E R</p>
      </div>
    </div>
  )
}

export default FAQPage
