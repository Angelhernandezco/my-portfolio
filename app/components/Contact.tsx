"use client";

import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";

interface ContactProps {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  formLabels: {
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
  };
}

export function Contact({
  title,
  subtitle,
  phone,
  email,
  location,
  linkedin,
  github,
  instagram,
  formLabels,
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulamos un envío de formulario
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen lg:h-[calc(100vh-80px)] w-full bg-hero text-ink transition-colors duration-500 dark:bg-hero-dark dark:text-ink-dark overflow-y-auto lg:overflow-hidden flex items-center justify-center"
      data-snap
    >
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-10 py-16 lg:py-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 space-y-4">
          <h2 className="hero-title">{title}</h2>
          <p className="hero-subtitle text-lg sm:text-xl">
            {subtitle}
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FiPhone className="w-6 h-6 sm:w-8 sm:h-8 text-current mt-1" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold opacity-70 mb-1">
                  {formLabels.name === "Nombre" ? "Teléfono" : "Phone"}
                </p>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-base sm:text-lg font-medium hover:opacity-70 transition-opacity"
                >
                  {phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FiMail className="w-6 h-6 sm:w-8 sm:h-8 text-current mt-1" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold opacity-70 mb-1">
                  {formLabels.name === "Nombre" ? "Email" : "Email"}
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-base sm:text-lg font-medium hover:opacity-70 transition-opacity break-all"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FiMapPin className="w-6 h-6 sm:w-8 sm:h-8 text-current mt-1" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold opacity-70 mb-1">
                  {formLabels.name === "Nombre" ? "Ubicación" : "Location"}
                </p>
                <p className="text-base sm:text-lg font-medium">{location}</p>
              </div>
            </div>

            {/* Social Links */}
            {(linkedin || github || instagram) && (
              <div className="pt-4 border-t border-current border-opacity-20">
                <p className="text-sm sm:text-base font-semibold opacity-70 mb-4">
                  {formLabels.name === "Nombre" ? "Redes Sociales" : "Social Media"}
                </p>
                <div className="flex space-x-6">
                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl transition-opacity hover:opacity-70"
                      title="LinkedIn"
                    >
                      <SiLinkedin />
                    </a>
                  )}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl transition-opacity hover:opacity-70"
                      title="GitHub"
                    >
                      <SiGithub />
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl transition-opacity hover:opacity-70"
                      title="Instagram"
                    >
                      <SiInstagram />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={formLabels.name}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 bg-stone-100 dark:bg-stone-800 dark:bg-opacity-40 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-300 rounded-lg border-2 border-stone-300 dark:border-stone-700 focus:outline-none focus:border-stone-400 dark:focus:border-stone-600 focus:ring-2 focus:ring-stone-300 dark:focus:ring-stone-600 focus:ring-opacity-50 transition-all duration-300 font-medium"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={formLabels.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 bg-stone-100 dark:bg-stone-800 dark:bg-opacity-40 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-300 rounded-lg border-2 border-stone-300 dark:border-stone-700 focus:outline-none focus:border-stone-400 dark:focus:border-stone-600 focus:ring-2 focus:ring-stone-300 dark:focus:ring-stone-600 focus:ring-opacity-50 transition-all duration-300 font-medium"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder={formLabels.subject}
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 sm:py-4 bg-stone-100 dark:bg-stone-800 dark:bg-opacity-40 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-300 rounded-lg border-2 border-stone-300 dark:border-stone-700 focus:outline-none focus:border-stone-400 dark:focus:border-stone-600 focus:ring-2 focus:ring-stone-300 dark:focus:ring-stone-600 focus:ring-opacity-50 transition-all duration-300 font-medium"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder={formLabels.message}
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 sm:py-4 bg-stone-100 dark:bg-stone-800 dark:bg-opacity-40 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-300 rounded-lg border-2 border-stone-300 dark:border-stone-700 focus:outline-none focus:border-stone-400 dark:focus:border-stone-600 focus:ring-2 focus:ring-stone-300 dark:focus:ring-stone-600 focus:ring-opacity-50 transition-all duration-300 font-medium resize-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 sm:py-4 bg-stone-700 dark:bg-stone-800 hover:bg-stone-800 dark:hover:bg-stone-900 text-white rounded-lg font-bold text-base sm:text-lg uppercase tracking-wider transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? "Sending..." : formLabels.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
