import FooterNavi from "./FooterNavi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full flex flex-col justify-between px-10 py-12"
      style={{
        backgroundImage: "url('/bg/noisybackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-12 text-sm">
          <div>
            <p className="text-gray-400 mb-4">INFO</p>
            <FooterNavi />
          </div>
          <div>
            <p className="text-gray-400 mb-4">LANGUAGES</p>
            <div className="flex flex-col gap-1">
              <Link href="/">ENG</Link>
              <Link href="/">ESP</Link>
              <Link href="/">SVE</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-xs text-gray-400 mb-4">TECHNOLOGIES</p>
          <div className="text-6xl font-bold leading-none">
            <div>XIV</div>
            <div>QR</div>
          </div>
          <p className="text-sm text-gray-400 mt-4">Near-field communication</p>
        </div>
        <div className="w-30" />
      </div>
      <div className="flex justify-between text-xs text-gray-400">
        <p>© 2024 — copyright</p>
        <Link href="/privacy">privacy</Link>
      </div>
    </footer>
  );
};

export default Footer;
