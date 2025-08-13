import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { useTranslation } from "react-i18next";


export default function FAQ() {
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation("common");
  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  const faqs = t("faq.items", { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <section className="min-h-screen px-6 py-10 md:px-20 bg-gray-50 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-amber-500">
      {t("faq.title")}
      </h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow  rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex cursor-pointer justify-between items-center px-5 py-4 text-left focus:outline-none"
            >
              <span className="font-medium">{faq.question}</span>
              <IoChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-5 py-5 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
