import Header from "./../Components/Header/Header";
import HomePage from "../pages/Home/HomePage";

export default function Home() {
  return (
    <div>
      <Header />
      <div className=" mt-[3.5rem]">
        <HomePage />
      </div>
    </div>
  );
}
