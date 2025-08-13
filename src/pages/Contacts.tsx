import { useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export default function Contacts() {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {

      //TODO a pop up modal
      alert("Request Submitted!");
      navigate('/');

    },2000)

  };

  return (
    <section className="min-h-screen px-6 py-10 md:px-20 bg-gray-50 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-amber-500">{t("contactsPage.title")}</h2>

      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg p-8 rounded-lg">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col">
            <span className="mb-1 font-medium">{t("contactsPage.form.name")}</span>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 font-medium">{t("contactsPage.form.email")}</span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 font-medium">{t("contactsPage.form.message")}</span>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            />
          </label>

          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-500 transition-colors text-white font-medium py-2 px-6 rounded-md mt-2 self-start"
          >
            {t("contactsPage.form.send")}
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-5">
          <div>
            <h3 className="text-lg font-semibold mb-1">{t("contactsPage.info.officeTitle")}</h3>
            <p>{t("contactsPage.info.address.line1")}</p>
            <p>{t("contactsPage.info.address.city")}</p>
            <p>{t("contactsPage.info.address.country")}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">{t("contactsPage.info.emailTitle")}</h3>
            <a href="mailto:info@vinspec.com" className="text-amber-500 hover:underline">shefket.must@gmail.com</a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">{t("contactsPage.info.phoneTitle")}</h3>
            <p>+359 (89) 422-9461</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">{t("contactsPage.info.hoursTitle")}</h3>
            <p>{t("contactsPage.info.hours.weekdays")}</p>
            <p>{t("contactsPage.info.hours.weekend")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
