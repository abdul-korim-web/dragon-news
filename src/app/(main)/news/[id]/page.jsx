import Image from "next/image";

const getNews = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`
  );
  const data = await res.json();
  return data;
};

const Page = async ({ params }) => {
  const { id } =await params;

  const data = await getNews(id);
  const news = data?.data[0]; 

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-6">
      <h1 className="text-2xl font-bold">{news?.title}</h1>
      <div className="flex items-center gap-3">
        <Image
          src={news?.author?.img}
          alt="author"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-medium">{news?.author?.name}</p>
          <p className="text-sm text-gray-500">
            {news?.author?.published_date}
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="w-full h-[300px] relative">
        <Image
          src={news?.image_url || "https://firehouseshelter.com/wp-content/themes/kronos/assets/images/news-placeholder.jpg"}
          alt="news"
          fill
          loading="lazy"
          className="object-cover rounded-lg"
        />
      </div>

      {/* Details */}
      <p className="text-gray-700">{news?.details}</p>

      {/* Footer */}
      <div className="flex justify-between text-sm text-gray-500">
        <span>👁 {news?.total_view} views</span>
        <span>⭐ {news?.rating?.number}</span>
      </div>

    </div>
  );
};

export default Page;