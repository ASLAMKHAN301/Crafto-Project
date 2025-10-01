import { useState, useEffect } from "react";
import { Wallet2, CalendarCheck, Clock } from "lucide-react";

export default function SubscribePopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto open after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Disable scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-10">
      <div className="bg-violet-100 rounded-lg shadow-2xl max-w-sm w-full relative p-8 animate-zoomIn">
        {/* Close button top-right */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-xl text-gray-800 hover:text-black"
        >
          ✕
        </button>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://craftohtml.themezaa.com/images/demo-data-analysis-popup.png"
            alt="popup"
            className="w-40"
          />
        </div>

        {/* Heading */}
        <h5 className="text-3xl font-semibold text-gray-900 mb-6">
          Get a free data analytics for 14 days.
        </h5>

        {/* Features */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Wallet2 className="w-5 h-5 text-gray-800" />
            <span className="text-gray-800">No any hidden fees pay.</span>
          </div>
          <div className="flex items-center gap-3">
            <CalendarCheck className="w-5 h-5 text-gray-800" />
            <span className="text-gray-800">Get free trial for limited time.</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-gray-800" />
            <span className="text-gray-800">You can cancel anytime.</span>
          </div>
        </div>

        {/* Buttons */}
        <a
          href="#"
          className="block w-full text-center mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Sign up for free
        </a>
        <button
          onClick={() => setIsOpen(false)}
          className="block mx-auto mt-4 text-gray-700 font-semibold hover:underline"
        >
          No thanks
        </button>
      </div>
    </div>
  );
}
