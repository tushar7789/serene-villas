import Features from "@/_components/featuresBanner";
import DatesInputBox from "@/_components/datesInputBox";
import DetailsContainer from "@/_components/detailsContainer";
import Footer from "@/_components/footer";

export default function Home() {
  return (
    <>
      <div className="
            w-screen 
            h-[380px] 
            px-[150px] 
            flex 
            flex-col 
            justify-start 
            items-center
            bg-gradient-to-r 
            from-gray-50 
            to-gray-100">
        <div className="h-[140px] w-full flex flex-col justify-center items-start">
          <span className="h-[40px] w-full font-bold text-2xl">
            Now, get a Villa for 4 at 35% off
          </span>
          <span className="h-[30px] w-full flex flex-row items-center text-sm">
            Offers valid until &nbsp; <i>31st December</i>
          </span>
        </div>
        <div className="h-[130px] w-full">
          <DatesInputBox />
        </div>
        <div className="h-[110px] w-full  flex flex-row justify-around items-center">
          <Features />
        </div>
      </div>
      <DetailsContainer />
      <Footer />
    </>
  );
}


