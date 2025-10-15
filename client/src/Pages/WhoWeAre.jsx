import Banner from "../components/banner/Banner";
import WhoWeAreBanner from "../assets/images/banner/WHO_WE_ARE.webp";
import AboutUs from "../components/whoweare/AboutUs";

function WhoWeAre() {
  return (
    <>
      <Banner img={WhoWeAreBanner} alt="who we are" />
      <div className="max-w-screen-2xl mx-auto ">
        <AboutUs />
      </div>
    </>
  );
}

export default WhoWeAre;
