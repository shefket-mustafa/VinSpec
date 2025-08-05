
export default function WorldMapBanner() {
  return (
    <div className="min-h-screen w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/A_large_blank_world_map_with_oceans_marked_in_blue.PNG/1599px-A_large_blank_world_map_with_oceans_marked_in_blue.PNG?20241220232539')] bg-no-repeat mb-20 md:mb-40 bg-center bg-cover">
    <div className="min-h-screen w-full bg-white/60 flex flex-col md:flex-row items-center justify-center px-5 md:px-20">
      {/* Text section */}
      <div className="flex-1 max-w-2xl flex flex-col justify-center items-center space-y-5 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold">
          Leaders in the field of automotive data
        </h1>
        <p className="text-sm md:text-base">
          Since our founding in 2025, we have expanded to 35 markets and
          continue to grow. The listed countries show where you can access
          carVertical reports.
        </p>
        <p className="text-sm md:text-base">
          Our vehicle history reports are based on data from over 900
          international databases, including national vehicle registries,
          insurance companies, legal agencies, and other institutions.
        </p>
      </div>
    </div>
  </div>
  );
}
