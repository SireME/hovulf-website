"use client";

import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the bubble was already shown
    const lastShown = localStorage.getItem("whatsapp-bubble-shown");
    const now = new Date().getTime();
    const oneMonth = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

    if (!lastShown || now - parseInt(lastShown) > oneMonth) {
      // Show the bubble if it's the first visit or more than a month has passed
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Store the current timestamp
    localStorage.setItem("whatsapp-bubble-shown", new Date().getTime().toString());
  };
  const phoneNumber = "237675100537";
  const message = encodeURIComponent(
    "Hello! I'd like to learn more about your organization."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      {/* Chat Bubble Tooltip */}
      {isVisible && (
        <div className="fixed bottom-24 right-5 z-50 animate-fade-in-up">
          <div className="relative">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold transition-colors z-10"
              aria-label="Close message"
            >
              ×
            </button>

            {/* Chat bubble */}
            <div className="bg-white rounded-lg shadow-xl p-4 max-w-[260px] relative">
              {/* Triangle pointer */}
              <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  🤝
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">
                    Our Team
                  </div>
                  <div className="text-xs text-gray-500">
                    Always here to help
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="bg-[#E7FFDB] rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-800 leading-relaxed">
                  👋 Hello! Want to learn more about our work or get involved?
                </p>
                <div className="text-xs text-gray-500 mt-1 text-right">
                  Just now
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-center py-2.5 rounded-lg font-medium text-sm transition-colors"
              >
                Chat with Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-5 right-5 z-50">
        {/* Pulse ring animation */}
        <span className="absolute flex h-16 w-16">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        </span>

        {/* Main button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="
            relative
            flex items-center justify-center
            w-16 h-16 rounded-full
            bg-[#25D366] hover:bg-[#20BA5A]
            text-white
            shadow-lg
            transition-all duration-300
            hover:scale-110
            focus:outline-none focus:ring-4 focus:ring-green-300
          "
        >
          {/* WhatsApp Icon - Official SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 175.216 175.552"
            className="w-9 h-9"
          >
            <defs>
              <linearGradient
                id="b"
                x1="85.915"
                x2="86.535"
                y1="32.567"
                y2="137.092"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#57d163" />
                <stop offset="1" stopColor="#23b33a" />
              </linearGradient>
              <filter
                id="a"
                width="1.115"
                height="1.114"
                x="-.057"
                y="-.057"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur stdDeviation="3.531" />
              </filter>
            </defs>
            <path
              fill="#b3b3b3"
              d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
              filter="url(#a)"
            />
            <path
              fill="#fff"
              d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
            />
            <path
              fill="url(#linearGradient1780)"
              d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
            />
            <path
              fill="url(#b)"
              d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
            />
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
            />
          </svg>

          {/* Badge - unread message indicator */}
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 items-center justify-center text-white text-xs font-bold">
              1
            </span>
          </span>
        </a>
      </div>
    </>
  );
}