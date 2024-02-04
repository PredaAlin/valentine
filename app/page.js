import Buttons from "@/components/Buttons";
import Heart from "@/components/Heart";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
  const kitty = '/kitty3.gif'
 
  return (
    <div className="h-screen flex items-center justify-center" style={{backgroundImage:`url('imagebg.jpg')`}}>
      <div>
        <h1 className="bg-purple-500 rounded-lg text-5xl font-serif font-semibold p-3 shadow-xl text-center">
          {" "}
          Buna iubiii, vrei sa fii valentina mea??
        </h1>
        <Heart image={kitty}></Heart>
        <Buttons></Buttons>
      
       


      </div>
    </div>
  );
}
