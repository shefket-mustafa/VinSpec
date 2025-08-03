
export default function WorldMapBanner() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0 w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/A_large_blank_world_map_with_oceans_marked_in_blue.PNG/1599px-A_large_blank_world_map_with_oceans_marked_in_blue.PNG?20241220232539')] bg-no-repeat bg-center bg-contain">
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/60 z-10">
          {/* Main content */}
          <div className="relative z-20 flex flex-col md:flex-row gap-10 px-5 md:px-20 py-10 items-center justify-center h-full">
            {/* Text section */}
            <div className="flex-1 justify-center items-center max-w-2xl space-y-5">
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
      </div>
    </div>
  );
}
