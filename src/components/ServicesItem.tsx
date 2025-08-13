import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router';
import { useTranslation } from "react-i18next";

interface ServicesItemInterface {
  mvs: string;
  pricePerReport: string;
  yourPay: string;
  noDiscountPay: string;
  discount: string;
  checked: boolean;
  onSelect: () => void;
}

export default function ServicesItem({
  mvs,
  pricePerReport,
  yourPay,
  noDiscountPay,
  discount,
  checked,
  onSelect,
}: ServicesItemInterface) {

  const { t } = useTranslation("common");

  return (
    <div className={`bg-white rounded-2xl shadow-md ${checked ? 'border-2 border-blue-700' : ''} w-full md:w-[300px] lg:w-[350px] p-4 md:p-6 lg:p-8`}>
      <div className="flex flex-col space-y-3">
        <div className="flex items-center">
          <Checkbox
            checked={checked}
            onChange={onSelect}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <p>{t("servicesItem.checkMvs", {count: Number(mvs) })}</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold md:text-4xl">{pricePerReport}</p>
          <p className="text-lg">{t("servicesItem.perReport")}</p>
        </div>

        <div>
          <p>{t("servicesItem.youPay", { amount: yourPay })}</p>
          <p className={`${mvs !== '1' ? 'text-red-600 line-through' : 'text-gray-400'}`}>
            {mvs === '1' ? t("servicesItem.noDiscount") : noDiscountPay}
          </p>
        </div>

        <span className="self-start p-2 rounded-lg bg-amber-300 text-white">-{discount}%</span>

        <Link className="text-sm underline" to="/refund-policy">{t("servicesItem.refundPolicy")}</Link>
      </div>
    </div>
  );
}
