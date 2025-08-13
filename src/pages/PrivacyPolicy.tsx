import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen px-6 py-10 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-500">
            {t("privacyPolicy.title")}
          </h1>
          <p className="text-sm text-gray-500">
            {t("privacyPolicy.updated")}
          </p>
        </header>

        <p>{t("privacyPolicy.intro")}</p>

        <h2 className="text-xl font-semibold">{t("privacyPolicy.dataTitle")}</h2>
        <p>{t("privacyPolicy.dataText")}</p>

        <h2 className="text-xl font-semibold">{t("privacyPolicy.usageTitle")}</h2>
        <p>{t("privacyPolicy.usageText")}</p>

        <h2 className="text-xl font-semibold">{t("privacyPolicy.contactTitle")}</h2>
        <p>{t("privacyPolicy.contactText")}</p>
      </div>
    </section>
  );
}
