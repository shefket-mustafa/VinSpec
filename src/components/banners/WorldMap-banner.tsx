import { useTranslation } from "react-i18next";

export default function WorldMapBanner() {

  const { t } = useTranslation();
  return (
    <div className="min-h-screen w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/A_large_blank_world_map_with_oceans_marked_in_blue.PNG/1599px-A_large_blank_world_map_with_oceans_marked_in_blue.PNG?20241220232539')] bg-no-repeat mb-20 md:mb-40 bg-center bg-cover">
    <div className="min-h-screen w-full bg-white/60 flex flex-col md:flex-row items-center justify-center px-5 md:px-20">
      {/* Text section */}
      <div className="flex-1 max-w-2xl flex flex-col justify-center items-center space-y-5 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold">
        {t("worldMapBanner.title")}
        </h1>
        <p className="text-sm md:text-base">
        {t("worldMapBanner.p1")}
        </p>
        <p className="text-sm md:text-base">
        {t("worldMapBanner.p2")}
        </p>
      </div>
    </div>
  </div>
  );
}
