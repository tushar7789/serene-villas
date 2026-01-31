import Features from "./_components/featuresBanner";
import DatesInputBox from "./_components/datesInputBox";
import DetailsContainer from "./_components/detailsContainer";
import Footer from "./_components/footer";
import { auth } from "../auth";
import NotificationComp from "./_components/notificationComp";

export default async function Home({ searchParams }: { searchParams: { redirectedFrom?: string } }) {
  // const session = await auth();
  // const wasRedirected = !!searchParams.redirectedFrom;
  // console.log("wasRedirected: ", wasRedirected, "search params", searchParams);
  // const redirectReason = localStorage.getItem("redirectReason");

  return (
    <>
      {/* {
        localStorage.getItem("redirectReason") !== undefined ?
          localStorage.getItem("redirectReason") === "signin" ?
            <NotificationComp type="signin" /> :
            <NotificationComp type="signout" /> :
          null
      } */}
      <NotificationComp />
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


