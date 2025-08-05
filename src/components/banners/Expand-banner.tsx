import { Link } from "react-router";

export default function ExpandBanner() {
  return (
    <div className="md:min-h-screen flex items-center flex-col md:flex-row py-20 bg-cyan-100 md:px-20">
      <div className="w-1/2 flex flex-col justify-center items-start text-left">
        <h1 className="text-3xl md:text-5xl py-3">
          Expand your automobile business
        </h1>

        <h2 className="font-light">
          Our products will increase the effectiveness and transparency of your
          automobile business
        </h2>

        <div className="py-5">
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              data-slot="icon"
              className="w-5 h-5 text-blue shrink-0"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M20.605 6.524a.8.8 0 0 0-1.21-1.048L9.6 16.779l-4.995-5.764a.8.8 0 1 0-1.21 1.047l5.6 6.462a.8.8 0 0 0 1.21 0l10.4-12Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p> Reduce the risk of unexpected expenses</p>
          </div>

          <div className="flex gap-1 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              data-slot="icon"
              className="w-5 h-5 text-blue shrink-0"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M20.605 6.524a.8.8 0 0 0-1.21-1.048L9.6 16.779l-4.995-5.764a.8.8 0 1 0-1.21 1.047l5.6 6.462a.8.8 0 0 0 1.21 0l10.4-12Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p>Simplify the vehicle evaluation process</p>
          </div>

          <div className="flex gap-1 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              data-slot="icon"
              className="w-5 h-5 text-blue shrink-0"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M20.605 6.524a.8.8 0 0 0-1.21-1.048L9.6 16.779l-4.995-5.764a.8.8 0 1 0-1.21 1.047l5.6 6.462a.8.8 0 0 0 1.21 0l10.4-12Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p>Speed up your sales</p>
          </div>
        </div>

        <Link
          className="bg-amber-300 px-3 py-1 rounded-2xl mt-5"
          to="/contacts"
        >
          Become a partner
        </Link>
      </div>

      {/* Right side images */}
      <div className="hidden md:flex flex-col md:flex-row gap-5">
        {/* first col of images */}
        <div className="flex flex-col gap-3">
          <div className="bg-[url('https://www.carvertical.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Finsurance-hero-image-3-2672599c1b2ea119fe5d2bc97a62f863.jpg&w=3840&q=75')] h-60 w-60 bg-no-repeat bg-center bg-cover rounded-lg"></div>
          <div className="bg-[url('https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjA4MDc4Mjg0MzQ4MjA0Njg4/analyzing-the-impact-of-car-features-on-price-and-profitability.jpg')] h-60 w-60 bg-no-repeat bg-center bg-cover rounded-lg"></div>
          <div className="bg-[url('https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i9XxFf.3DwXk/v0/-1x-1.webp')] h-60 w-60 bg-no-repeat bg-center bg-cover rounded-lg"></div>
        </div>

        {/* second col of images */}
        <div className="flex flex-col gap-3">
          <div className="bg-[url('https://dragon2000-multisite.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/38/2020/12/14105123/sell-your-car-2.png')] h-60 w-60 bg-no-repeat bg-center rounded-lg bg-cover"></div>
          <div className="bg-[url('https://www.carvertical.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fbusiness-hero-image-2-1004b4a4d3707223836d6028d6c5fbd9.jpg&w=3840&q=75')] h-60 w-60 rounded-lg bg-no-repeat bg-center bg-cover"></div>
        </div>
      </div>
    </div>
  );
}
