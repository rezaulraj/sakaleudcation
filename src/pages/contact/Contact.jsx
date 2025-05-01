import React, { useState } from "react";
import frontImge from "../../assets/contact/frontimg.webp";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isInvalid = touched && value.trim() === "";
  return (
    <div>
      <section
        className="bg-cover bg-center py-16 px-2 h-auto sm:min-h-screen relative flex items-center justify-center"
        style={{ backgroundImage: `url(${frontImge})` }}
      >
        <div className="absolute inset-0 bg-gray-800/20"></div>
        <div className="flex flex-col items-center justify-center max-w-screen-sm mx-auto relative z-10">
          <h1 className="text-5xl text-white font-bold text-center font-quicksand mx-auto py-6">
            {t("contact.contactFront.heading")}
          </h1>
          <p className="text-lg text-white font-bold text-center font-quicksand mx-auto py-6">
            {t("contact.contactFront.subheading")}
          </p>
        </div>
      </section>

      <section className="bg-white p-2">
        <div className="space-y-2 max-w-screen-xl md:ml-10 mt-8">
          <p className="text-xl text-gray-800 font-bold font-quicksand">
            {t("contact.subContact.p1")}
          </p>
          <p className="text-xl text-gray-700 font-bold font-quicksand mx-auto">
            {t("contact.subContact.p2")}
          </p>
        </div>
        <h1 className="text-5xl text-gray-800 font-bold text-center font-quicksand mx-auto py-6">
          {t("contact.from.heading")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-screen-xl mx-auto">
          <div className="col-span-3">
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="block text-gray-700 mb-1" htmlFor="name">
                  {t("contact.from.name")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={() => setTouched(true)}
                  placeholder={t("contact.from.name")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    isInvalid
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  required
                />
                {isInvalid && (
                  <p className="text-red-500 text-sm mt-1">
                    This field is required.
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 mb-1" htmlFor="name">
                  {t("contact.from.email")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="email"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={() => setTouched(true)}
                  placeholder={t("contact.from.email")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    isInvalid
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  required
                />
                {isInvalid && (
                  <p className="text-red-500 text-sm mt-1">
                    This field is required.
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 mb-1" htmlFor="name">
                  {t("contact.from.number")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={() => setTouched(true)}
                  placeholder={t("contact.from.phonep")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    isInvalid
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  required
                />
                {isInvalid && (
                  <p className="text-red-500 text-sm mt-1">
                    This field is required.
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 mb-1" htmlFor="name">
                  {t("contact.from.message")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="name"
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={() => setTouched(true)}
                  placeholder={t("contact.from.messagep")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    isInvalid
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  required
                />
                {isInvalid && (
                  <p className="text-red-500 text-sm mt-1">
                    This field is required.
                  </p>
                )}
              </div>
              <button className="bg-red-400 text-white px-5 py-2 rounded-md hover:bg-red-400/90 font-bold font-quicksand hover:shadow-md cursor-pointer">
                {t("contact.from.btn")}
              </button>
            </form>
          </div>
          <div className="col-span-2 space-y-4">
            <div className="space-y-3">
              <h2 className="text-2xl text-gray-800 font-bold font-quicksand mx-auto py-2">
                {t("contact.location.location2")}
              </h2>
              <p className="text-lg text-gray-700 font-medium font-quicksand">
                {t("contact.location.number2")}
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl text-gray-800 font-bold font-quicksand mx-auto py-2">
                {t("contact.location.location2")}
              </h2>
              <p className="text-lg text-gray-700 font-medium font-quicksand">
                {t("contact.location.number1")}
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl text-gray-800 font-bold font-quicksand mx-auto py-2">
                {t("contact.location.address1")}
              </h2>
              <p className="text-lg text-gray-700 font-medium font-quicksand">
                {t("contact.location.address1sub")}
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl text-gray-800 font-bold font-quicksand mx-auto py-2">
                {t("contact.location.address2")}
              </h2>
              <p className="text-lg text-gray-700 font-medium font-quicksand">
                {t("contact.location.address2sub")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
