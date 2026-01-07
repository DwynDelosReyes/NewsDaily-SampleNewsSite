import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../app/layout";
import { CardDemo } from "@/components/NewsCard";

// Sample Image imports for visualization purposes
import  homePageF1 from "@/asset/home/homePageF1.jpg";
import  homePageF2 from "@/asset/home/homePageF2.jpg";
import  homePageF3 from "@/asset/home/homePageF3.jpg";
// Import 18 Finance images
import financeImage1 from "@/asset/finance/finance1.jpg";
import financeImage2 from "@/asset/finance/finance2.jpg";
import financeImage3 from "@/asset/finance/finance3.jpg";
import financeImage4 from "@/asset/finance/finance4.jpg";
import financeImage5 from "@/asset/finance/finance5.jpg";
import financeImage6 from "@/asset/finance/finance6.jpg";
import financeImage7 from "@/asset/finance/finance7.jpg";
import financeImage8 from "@/asset/finance/finance8.jpg";
import financeImage9 from "@/asset/finance/finance9.jpg";
import financeImage10 from "@/asset/finance/finance10.jpg";
import financeImage11 from "@/asset/finance/finance11.jpg";
import financeImage12 from "@/asset/finance/finance12.jpg";
import financeImage13 from "@/asset/finance/finance13.jpg";
import financeImage14 from "@/asset/finance/finance14.jpg";
import financeImage15 from "@/asset/finance/finance15.jpg";
import financeImage16 from "@/asset/finance/finance16.jpg";
import financeImage17 from "@/asset/finance/finance17.jpg";
import financeImage18 from "@/asset/finance/finance18.jpg";
import adImage from "@/asset/adImage1.jpg"


// Main description for Finance
const categoryDescription =
  "Stay up to date with financial markets, economic developments, and investment trends shaping the global economy.";

// Subcategories and their content
const subCategories = [
  {
    title: "Market News",
    description:
      "Track stock markets, commodities, indices, and trading activity worldwide. Get insights on market movements, investor sentiment, and key economic indicators affecting portfolios.",
    heroImage: financeImage1,
    buttonText: "Explore Market News",
    content: [
      {
        image: homePageF1,
        title: "Stock Market Today",
        description: "Latest movements and trends across global markets.",
        publishedAt: "Dec 30, 2025",
        readTime: "4 min read",
      },
      {
        image: financeImage2,
        title: "Oil Prices Surge Amid Global Tensions",
        description:
          "Crude oil futures rise sharply due to geopolitical concerns and supply chain disruptions.",
        publishedAt: "Dec 31, 2025",
        readTime: "5 min read",
      },
      {
        image: financeImage3,
        title: "Gold Steady as Investors Seek Safe Haven",
        description:
          "Precious metals remain stable despite volatile stock markets, with safe-haven demand rising.",
        publishedAt: "Dec 30, 2025",
        readTime: "4 min read",
      },
      {
        image: financeImage4,
        title: "Asian Markets Rally on Trade Optimism",
        description:
          "Asian equities rebound following positive trade negotiations between major economies.",
        publishedAt: "Dec 29, 2025",
        readTime: "5 min read",
      },
      {
        image: financeImage5,
        title: "Volatility Index Shows Market Caution",
        description:
          "Investors keep a close eye on VIX as global events drive cautious trading strategies.",
        publishedAt: "Dec 28, 2025",
        readTime: "4 min read",
      },
      {
        image: financeImage6,
        title: "Tech Stocks Lead Nasdaq Growth",
        description:
          "Major tech companies drive Nasdaq higher as innovation and earnings reports beat expectations.",
        publishedAt: "Dec 27, 2025",
        readTime: "5 min read",
      },
    ],
  },
  {
    title: "Economic News",
    description:
      "Stay informed on global economic trends, policy changes, inflation reports, interest rates, and government initiatives that impact businesses and markets.",
    heroImage: financeImage7,
    buttonText: "Explore Economic News",
    content: [
      {
        image: homePageF2,
        title: "Cryptocurrency Insights",
        description: "Bitcoin and Ethereum show volatile trends this week.",
        publishedAt: "Dec 29, 2025",
        readTime: "5 min read",
      },
      {
        image: financeImage8,
        title: "US Job Market Shows Steady Growth",
        description:
          "Employment reports indicate continued expansion in key sectors, boosting consumer confidence.",
        publishedAt: "Dec 31, 2025",
        readTime: "4 min read",
      },
      {
        image: financeImage9,
        title: "China GDP Growth is Big",
        description:
          "Economic growth in China grows amid regulatory changes and international trade shifts.",
        publishedAt: "Dec 30, 2025",
        readTime: "5 min read",
      },
      {
        image: financeImage10,
        title: "Eurozone Inflation Remains Elevated",
        description:
          "Rising energy costs and supply chain pressures keep inflation above central bank targets.",
        publishedAt: "Dec 29, 2025",
        readTime: "4 min read",
      },
      {
        image: financeImage11,
        title: "Government Stimulus Boosts Infrastructure Spending",
        description:
          "New fiscal measures support job creation and investment in public infrastructure projects.",
        publishedAt: "Dec 28, 2025",
        readTime: "5 min read",
      },
      {
        image: financeImage12,
        title: "Global Trade Balance Shifts",
        description:
          "Export and import trends evolve as nations adapt to changing tariffs and economic conditions.",
        publishedAt: "Dec 27, 2025",
        readTime: "4 min read",
      },
    ],
  },
  {
    title: "Investing News",
    description:
      "Discover trends in investment strategies, venture capital, cryptocurrencies, mutual funds, and long-term wealth management. Stay informed on emerging opportunities in a dynamic financial landscape.",
    heroImage: financeImage13,
    buttonText: "Explore Investing News",
    content: [
      {
        image: homePageF3,
        title: "Investment Strategies",
        description: "Tips for navigating uncertain financial times from different financial experts.",
        publishedAt: "Dec 28, 2025",
        readTime: "6 min read",
      },
      {
        image: financeImage14,
        title: "Top Mutual Funds Outperform Market",
        description:
          "Leading funds deliver strong returns for investors amid steady market conditions.",
        publishedAt: "Dec 31, 2025",
        readTime: "4 min read",
      },
      {
        image: financeImage15,
        title: "Cryptocurrency Markets Volatile",
        description:
          "Bitcoin and altcoins experience sharp swings as regulatory news affects trading sentiment.",
        publishedAt: "Dec 30, 2025",
        readTime: "5 min read",
      },
      {
        image: financeImage16,
        title: "Dividend Stocks Gain Popularity",
        description:
          "Investors seek income-focused strategies as interest rates remain moderate.",
        publishedAt: "Dec 29, 2025",
        readTime: "4 min read",
      },
      {
        image: financeImage17,
        title: "Real Estate Investment Trusts See Growth",
        description:
          "REITs attract investors looking for steady returns and diversification opportunities.",
        publishedAt: "Dec 28, 2025",
        readTime: "5 min read",
      },
      {
        image: financeImage18,
        title: "ESG Investments Gain Traction",
        description:
          "Sustainable investing continues to grow as companies meet environmental and social standards.",
        publishedAt: "Dec 27, 2025",
        readTime: "4 min read",
      },
    ],
  },
];

function Finance() {
  const location = useLocation();

  // Scroll to section if state.scrollTo exists
  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (scrollToId) {
      const section = document.getElementById(scrollToId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <Layout>
      {/* Main Title */}
      <section id="Fincance" className="py-12 px-6 scroll-mt-10">
        <h1 className="font-serif text-5xl font-bold mt-8 mb-8" style={{ wordSpacing: '0.60rem' }}>Finance</h1>
        <p className="font-sans text-m tracking-[0.1em] uppercase">{categoryDescription}</p>
      </section>

      {/* Subcategories */}
      {subCategories.map((sub, idx) => (
        <section key={idx} id={sub.title} className="py-12 px-6 scroll-mt-10">
          {/* Hero Section as Card */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8 border rounded-lg bg-gradient-to-tr from-[#001124] to-[#011d3b] overflow-hidden" style={{ wordSpacing: '0.40rem' }}>
            <div className="w-[55%] h-[39vh]">
              <img
                src={sub.heroImage}
                alt={sub.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-5/12 flex flex-col justify-between p-6 bg-black/0">
              <h2 className="font-sans text-3xl text-left text-white font-bold mb-5">{sub.title}</h2>

              {/* Description container that expands to fill space */}
              <div className="flex-1 flex items-center">
                <p className="font-sans tracking-[0.1em] text-left font-light text-white mb-4">
                  {sub.description}
                </p>
              </div>

              <button
                onClick={() => window.location.href = "/news"} 
                className="px-4 py-2 bg-red-700 text-white border border-black font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-102 hover:cursor-pointer"
              >
                {sub.buttonText}
              </button>
            </div>
          </div>

          {/* News Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sub.content.map((item, index) => (
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
        </section>
      ))}

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

export default Finance;
