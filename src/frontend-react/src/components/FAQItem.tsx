import React, { useState } from 'react'

import { FAQItemProps } from '../types/faq'

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="my-4">
      <button
        className="bg-gray-300/25 text-white py-2 px-4 rounded w-full text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {question}
      </button>

      {isExpanded && <p className="mt-2 text-white">{answer}</p>}
    </div>
  )
}

export default FAQItem
