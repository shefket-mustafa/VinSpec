import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useTranslation } from 'react-i18next'

// VIN: 17 chars, letters/digits except I, O, Q.
const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;

const schema = yup.object({
  vin: yup
  .string()
  .required("VIN is required")
  .transform((v) => (v || "").trim().toUpperCase())
  .matches(vinRegex, "Invalid VIN. Must be 17 characters, no I/O/Q."),
});

type FormValues = yup.InferType<typeof schema>;

export default function HeroSection1() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [noVin, setNoVin] = useState(false);

  const noVinHandler = () => {
    setNoVin(true);
    setTimeout(() => {
      setNoVin(false);
    }, 2000);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: { vin: "" },
  });

  const onSubmit = ({ vin }: FormValues) => {
    // vin is already trimmed & uppercased by Yup transform
    const cleanedVin = encodeURIComponent(vin);
    navigate(`/vin-check/${cleanedVin}`);
  };

  const checkItems = t("heroSection1.weCheck", { returnObjects: true }) as string[];

  return (
    <div className="bg-cyan-100 md:flex">
      {/* Left */}
      <div className="flex md:w-1/2 md:min-h-screen gap-7 px-10 md:px-25 py-20 flex-col">
        <h1 className="text-xl md:text-5xl font-bold md:w-140">
          {t("heroSection1.title")}
        </h1>

        <h3 className="md:w-120 text-lg">
        {t("heroSection1.subtitle")}
        </h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex bg-gray-50 p-3 rounded-lg justify-between gap-3"
          noValidate
        >
          <div className="flex-1">
            <input
              type="text"
              placeholder= {t("heroSection1.form.placeholder")}
              maxLength={17}
              className="w-full outline-none py-auto bg-transparent uppercase"
              aria-invalid={!!errors.vin || undefined}
              {...register("vin")}
            />
            {errors.vin && (
              <div className="text-red-600 text-sm mt-1">
                {errors.vin.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-amber-300 py-2 px-6 cursor-pointer font-bold rounded-3xl disabled:opacity-60"
          >
            {t("heroSection1.form.submit")}
          </button>
        </form>

        {/* Desktop version */}
        <button
          onClick={noVinHandler}
          className="hidden md:flex w-full items-center justify-center border hover:bg-black hover:text-white px-6 py-2 rounded-3xl cursor-pointer">
          {t("heroSection1.form.noVin")}
        </button>

        {/*  “We check” list  */}
        <ul className="space-y-2 grid grid-cols-2 md:grid-cols-3">
          {checkItems
          .map((item) => (
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right image */}
      <div className="hidden md:flex w-full md:w-1/3 items-center justify-center md:ml-20">
        <img
          src="https://miro.medium.com/v2/resize:fit:1250/format:webp/1*QDm2-yzHbpFw6JF_xvdcgg.jpeg"
          alt="Car inspection illustration"
          className={`w-full h-auto max-w-[700px] ${
            noVin ? "border-4 border-blue-600" : ""
          }`}
        />
      </div>
    </div>
  );
}
