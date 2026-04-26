import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({ newsData }) => {
  return (
    <div className="px-5">
      <h2 className="text-[#403F3F] text-2xl font-bold mb-10">
        Dragon News Home
      </h2>

      {!newsData?.length ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="text-6xl mb-4">📰</div>
          <h3 className="text-xl font-semibold text-gray-700">No News Found</h3>
          <p className="text-gray-500 mt-2 max-w-md">
            We couldn't find any news for this category. Try selecting another
            category or check back later.
          </p>
          <button className="mt-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Browse Categories
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {newsData.map((item) => (
            <div
              key={item._id}
              className="border rounded-xl shadow-sm hover:shadow-md transition p-4 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {item?.author?.img && (
                    <Image
                      src={item.author.img}
                      alt="author"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  )}
                  <div>
                    <h4 className="font-semibold text-sm">
                      {item?.author?.name || "Unknown"}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {item?.author?.published_date}
                    </p>
                  </div>
                </div>
                <div className="text-sm font-medium text-yellow-500">
                  ⭐ {item?.rating?.number}
                </div>
              </div>
              <h2 className="text-lg font-bold text-[#403f3f] leading-snug">
                {item.title}
              </h2>
              {item?.thumbnail_url && (
                <div className="w-full h-[200px] relative">
                  <Image
                    src={item.thumbnail_url}
                    alt="news"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              <p className="text-sm text-gray-600">
                {item.details.slice(0, 150)}...
                <Link href={`/news/${item?._id}`} className="text-orange-500 font-medium cursor-pointer ml-1">
                  Read More
                </Link>
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>👁 {item?.total_view || 0} views</span>

                {item?.others_info?.is_trending && (
                  <span className="bg-red-100 text-red-500 px-2 py-1 rounded text-xs">
                    Trending
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsCard;
