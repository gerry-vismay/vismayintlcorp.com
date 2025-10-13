import Banner from "../components/banner/Banner";
import WhoWeAreBanner from "../assets/images/banner/WHO_WE_ARE.webp";
import AboutUs from "../components/whoweare/AboutUs";

function WhoWeAre() {
  return (
    <>
      <div>
        <Banner img={WhoWeAreBanner} alt="who we are" />
        <AboutUs />
      </div>
    </>
  );
}

export default WhoWeAre;
