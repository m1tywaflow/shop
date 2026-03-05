import FooterNavi from "./FooterNavi";
import Link from "next/link";

const DiamondArrow = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 2 L2 13 L13 24 Z" fill="#b0b0b0" />
    <path d="M13 2 L24 13 L13 24 Z" fill="#111" />
  </svg>
);

const Footer = () => {
  return (
    <footer
      className="w-full flex flex-col justify-between px-10 py-12 min-h-75"
      style={{
        backgroundImage: "url('/bg/noisybackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#e8e8e5",
      }}
    >
      <div className="flex justify-between items-start mb-16">
        <div className="flex flex-col gap-10 text-sm tracking-wide">
          <div>
            <p className="text-black text-lg tracking-widest mb-3 ">INFO</p>
            <FooterNavi />
          </div>
          <div>
            <p className="text-black text-lg tracking-widest mb-3">LANGUAGES</p>
            <div className="flex flex-col gap-1">
              {["ENG", "ESP", "SVE"].map((lang, index, arr) => (
                <div key={lang} className="flex items-center gap-1 text-black">
                  <Link
                    href="/"
                    className="hover:opacity-60 transition-opacity"
                  >
                    {lang}
                  </Link>
                  {index < arr.length - 1 && (
                    <span className="text-[#000000]">/</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-black text-xs tracking-widest mb-2">
            TECHNOLOGIES
          </p>
          <div className="flex items-center gap-2">
            <DiamondArrow />
            <span
              className="text-5xl font-black leading-none"
              style={{ color: "#c8c8c8", letterSpacing: "-0.02em" }}
            >
              VR
            </span>
          </div>
          <div className="flex items-end gap-8">
            <div
              className="text-6xl font-black leading-none"
              style={{ letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              <div>XIV</div>
              <div>QR</div>
            </div>
            <div className="flex items-center gap-2 mb-20 text-sm  whitespace-nowrap">
              <span className="text-[#1E1E1E] text-sm">
                Near-field communication
              </span>
              <span className="text-black font-thin text-lg">/</span>
            </div>
          </div>
        </div>
        <div className="w-32" />
      </div>
      <div className="flex justify-between text-xs text-black tracking-wide">
        <p>© 2024 — copyright</p>
        <Link href="/privacy" className="hover:opacity-60 transition-opacity">
          privacy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
