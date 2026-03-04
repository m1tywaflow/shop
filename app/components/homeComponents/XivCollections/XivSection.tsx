import XivContent from "./XivContent";
const XivSection = () => {
  return (
    <>
      <div className="bg-white" style={{
        backgroundImage: "url('/bg/noisybackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <XivContent />
      </div>
    </>
  );
};

export default XivSection;
