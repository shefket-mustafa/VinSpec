import { useTranslation } from "react-i18next";

export default function TermsOfUse() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen px-6 py-10 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-500">
            {t("termsOfUse.title")}
          </h1>
          <p className="text-sm text-gray-500">
            {t("termsOfUse.updated")}
          </p>
        </header>

        <p>{t("termsOfUse.intro")}</p>

        <h2 className="text-xl font-semibold">{t("termsOfUse.usageTitle")}</h2>
        <p>{t("termsOfUse.usageText")}</p>

        <h2 className="text-xl font-semibold">{t("termsOfUse.responsibilityTitle")}</h2>
        <p>{t("termsOfUse.responsibilityText")}</p>

        <h2 className="text-xl font-semibold">{t("termsOfUse.contactTitle")}</h2>
        <p>{t("termsOfUse.contactText")}</p>
      </div>
    </section>
  );
}
