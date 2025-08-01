export default function HeroBanner1() {
  return (
    <div className="flex flex-col md:flex-row gap-10 h-20 items-center px-10 md:px-25">
      <div className="hidden md:flex items-center gap-5">
        {/* people icons image */}
        <div className="bg-[url('https://www.carvertical.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Ftrustpilot-avatars-clean-2b953ad6a455f9af605004da6f120b83.png&w=256&q=75')] h-20 w-20 bg-center bg-contain bg-no-repeat"></div>

        <p className="text-sm">Over 900,000,000 people from over 35 countries have trusted us.</p>
      </div>

      <div
        className=" h-10 w-16 bg-center bg-contain bg-no-repeat
            bg-[url('https://www.carvertical.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fautobild-10c0c55f5ed19ae91dd1da8fd623071e.png&w=48&q=75')]"
      ></div>
      <div className="bg-[url('https://www.carvertical.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Ftopgear-4296f3d5ffa655a4962999498bc0401b.png&w=256&q=75')] h-20 w-20 bg-center bg-contain bg-no-repeat"></div>
      <div className="bg-[url('https://www.carvertical.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fforbes-4329d773d0aaf4ddef0d78cbdc14d722.png&w=256&q=75')] h-20 w-20 bg-center bg-contain bg-no-repeat"></div>
      <div className="bg-[url('https://www.carvertical.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Freuters-f5a15ae8bf1a141f5205c32b89ada19f.png&w=256&q=75')] h-20 w-20 bg-center bg-contain bg-no-repeat"></div>
    </div>
  );
}
