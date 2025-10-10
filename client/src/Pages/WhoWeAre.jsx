import WhoWeAreBanner from "../assets/images/banner/WHO_WE_ARE.webp";
import AboutUs from "../components/whoweare/AboutUs";

function WhoWeAre() {
  return (
    <>
      <div>
        <img
          className="w-[1,922px] h-[825] bg-cover bg-center bg-no-repeat"
          src={WhoWeAreBanner}
          alt="Who We Are"
        />

        <AboutUs />
      </div>
    </>
  );
}

export default WhoWeAre;
