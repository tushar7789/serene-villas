import Features from "./_components/featuresBanner";
import DatesInputBox from "./_components/datesInputBox";
import DetailsContainer from "./_components/detailsContainer";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <>
      <div className="
            w-screen 
            h-95 
            px-37.5
            flex 
            flex-col 
            justify-start 
            items-center
            bg-linear-to-r 
            from-gray-50 
            to-gray-100">
        <div className="h-35 w-full flex flex-col justify-center items-start">
          <span className="h-10 w-full font-bold text-2xl">
            Now, get a Villa for 4 at 35% off
          </span>
          <span className="h-7.5 w-full flex flex-row items-center text-sm">
            Offers valid until &nbsp; <i>31st December</i>
          </span>
        </div>
        <div className="h-32.5 w-full">
          <DatesInputBox />
        </div>
        <div className="h-27.5 w-full  flex flex-row justify-around items-center">
          <Features />
        </div>
      </div>
      <DetailsContainer />
      <Footer />
    </>
  );
}


