// src/pages/VinCheck.tsx
import {  useParams } from "react-router";
import { useEffect, useMemo, useState } from "react";
import InfoCard from "../components/InfoCard";

interface CarData {
    Make: string,
    Model: string,
    ModelYear: string,
    Trim: string,
    EngineConfiguration: string,
    EngineModel: string,
    BodyClass: string,
    PlantCountry: string,
    VehicleType: string,
    ManufacturerName: string
}

export default function VinCheck() {
  const {vinUrl} = useParams();

  const cleanedVin = useMemo(() => vinUrl ? vinUrl.trim().toUpperCase() : "", [vinUrl]);

  const [carData, setCarData] = useState<CarData | null>(null);

  useEffect(() => {
  
    const fetchCarData = async () => {
      try {
        const response = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${cleanedVin}?format=json`
        );
        const data = await response.json();
        const result = data.Results?.[0];
  
        if (result) {
          const mappedData: CarData = {
            Make: result.Make || "Not available!",
            Model: result.Model || "Not available!",
            ModelYear: result.ModelYear || "Not available!",
            Trim: result.Trim || "Not available!",
            EngineConfiguration: result.EngineConfiguration || "Not available!",
            EngineModel: result.EngineModel || "Not available!",
            BodyClass: result.BodyClass || "Not available!",
            PlantCountry: result.PlantCountry || "Not available!",
            VehicleType: result.VehicleType || "Not available!",
            ManufacturerName: result.Manufacturer || "Not available!",
          };
          setCarData(mappedData);
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchCarData();
  }, [cleanedVin]);
  

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        VIN Details - {cleanedVin}
      </h1>


      
        <div className="space-y-8">
          {/* Summary cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoCard label="Make" value={carData?.Make} />
            <InfoCard label="Model" value={carData?.Model} />
            <InfoCard label="Model Year" value={carData?.ModelYear} />
            <InfoCard label="Trim" value={carData?.Trim} />
            <InfoCard
              label="Engine"
              value={
                carData?.EngineModel || carData?.EngineConfiguration
              }
            />
            <InfoCard label="Body Class" value={carData?.BodyClass} />
            <InfoCard label="Plant Country" value={carData?.PlantCountry} />
            <InfoCard label="Vehicle Type" value={carData?.VehicleType} />
            <InfoCard
              label="Manufacturer"
              value={carData?.ManufacturerName}
            />
          </div>

          {/* Full table */}
          {carData && (
            <details className="bg-gray-50 rounded-md p-4">
            <summary className="cursor-pointer font-medium">
              Show all decoded fields
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
                        {k}
                      </td>
                      <td className="px-3 py-2 break-words">{v || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
      )}
        </div>
    </div>
  );
}


