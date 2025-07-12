"use client"

import { useState } from "react"

interface Question {
  question: string
  answer: string
}

interface FaqSectionProps {
  title: string
  questions: Question[]
}

export function FaqSection({ title, questions }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="max-w-3xl mx-auto">
          {questions.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                  <span className="text-2xl text-blue-600">{openIndex === index ? "−" : "+"}</span>
                </div>
              </button>
              {openIndex === index && (
                <div className="bg-gray-50 rounded-b-lg p-6 -mt-2">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
