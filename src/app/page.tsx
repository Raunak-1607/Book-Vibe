import Image from "next/image";
import Banner from "./Shared-Components/Banner";
import Books from "@/app/Books/page"
import Book from "./Shared-Components/Book";

export default function Home() {
  return <>

    <div>

      <Banner />
      <Book/>
    </div>

  </>


}
