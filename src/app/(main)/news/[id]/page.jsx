import Image from "next/image";

const getNews = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`
  );
  const data = await res.json();
  return data;
};

const Page = async ({ params }) => {
  const { id } = await params;

  const data = await getNews(id);
  const news = data?.data[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6">
      
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
        {news?.title}
      </h1>

      <div className="flex items-center gap-3">
        <Image
          src={news?.author?.img}
          alt="author"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-medium text-sm sm:text-base">
            {news?.author?.name}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            {news?.author?.published_date}
          </p>
        </div>
      </div>

      <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] relative">
        <Image
          src={
            news?.image_url ||
            "https://firehouseshelter.com/wp-content/themes/kronos/assets/images/news-placeholder.jpg"
          }
          alt="news"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover rounded-lg"
        />
      </div>

      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        {news?.details}
      </p>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-xs sm:text-sm text-gray-500">
        <span>👁 {news?.total_view} views</span>
        <span>⭐ {news?.rating?.number}</span>
      </div>
      
    </div>
  );
};

export default Page;