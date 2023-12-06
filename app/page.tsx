import Banner from "./components/Banner";
import Header from "./components/Header";

export const revalidate = 0
export default function Home() {
  return (
    <div className="bg-[#D2D7D9]">
      <div className="max-w-[1440px] m-auto ">
        <Header />
        <Banner />

      </div>
    </div>


  )
}