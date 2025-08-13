import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation("");
  
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-20 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / Logo */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-white">{t("footer.brand")}</h1>
          <p className="text-sm">
          {t("footer.tagline")}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-white font-semibold mb-3">{t("footer.quickLinks.title")}</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
              {t("footer.quickLinks.home")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
              {t("footer.quickLinks.about")}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
              {t("footer.quickLinks.services")}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:underline">
              {t("footer.quickLinks.contacts")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-white font-semibold mb-3">{t("footer.support.title")}</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faq" className="hover:underline">
              {t("footer.support.faq")}
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
              {t("footer.support.terms")}
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
              {t("footer.support.privacy")}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:underline">
              {t("footer.support.customerSupport")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h2 className="text-white font-semibold mb-3">{t("footer.contact.title")}</h2>
          <p className="text-sm mb-2">{t("footer.contact.emailLabel")}: shefket.must@gmail.com</p>
          <p className="text-sm mb-4">{t("footer.contact.phoneLabel")}: +359 (89) 422-9461</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/shefket_sum/" target="blank">
              {" "}
              <svg
                className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.4 1 .5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5a3.4 3.4 0 0 1-1.3-.9 3.4 3.4 0 0 1-.9-1.3c-.2-.4-.4-1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.7.4 3.9.8c-.9.4-1.7 1-2.4 1.7C.8 3.1.2 3.9.8 3.9c-.4.8-.6 1.8-.7 3.1C0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.3.7 3.1.4.8 1 1.6 1.7 2.3.7.7 1.5 1.3 2.3 1.7.8.4 1.8.6 3.1.7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.3-.3 3.1-.7.8-.4 1.6-1 2.3-1.7.7-.7 1.3-1.5 1.7-2.3.4-.8.6-1.8.7-3.1.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.3-.7-3.1-.4-.8-1-1.6-1.7-2.3-.7-.7-1.5-1.3-2.3-1.7C19.3.4 18.3.2 17 .1 15.7 0 15.3 0 12 0Z" />
                <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8Zm0 10.2A4 4 0 1 1 12 8a4 4 0 0 1 0 8Zm6.4-10.8a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88Z" />
              </svg>
            </a>
            <a href="https://github.com/shefket-mustafa" target="blank">
              <svg
                className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4a3.1 3.1 0 0 0-1.3-1.8c-1-.7.1-.7.1-.7a2.4 2.4 0 0 1 1.7 1.2 2.4 2.4 0 0 0 3.3.9c.1-.9.4-1.6.8-2a8.2 8.2 0 0 1-3.3-6c0-1.4.5-2.6 1.3-3.6-.2-.4-.6-1.7.1-3.4 0 0 1-.3 3.5 1.3a11.9 11.9 0 0 1 6.4 0c2.5-1.6 3.5-1.3 3.5-1.3.7 1.7.3 3 .1 3.4.8 1 1.3 2.2 1.3 3.6a8.2 8.2 0 0 1-3.3 6c.5.4.9 1.2.9 2.4v3.6c0 .3.2.7.8.6A12 12 0 0 0 12 0Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shefket-mustafa-81356a360/"
              target="blank"
            >
              <svg
                className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5Zm.02 4.5H3V21h2v-13ZM8 9h2v1.6c.3-.5 1.1-1.6 3.1-1.6 3.3 0 3.9 2.2 3.9 5v7h-2v-6.5c0-1.5-.5-2.5-1.7-2.5-1.3 0-1.9 1-1.9 2.5V21h-2V9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center">
        &copy; {new Date().getFullYear()} {t("footer.brand")}. {t("footer.bottom.rights")}
      </div>
    </footer>
  );
}
