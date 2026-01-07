import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../app/layout";
import { CardDemo } from "@/components/NewsCard";

// Sample Image imports for visualization purposes
import homePageTN1 from "@/asset/home/homePageTN1.jpg";
import homePageTN2 from "@/asset/home/homePageTN2.jpg";
import sampleImage1 from "@/asset/topnews/topnews1.jpg";
import sampleImage2 from "@/asset/topnews/topnews2.jpg";
import sampleImage3 from "@/asset/topnews/topnews3.jpg";
import sampleImage4 from "@/asset/topnews/topnews4.jpg";
import sampleImage5 from "@/asset/topnews/topnews5.jpg";
import sampleImage6 from "@/asset/topnews/topnews6.jpg";
import sampleImage7 from "@/asset/topnews/topnews7.jpg";
import adImage from "@/asset/adImage1.jpg";

// Main description for Top News
const categoryDescription =
  "The latest and most important stories shaping the world";

// Main description for Breaking Updates
const categoryDescription2 =
  "Stay ahead with urgent news, major global events, and high-impact stories";

const topNewsContent = [
  {
    image: homePageTN1,
    title: "Tech Companies to Join the Movement",
    description:
      "Emergence of AI advancement urged tech companies to join the movement for betterment. They intend to continue this program to improve millions of lives.",
    publishedAt: "Jan 1, 2026",
    readTime: "4 min read",
  },
  {
    image: homePageTN2,
    title: "5th Largest Media Conglomerate now SOLD",
    description:
      "Legacy Media Company known for multiple ventures has been sold for 192 dollars per share. Shareholders remain undecided on who to appoint as the next CEO.",
    publishedAt: "Jan 1, 2026",
    readTime: "3 min read",
  },
  {
    image: sampleImage1,
    title: "Global Markets React to Surprise Policy Shift",
    description:
      "Investors worldwide adjust positions after a major policy announcement triggers volatility across stocks, currencies, and commodities.",
    publishedAt: "Jan 1, 2026",
    readTime: "4 min read",
  },
  {
    image: sampleImage2,
    title: "Major Tech Merger Reshapes Industry Landscape",
    description:
      "Two leading technology firms confirm a multi-billion-dollar merger, raising questions about competition and innovation in the sector.",
    publishedAt: "Jan 1, 2026",
    readTime: "3 min read",
  },
];

// Creative top news for grid section
const gridNews = [
  // Column 1 (spans 2 columns)
  { image: sampleImage3, title: "Global Summit on Climate Change Begins", publishedAt: "Jan 1, 2026", readTime: "5 min read" },
  { image: sampleImage4, title: "Breakthrough in Renewable Energy Storage", publishedAt: "Jan 1, 2026", readTime: "4 min read" },
  { image: sampleImage5, title: "International Space Station Celebrates Milestone", publishedAt: "Dec 31, 2025", readTime: "3 min read" },
  { image: sampleImage6, title: "AI Ethics Guidelines Released Globally", publishedAt: "Dec 31, 2025", readTime: "4 min read" },
  { image: sampleImage7, title: "Historic Peace Agreement Signed", publishedAt: "Dec 30, 2025", readTime: "6 min read" },
  // Column 2
  { title: "Tech Startup Raises $500M which Boosts Value", publishedAt: "Jan 1, 2026", readTime: "2 min read" },
  { title: "Virtual Reality Adoption Accelerates", publishedAt: "Dec 31, 2025", readTime: "3 min read" },
  { title: "Autonomous Cars Hit Major Cities in Many Countries", publishedAt: "Dec 31, 2025", readTime: "2 min read" },
  { title: "Electric Aviation Sees First Passenger Flight", publishedAt: "Dec 30, 2025", readTime: "3 min read" },
  { title: "Global Chip Shortage Eases around The Globe", publishedAt: "Dec 30, 2025", readTime: "2 min read" },
  // Column 3
  { title: "Space Tourism Launches Successfully", publishedAt: "Jan 1, 2026", readTime: "2 min read" },
  { title: "New AI Art Platform Gains Popularity", publishedAt: "Dec 31, 2025", readTime: "3 min read" },
  { title: "Major City Implements Smart Traffic System", publishedAt: "Dec 31, 2025", readTime: "2 min read" },
  { title: "Breakthrough in Water Purification Technology", publishedAt: "Dec 30, 2025", readTime: "3 min read" },
  { title: "Global E-Sports Tournament Kicks Off", publishedAt: "Dec 30, 2025", readTime: "2 min read" },
];

function TopNews() {
  const navigate = useNavigate();

  return (
    <Layout>
      <main className="py-12 px-6">
        {/* Top News Section */}
        <h1 className="font-serif text-5xl font-bold mt-8 mb-8">Top News</h1>
        <p className="font-sans text-m tracking-[0.1em] uppercase mb-24">{categoryDescription}</p>

        {/* News cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {topNewsContent.map((item, index) => (
            <CardDemo
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              publishedAt={item.publishedAt}
              readTime={item.readTime}
            />
          ))}
        </div>

        {/* Breaking Updates Grid */}
        <h1 className="font-serif text-5xl font-bold mt-28 mb-8">Breaking Updates</h1>
        <p className="font-sans text-m tracking-[0.1em] uppercase mb-16">{categoryDescription2}</p>

        <div className="grid grid-cols-4 gap-4 border-l border-t border-r border-b border-white">
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <Fragment key={rowIndex}>
              {/* Column 1: spans 2 columns */}
              <div
                className="col-span-2 flex items-center gap-4 border-b border-r border-gray-300 p-4 hover:underline cursor-pointer"
                onClick={() =>
                  navigate(
                    `/news/${gridNews[rowIndex].title.replace(/\s+/g, "-").toLowerCase()}`
                  )
                }
              >
                <img
                  src={gridNews[rowIndex].image}
                  alt={gridNews[rowIndex].title}
                  className="w-20 h-20 object-cover flex-shrink-0"
                />
                <div className="flex flex-col justify-center text-left">
                  <h3 className="text-xl font-bold mb-1">{gridNews[rowIndex].title}</h3>
                  <p className="text-sm text-gray-500">
                    {gridNews[rowIndex].publishedAt} • {gridNews[rowIndex].readTime}
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div
                className="border-b border-r border-gray-300 p-4 hover:underline cursor-pointer text-left flex flex-col justify-end h-32"
                onClick={() =>
                  navigate(
                    `/news/${gridNews[5 + rowIndex].title.replace(/\s+/g, "-").toLowerCase()}`
                  )
                }
              >
                <h3 className="text-lg font-semibold">{gridNews[5 + rowIndex].title}</h3>
                <p className="text-sm text-gray-500">
                  {gridNews[5 + rowIndex].publishedAt} • {gridNews[5 + rowIndex].readTime}
                </p>
              </div>

              {/* Column 3 */}
              <div
                className="border-b border-gray-300 p-4 hover:underline cursor-pointer text-left flex flex-col justify-end h-32"
                onClick={() =>
                  navigate(
                    `/news/${gridNews[10 + rowIndex].title.replace(/\s+/g, "-").toLowerCase()}`
                  )
                }
              >
                <h3 className="text-lg font-semibold">{gridNews[10 + rowIndex].title}</h3>
                <p className="text-sm text-gray-500">
                  {gridNews[10 + rowIndex].publishedAt} • {gridNews[10 + rowIndex].readTime}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </main>

      {/* Ad Section */}
      <section className="py-8 px-6">
        <div className="w-full h-[40vh] lg:h-[45vh] overflow-hidden">
          <img
            src={adImage}
            alt="Advertisement"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </Layout>
  );
}

export default TopNews;
