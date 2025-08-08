import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is a VIN and why is it important?",
    answer:
      "A Vehicle Identification Number (VIN) is a unique 17-character code assigned to every vehicle. It reveals key details like the manufacturer, model, year, and history, helping you verify the vehicle's authenticity.",
  },
  {
    question: "How accurate is the information from VinSpec?",
    answer:
      "We gather data from trusted automotive databases, insurance records, and government agencies. While accuracy is very high, the completeness of records can vary depending on the country and available data sources.",
  },
  {
    question: "How long does a VIN check take?",
    answer:
      "Most VIN checks are processed instantly, returning results in just a few seconds. In rare cases where additional verification is required, it may take up to a minute.",
  },
  {
    question: "Can you check VINs from any country?",
    answer:
      "Yes, VinSpec supports VINs from most countries worldwide. However, some countries may have limited or restricted access to certain records due to privacy laws.",
  },
  {
    question: "Do I need to create an account to use VinSpec?",
    answer:
      "No account is required for a basic VIN check. However, registering allows you to save past searches, receive full reports via email, and unlock advanced features.",
  },
  {
    question: "What kind of details will the VIN report include?",
    answer:
      "Depending on the vehicle and data availability, the report may include manufacturing details, accident history, title information, mileage records, ownership history, market value, and recall notices.",
  },
  {
    question: "Is my data safe when I use VinSpec?",
    answer:
      "Absolutely. All data sent and received through VinSpec is encrypted, and we do not share your personal information with third parties without your consent.",
  },
  {
    question: "What if my VIN is less than 17 characters?",
    answer:
      "VINs for modern vehicles (post-1981) are always 17 characters. Shorter VINs typically belong to older or special vehicles, and in such cases, certain information may be unavailable.",
  },
  {
    question: "Can I use VinSpec on my phone?",
    answer:
      "Yes, VinSpec is fully responsive and works on any device, including smartphones and tablets. You can check a VIN on the go from anywhere.",
  },
  {
    question: "Do you offer bulk VIN checks for dealerships or businesses?",
    answer:
      "Yes, we provide bulk VIN lookup services for car dealerships, insurance companies, and fleet managers. Contact our support team for custom business plans.",
  },
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="min-h-screen px-6 py-10 md:px-20 bg-gray-50 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-amber-500">
        Frequently Asked Questions
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
