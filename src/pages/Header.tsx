import { Link, useNavigate } from "react-router";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useTranslation } from 'react-i18next'

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const navigate = useNavigate();
  const {t, i18n} = useTranslation();

  const toggleLanguage = (lng: "bg" | "en") => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  };

  const toggleBurger = () => {
    setBurgerOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50 bg-white py-3 px-10 font-medium flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div onClick={() => navigate('/')} className="bg-[url('https://howtodrawforkids.com/wp-content/uploads/2023/06/how-to-draw-an-old-car.jpg')] bg-center bg-no-repeat bg-contain h-13 md:h-16 w-16 cursor-pointer"></div>
        <p onClick={() => navigate('/')} className="font-script text-2xl cursor-pointer md:text-3xl text-amber-300">VinSpec</p>
      </div>

      {/* md+ menu */}
      <div className="hidden md:flex gap-5 text-base font-medium">
        <Link className="hover:text-amber-400" to="/">{t("home")}</Link>
        <Link className="hover:text-amber-400" to="/services">{t("services")}</Link>
        <Link className="hover:text-amber-400" to="/contacts">{t("contacts")}</Link>
        <Link className="hover:text-amber-400" to="/about">{t("about")}</Link>
        <Link className="hover:text-amber-400" to="/qa">{t("qa")}</Link>
      </div>

      {/* Burger Icon */}
      <IoMenu onClick={toggleBurger} className="md:hidden text-2xl cursor-pointer text-gray-700" />

      {burgerOpen && (
        <div
          className="
                md:hidden absolute top-14 w-full text-sm gap-3
                left-0 flex flex-col p-3 py-5 px-3 bg-white/97 backdrop:-blur-sm shadow-md border-gray-200 rounded-md"
        >
          <Link onClick={toggleBurger} to="/">
            {t("home")}
          </Link>
          <Link onClick={toggleBurger} to="/services">
          {t("services")}
          </Link>
          <Link onClick={toggleBurger} to="/contacts">
          {t("contacts")}
          </Link>
          <Link onClick={toggleBurger} to="/about">
          {t("aboutus")}
          </Link>
          <Link onClick={toggleBurger} to="/qa">
          {t("qa")}
          </Link>
        </div>
      )}

    {/* Language toggle */}
      <div className="hidden md:flex ">
        <button onClick={() => toggleLanguage(i18n.language.startsWith("bg") ? "en" : "bg")} className="bg-amber-300 text-white cursor-pointer rounded-2xl py-1 px-1">
        {i18n.language.startsWith("bg") ? t("languageShortBG") : t("languageShortEN")}
        </button>
      </div>
    </div>
  );
}
