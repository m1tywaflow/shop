import Assortment from "@/app/components/collectionsComponents/Assortment";
const Collections = () => {
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
        <Assortment />
      </div>
    </>
  );
};

export default Collections;
