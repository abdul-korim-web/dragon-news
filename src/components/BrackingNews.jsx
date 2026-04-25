import React from "react";
import Marquee from "react-fast-marquee";

const BrackingNews = () => {
  const brackingNews = [
  "Global markets see strong recovery amid economic optimism",
  "New AI tools are transforming web development in 2026",
  "Bangladesh launches major infrastructure development project",
  "Tech companies race to build next-gen smart devices",
  "Climate change discussions intensify at global summit"
];
  return (
    <div className="container mx-auto flex space-x-4 bg-[#f3f3f3] p-2 md:p-4 rounded-2xl px-5 ">
      <h2 className="bg-[#D72050] text-white text-xl px-3 py-2">Latest</h2>

      <Marquee pauseOnHover={true} autoFill={true}>
        {brackingNews.map((item,index)=> <span className="ml-20 font-semibold" key={index}>{item}</span> )}
      </Marquee>
    </div>
  );
};

export default BrackingNews;
