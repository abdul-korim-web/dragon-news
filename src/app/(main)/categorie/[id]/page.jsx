
import CategoriesList from "@/components/CategoriesList";
import FindOnUs from "@/components/FindOnUs";
import Galary from "@/components/Galary";
import NewsCard from "@/components/NewsCard";
import SocialLogin from "@/components/SocialLogin";
import Image from "next/image";
const getNews = async(category_id)=>{
  const resNews = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
  const data = await resNews.json()
  // console.log("data", data);
  return data?.data
}
export default async  function Home() {
  const newsData = await getNews("01")
  // console.log(newsData);
  return (
    <div className="px-5 container mx-auto grid grid-cols-12 my-20 mt-10">
      <div className="col-span-12 xl:col-span-3 mt-10">
        <CategoriesList/>
      </div>
      <div className="col-span-12 xl:col-span-6 mt-10">
        <NewsCard newsData={newsData}/>
      </div>
      <div className="col-span-12 xl:col-span-3 mt-10">
        <SocialLogin/>
        <FindOnUs/>
        <Galary/>
      </div>
    </div>
  );
}
