import Image from "next/image";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="h-screen bg-bg flex flex-col justify-between items-center p-4">
      <NavBar />
      {/* <Body /> */}
      {/* <Footer/> */}
    </div>
  );
}
