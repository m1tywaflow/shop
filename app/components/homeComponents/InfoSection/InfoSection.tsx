import InfoContent from "./InfoContent";
const InfoSection = () => {
  return (
    <>
      <div
        className="bg-white"
        style={{
          backgroundImage: "url('/bg/noisybackground.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <InfoContent />
      </div>
    </>
  );
};

export default InfoSection;
