import Button from "@/_components/button";

export default function Home() {
  return (
    <div className="w-screen flex flex-row justify-center mt-[calc(80px)]">
      <Button to="/villas" type="home-button">
        Checkout Villas
      </Button>
    </div>
  );
}
