import React, { useState } from "react";

const Carusel = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin Escobar",
      quote:
        "Terima kasih Salak Ed untuk bantuannya memilih program insurance diploma di Conestoga College dengan kemungkinan co-op. Program-nya terbukti berkualitas dan menempatkan saya di posisi berkemungkinan sukses paling tinggi diantara program lain dan kampus lain",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela Stian",
      quote:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim Ahmed",
      quote:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati ",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Sophie Müller",
      quote:
        "Thanks to the support team for their assistance. The application process was clear and smooth!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      name: "David Zhang",
      quote:
        "This platform really helped me understand my options better and gave me the confidence to proceed.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/62.jpg",
      name: "Fatima Noor",
      quote:
        "Great experience! The team was professional and very responsive throughout my journey.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/71.jpg",
      name: "Lucas Green",
      quote:
        "I couldn’t have asked for a better service. Everything was well organized and on time.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Isabella Rossi",
      quote:
        "Their guidance helped me choose the perfect program aligned with my career goals.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/53.jpg",
      name: "Mohammad Ali",
      quote:
        "From start to finish, the support was incredible. Highly recommend them to anyone planning to study abroad.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-gray-900 font-bold pb-6 font-quicksand text-4xl">
            What They Say About A4-Admisstion
          </h3>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial == idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-gray-700 text-xl font-semibold sm:text-2xl">
                        “{item.quote}“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <img
                        src={item.avatar}
                        className="w-16 h-16 mx-auto rounded-full"
                      />
                      <div className="mt-3">
                        <span className="block text-gray-800 font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-redest-dark focus:ring ${
                    currentTestimonial == idx ? "bg-redest-dark" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Carusel;
