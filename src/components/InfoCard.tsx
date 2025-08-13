import { useTranslation } from 'react-i18next'

export default function InfoCard({ label, value }: { label: string; value?: string }) {

  const { t } = useTranslation();

    return (
      <div className="border rounded-md p-3 bg-white shadow-sm">
        <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
        <p className="font-medium">{value || t("vinCheck.dash")}</p>
      </div>
    );
  }