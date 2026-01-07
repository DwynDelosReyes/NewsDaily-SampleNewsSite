import Layout from "../app/layout";
import { LoadCardDemo } from "@/components/LoadingCard";
import loadingImage from "@/asset/loadingcard.png";

// Helper function to generate loading cards
const generateLoadingCards = (num: number) =>
  Array.from({ length: num }).map(() => ({
    image: loadingImage,
    title: "Loading Title...",
    description: "Loading Description...",
    publishedAt: "Publication Date..",
    readTime: "Reading Duration..",
  }));

// Cards content
const majorNewsCards = generateLoadingCards(12);
const minorNewsCards = generateLoadingCards(9);
const minorNewsFourthCol = generateLoadingCards(12);
const relatedNews = generateLoadingCards(15);

function NewsPage() {
  return (
    <Layout>
      <section className="py-12 px-6 space-y-12">

        {/* ========== Major News ========== */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Major News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorNewsCards.map((item, index) => (
              <LoadCardDemo
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                publishedAt={item.publishedAt}
                readTime={item.readTime}
              />
            ))}
          </div>
        </div>

        {/* ========== Minor News ========== */}
        <div>
          <h2 className="text-3xl font-bold mt-27 mb-8">Minor News</h2>
          <div className="flex gap-6">
            {/* 3-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
              {minorNewsCards.map((item, index) => (
                <LoadCardDemo
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  publishedAt={item.publishedAt}
                  readTime={item.readTime}
                />
              ))}
            </div>

            {/* Separate 4th column with 5 rows */}
            <div className="flex flex-col gap-6 w-[25%]">
              {minorNewsFourthCol.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 p-4 hover:underline cursor-pointer text-left"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    {item.publishedAt} • {item.readTime}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== Related News ========== */}
        <div>
          <h2 className="text-3xl font-bold mt-22 mb-10">Related News</h2>
          <div className="grid grid-cols-4 gap-4 border border-white">
            {Array.from({ length: 5 }).map((_, rowIndex) => (
              <>
                {/* Column 1: spans 2 columns */}
                <div
                  key={`row-${rowIndex}-col-1`}
                  className="col-span-2 flex items-center gap-4 border-b border-r border-gray-300 p-4 hover:underline cursor-pointer"
                >
                  <img
                    src={relatedNews[rowIndex].image}
                    alt={relatedNews[rowIndex].title}
                    className="w-20 h-20 object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col justify-center text-left">
                    <h3 className="text-xl font-bold mb-1">{relatedNews[rowIndex].title}</h3>
                    <p className="text-sm text-gray-500">
                      {relatedNews[rowIndex].publishedAt} • {relatedNews[rowIndex].readTime}
                    </p>
                  </div>
                </div>

                {/* Column 2 */}
                <div
                  key={`row-${rowIndex}-col-2`}
                  className="border-b border-r border-gray-300 p-4 hover:underline cursor-pointer text-left flex flex-col justify-end h-full"
                >
                  <h3 className="text-lg font-semibold">{relatedNews[5 + rowIndex].title}</h3>
                  <p className="text-sm text-gray-500">
                    {relatedNews[5 + rowIndex].publishedAt} • {relatedNews[5 + rowIndex].readTime}
                  </p>
                </div>

                {/* Column 3 */}
                <div
                  key={`row-${rowIndex}-col-3`}
                  className="border-b border-gray-300 p-4 hover:underline cursor-pointer text-left flex flex-col justify-end h-full"
                >
                  <h3 className="text-lg font-semibold">{relatedNews[10 + rowIndex].title}</h3>
                  <p className="text-sm text-gray-500">
                    {relatedNews[10 + rowIndex].publishedAt} • {relatedNews[10 + rowIndex].readTime}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default NewsPage;
