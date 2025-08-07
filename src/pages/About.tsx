export default function About() {
    return (
      <section className="min-h-screen px-6 py-10 md:px-20 bg-gray-50 text-gray-800">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-4">
            About VinSpec
          </h2>
          <p className="text-lg text-gray-600">
            At VinSpec, we are passionate about delivering reliable vehicle
            inspections and helping our clients make informed decisions with
            confidence.
          </p>
        </div>
  
        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://c8.alamy.com/comp/PCWJJP/old-european-car-ink-black-and-white-drawing-PCWJJP.jpg"
              alt="Vehicle inspection"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Text */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-semibold text-amber-500">
              Who We Are
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2025, VinSpec has been committed to providing
              professional and transparent inspection services for all types of
              vehicles. Our experienced team ensures that every report is thorough,
              accurate, and easy to understand.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you are purchasing a new car, selling your current one, or
              just want peace of mind about your vehicle’s condition, we are here
              to help. We combine modern technology with expert knowledge to give
              you the insights you need.
            </p>
          </div>
        </div>
  
        {/* Mission Section */}
        <div className="mt-16 bg-white shadow-lg rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-amber-500 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to empower every customer with accurate, unbiased
            vehicle assessments, ensuring safety, transparency, and trust in the
            automotive industry.
          </p>
        </div>
      </section>
    );
  }
  