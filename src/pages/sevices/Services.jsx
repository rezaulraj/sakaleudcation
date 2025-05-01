import React from "react";
import service1 from "../../assets/sevices/sb2.webp";
import service2 from "../../assets/sevices/sb3.webp";
import service3 from "../../assets/sevices/Studying-Abroad.webp";
const Services = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto p-2">
        <h1 className="text-5xl text-gray-800 font-bold font-quicksand mx-auto py-6">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="space-y-3">
            <img src={service3} alt="" />
            <div className="">
              <h2 className="text-xl text-gray-800 font-bold font-quicksand">
                Study Abroad
              </h2>
              <ul className="px-4" style={{ listStyleType: "square" }}>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Education consulting
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  School application process
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Visa application assistance*
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Custodian application*
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  On-boarding assistance
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <img src={service1} alt="" />
            <div className="">
              <h2 className="text-xl text-gray-800 font-bold font-quicksand">
                Settlement Assistance Service
              </h2>
              <ul className="px-4" style={{ listStyleType: "square" }}>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Airport pick-up
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Accomodation service
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Set-up bank account
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Set-up phone/ data plan
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Set-up social security number (SIN)
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Bus pass purchase
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Initial grocery assistance
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <img src={service2} alt="" />
            <div className="">
              <h2 className="text-xl text-gray-800 font-bold font-quicksand">
                Career Coach Service
              </h2>
              <ul className="px-4" style={{ listStyleType: "square" }}>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Mentorship program to guide you to land your job in Canada
                  (part-time and/or full time)
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Partner with HR professional to provide 1-on-1 career
                  mentoring such as resume builder, job searching guidance,
                  networking assistance, interview preparation, on-boarding
                  preparation, work contract review.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
