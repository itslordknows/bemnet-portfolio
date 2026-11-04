"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Mail, MapPin, Send, CheckCircle2, Copy, Check } from "lucide-react";

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bemnet.mersha@bit.edu.cn");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="mt-12 bg-white p-8 sm:p-10 rounded-xl shadow-md border border-gray-100 fade-in-section"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
        Get in touch
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-lg mx-auto">
        Please feel free to drop me a message! I welcome scientific dialogue, joint research initiatives, and academic correspondence.
      </p>

      {/* Contact Information Cards — Exact Benjamin Schiffer Style */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 text-center max-w-3xl mx-auto mb-10">
        {/* Email Card */}
        <div className="flex-1 p-6 rounded-xl bg-gray-50/70 border border-gray-100 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-navy-lightest flex items-center justify-center mb-3">
            <Mail className="w-6 h-6 text-navy" />
          </div>
          <h3 className="font-semibold text-gray-900 text-lg mb-1">Email</h3>
          <a
            href="mailto:bemnet.mersha@bit.edu.cn"
            className="text-navy hover:underline font-medium text-sm sm:text-base break-all"
          >
            bemnet.mersha@bit.edu.cn
          </a>
          <button
            onClick={handleCopyEmail}
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-navy font-medium px-2.5 py-1 rounded-md bg-white border border-gray-200 transition-colors shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600">Copied to clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy email address</span>
              </>
            )}
          </button>
        </div>

        {/* Address Card */}
        <div className="flex-1 p-6 rounded-xl bg-gray-50/70 border border-gray-100 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-navy-lightest flex items-center justify-center mb-3">
            <MapPin className="w-6 h-6 text-navy" />
          </div>
          <h3 className="font-semibold text-gray-900 text-lg mb-1">Address</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            School of Automation
            <br />
            Beijing Institute of Technology (BIT)
            <br />
            No. 5 Zhongguancun South Street, Haidian District
            <br />
            Beijing 100081, China
          </p>
        </div>
      </div>

      {/* Interactive Message Sender Form */}
      <div className="max-w-2xl mx-auto pt-6 border-t border-gray-100">
        <h4 className="text-center font-semibold text-gray-900 text-base mb-4">
          Send a Direct Academic Note
        </h4>

        {formSubmitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center animate-fadeIn">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
            <h5 className="font-bold text-gray-900 text-base mb-1">
              Thank You, {formData.name}!
            </h5>
            <p className="text-sm text-gray-600 mb-4">
              Your message draft has been prepared. You can also reach me directly at{" "}
              <a
                href="mailto:bemnet.mersha@bit.edu.cn"
                className="text-navy font-semibold underline"
              >
                bemnet.mersha@bit.edu.cn
              </a>
              .
            </p>
            <button
              onClick={() => {
                setFormSubmitted(false);
                setFormData({ name: "", email: "", subject: "", message: "" });
              }}
              className="text-xs font-semibold text-navy hover:underline"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Prof. / Dr. / Researcher"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@university.edu"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="Research collaboration / Code inquiry / Seminar invitation"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Share your comments, research questions, or collaboration proposal..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all resize-y"
              ></textarea>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-7 py-3 rounded-lg hover:bg-navy-light transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
