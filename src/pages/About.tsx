import { useTranslation } from "react-i18next";

export default function About() {

  const { t } = useTranslation();

    return (
      <section className="min-h-screen px-6 py-10 md:px-20 bg-gray-50 text-gray-800">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-4">
            {t("aboutPage.title")}
          </h2>
          <p className="text-lg text-gray-600">
          {t("aboutPage.intro")}
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
            {t("aboutPage.whoWeAre.title")}
            </h3>
            <p className="text-gray-700 leading-relaxed">
            {t("aboutPage.whoWeAre.p1")}
            </p>
            <p className="text-gray-700 leading-relaxed">
            {t("aboutPage.whoWeAre.p2")}
            </p>
          </div>
        </div>
  
        {/* Mission Section */}
        <div className="mt-16 bg-white shadow-lg rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-amber-500 mb-4">
          {t("aboutPage.mission.title")}
          </h3>
          <p className="text-gray-700 leading-relaxed">
          {t("aboutPage.mission.p")}
          </p>
        </div>
      </section>
    );
  }
  