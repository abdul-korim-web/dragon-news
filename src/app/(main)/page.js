import CategoriesList from "@/components/CategoriesList";
import FindOnUs from "@/components/FindOnUs";
import Galary from "@/components/Galary";
import SocialLogin from "@/components/SocialLogin";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-5 container mx-auto grid grid-cols-12 my-20">
      <div className="col-span-3">
        <CategoriesList/>
      </div>
      <div className=" col-span-6 ">Dragon News Home</div>
      <div className=" col-span-3">
        <SocialLogin/>
        <FindOnUs/>
        <Galary/>
      </div>
    </div>
  );
}
