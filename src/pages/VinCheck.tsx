// src/pages/VinCheck.tsx
import { useNavigate, useParams } from "react-router";
import { useCallback, useEffect, useMemo } from "react";
import InfoCard from "../components/InfoCard";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store/store";
import { fetchVinData, selectVinData, selectVinStatus } from "../redux/slices/vinSlice";

export default function VinCheck() {
  const { vinUrl } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()
  

  const cleanedVin = useMemo(() => (vinUrl ? vinUrl.trim().toUpperCase() : ""),
    [vinUrl]
  );

  const carData = useSelector(selectVinData);
  const status = useSelector(selectVinStatus); // "idle" | "loading" | "succeeded" | "failed"

  const navigateToInvalidVin = useCallback(() => {
    navigate("/invalid-vin", { replace: true });
  },[navigate]); 


  useEffect(() => {
    if(!cleanedVin) return;
    dispatch(fetchVinData(cleanedVin));
    // return () => {
    //   promise.abort()
    // }
  },[cleanedVin, dispatch]);
   
  useEffect(() => {
    if (status === "succeeded" && carData === null) {
      navigateToInvalidVin();
    }
  }, [status, carData, navigateToInvalidVin]);

  const loading = status === "loading";
     
  const show = (v?: string) =>
    v && v.trim() ? v : t("vinCheck.labels.notAvailable");

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        {t("vinCheck.title", { vin: cleanedVin })}
      </h1>

      {/* Loading spinner */}
      {loading && (
        <div className="flex items-center py-20 justify-center gap-3 text-gray-600">
          <svg className="animate-spin h-10 w-10" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              opacity="0.25"
            />
            <path
              d="M22 12a10 10 0 0 1-10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>
          <span>{t("vinCheck.loading")}</span>
        </div>
      )}

      {/* Only render content when we have data and not loading */}
      {!loading && carData && (
        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoCard
              label={t("vinCheck.labels.make")}
              value={show(carData.Make)}
            />
            <InfoCard
              label={t("vinCheck.labels.model")}
              value={show(carData.Model)}
            />
            <InfoCard
              label={t("vinCheck.labels.modelYear")}
              value={show(carData.ModelYear)}
            />
            <InfoCard
              label={t("vinCheck.labels.trim")}
              value={show(carData.Trim)}
            />
            <InfoCard
              label={t("vinCheck.labels.engine")}
              value={show(carData.EngineModel) || carData.EngineConfiguration}
            />
            <InfoCard
              label={t("vinCheck.labels.bodyClass")}
              value={show(carData.BodyClass)}
            />
            <InfoCard
              label={t("vinCheck.labels.plantCountry")}
              value={show(carData.PlantCountry)}
            />
            <InfoCard
              label={t("vinCheck.labels.vehicleType")}
              value={show(carData.VehicleType)}
            />
            <InfoCard
              label={t("vinCheck.labels.manufacturer")}
              value={show(carData.ManufacturerName)}
            />
          </div>
        </div>
      )}

      {/* Full table */}
      {carData && (
        <details className="bg-gray-50 rounded-md p-4" open>
          <summary className="cursor-pointer font-medium">
            {t("vinCheck.showAll")}
          </summary>
          <div className="mt-3 max-h-80 overflow-auto border rounded">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(carData).map(([k, v]) => (
                  <tr
                    key={k}
                    className="odd:bg-white even:bg-gray-50 border-b last:border-b-0"
                  >
                    <td className="whitespace-nowrap px-3 py-2 font-medium text-gray-600">
                      {t(`vinCheck.labelsMap.${k}`, { defaultValue: k })}
                    </td>
                    <td className="px-3 py-2 break-words">{show(v)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      )}
    </div>
  );
}
