// src/components/RefundPolicy.tsx

export default function RefundPolicy() {
    return (
      <section className="min-h-screen px-6 py-10 md:px-20 bg-gray-50 text-gray-800">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-4">
            Refund Policy
          </h2>
          <p className="text-lg text-gray-600">
            At VinSpec, customer satisfaction is our priority. If you are not satisfied with your
            vehicle inspection report, we offer a clear and straightforward refund process.
          </p>
        </div>
  
        {/* Refund Policy Content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Text */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-semibold text-amber-500">1. Eligibility for Refund</h3>
            <p className="text-gray-700 leading-relaxed">
              To be eligible for a refund, your request must be submitted within 14 days from the 
              date of the inspection report. The report should not have been accessed or used for 
              any further actions (e.g., purchases or negotiations).
            </p>
            
            <h3 className="text-2xl font-semibold text-amber-500">2. How to Request a Refund</h3>
            <p className="text-gray-700 leading-relaxed">
              If you are not satisfied with your inspection report, please contact our support team 
              at <a href="mailto:shefket.must@gmail.com" className="text-blue-500">shefket.must@gmail.com</a>
              with your order number, vehicle details, and a brief explanation of why you are requesting 
              a refund. Our team will review your case promptly.
            </p>
  
            <h3 className="text-2xl font-semibold text-amber-500">3. Processing Time</h3>
            <p className="text-gray-700 leading-relaxed">
              Refund requests will be processed within 5 business days of submission. Once approved, 
              the refund will be issued to your original payment method.
            </p>
  
            <h3 className="text-2xl font-semibold text-amber-500">4. Non-Refundable Items</h3>
            <p className="text-gray-700 leading-relaxed">
              Please note that refunds will not be issued if the report has been accessed or used for 
              purposes other than viewing. Additionally, any inspection reports older than 14 days are 
              not eligible for a refund.
            </p>
          </div>
  
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://yucatanmagazine.com/wp-content/uploads/2018/02/returnpolicy700x400.png"
              alt="Refund Policy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
  
        {/* Contact Information */}
        <div className="mt-16 bg-white shadow-lg rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-amber-500 mb-4">Contact Us</h3>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns regarding our refund policy, feel free to reach out to 
            our customer support team at <a href="mailto:shefket.must@gmail.com" className="text-blue-500">shefket.must@gmail.com</a>.
          </p>
        </div>
      </section>
    );
  }
  