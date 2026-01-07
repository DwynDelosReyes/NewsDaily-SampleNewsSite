import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../app/layout";
import { CardDemo } from "@/components/NewsCard";

// Sample Image imports for visualization purposes
import  homePageG1 from "@/asset/home/homePageG1.jpg";
import  homePageG2 from "@/asset/home/homePageG2.jpg";
import  homePageG3 from "@/asset/home/homePageG3.jpg";
// Import 18 Global Affairs images
import sampleImage1 from "@/asset/globalaffairs/globalaffair1.jpg";
import sampleImage2 from "@/asset/globalaffairs/globalaffair2.jpg";
import sampleImage3 from "@/asset/globalaffairs/globalaffair3.jpg";
import sampleImage4 from "@/asset/globalaffairs/globalaffair4.jpg";
import sampleImage5 from "@/asset/globalaffairs/globalaffair5.jpg";
import sampleImage6 from "@/asset/globalaffairs/globalaffair6.jpg";
import sampleImage7 from "@/asset/globalaffairs/globalaffair7.jpg";
import sampleImage8 from "@/asset/globalaffairs/globalaffair8.jpg";
import sampleImage9 from "@/asset/globalaffairs/globalaffair9.jpg";
import sampleImage10 from "@/asset/globalaffairs/globalaffair10.jpg";
import sampleImage11 from "@/asset/globalaffairs/globalaffair11.jpg";
import sampleImage12 from "@/asset/globalaffairs/globalaffair12.jpg";
import sampleImage13 from "@/asset/globalaffairs/globalaffair13.jpg";
import sampleImage14 from "@/asset/globalaffairs/globalaffair14.jpg";
import sampleImage15 from "@/asset/globalaffairs/globalaffair15.jpg";
import sampleImage16 from "@/asset/globalaffairs/globalaffair16.jpg";
import sampleImage17 from "@/asset/globalaffairs/globalaffair17.jpg";
import sampleImage18 from "@/asset/globalaffairs/globalaffair18.jpg";
import adImage from "@/asset/adImage2.jpg"


// Main description for Global Affairs
const categoryDescription =
  "Explore the latest global news, political developments, and economic trends that shape our world.";

// Subcategories and their content
const subCategories = [
  {
    title: "World News",
    description:
      "Stay informed with major world events, international relations, global policies, and important updates from around the world that impact communities, economies, and daily life everywhere.",
    heroImage: sampleImage1,
    buttonText: "Explore World News",
    content: [
      {
        image: homePageG1,
        title: "UN Summit Highlights",
        description: 
          "World leaders discuss climate change and international security.",
        publishedAt: "Dec 30, 2025",
        readTime: "6 min read",
      },
      {
        image: sampleImage2,
        title: "Global Economic Forum Highlights",
        description: "Insights from top economists on economic recovery and market trends worldwide.",
        publishedAt: "Dec 30, 2025",
        readTime: "4 min read",
      },
      {
        image: sampleImage3,
        title: "Refugee Crisis Updates",
        description:
          "International aid organizations respond to increasing global displacement due to conflicts.",
        publishedAt: "Dec 29, 2025",
        readTime: "6 min read",
      },
      {
        image: sampleImage4,
        title: "International Space Collaboration",
        description:
          "Nations collaborate on joint space exploration projects to advance scientific discovery.",
        publishedAt: "Dec 28, 2025",
        readTime: "4 min read",
      },
      {
        image: sampleImage5,
        title: "Global Health Initiatives Launched",
        description:
          "New programs focus on improving healthcare access in developing countries.",
        publishedAt: "Dec 27, 2025",
        readTime: "5 min read",
      },
      {
        image: sampleImage6,
        title: "Peace Talks Progress in a few Countries",
        description:
          "Diplomatic efforts show promise as leaders discuss ceasefire agreements.",
        publishedAt: "Dec 26, 2025",
        readTime: "6 min read",
      },
    ],
  },
  {
    title: "Political News",
    description:
      "Get the latest updates on political developments, national and international elections, government policies, and key decisions shaping the political landscape across the globe.",
    heroImage: sampleImage7,
    buttonText: "Explore Political News",
    content: [
      {
        image: homePageG2,
        title: "Geopolitical Tensions Rising",
        description: "Analysis of recent conflicts and their local and global effects.",
        publishedAt: "Dec 28, 2025",
        readTime: "7 min read",
      },
      {
        image: sampleImage8,
        title: "Policy Reforms Introduced",
        description:
          "Governments roll out new policies to address social and economic issues.",
        publishedAt: "Dec 30, 2025",
        readTime: "4 min read",
      },
      {
        image: sampleImage9,
        title: "Political Summit Held in Geneva",
        description:
          "Leaders convene to discuss international cooperation and conflict resolution.",
        publishedAt: "Dec 29, 2025",
        readTime: "6 min read",
      },
      {
        image: sampleImage10,
        title: "New Legislation on Cybersecurity",
        description:
          "Countries update cybersecurity laws to protect against emerging threats.",
        publishedAt: "Dec 28, 2025",
        readTime: "5 min read",
      },
      {
        image: sampleImage11,
        title: "Diplomatic Visits Strengthen Alliances",
        description:
          "Key leaders visit neighboring countries to bolster partnerships.",
        publishedAt: "Dec 27, 2025",
        readTime: "4 min read",
      },
      {
        image: sampleImage12,
        title: "International Treaties Signed",
        description:
          "New agreements focus on trade, environmental protection, and security measures.",
        publishedAt: "Dec 26, 2025",
        readTime: "6 min read",
      },
    ],
  },
  {
    title: "Business News",
    description:
      "Follow corporate developments, major mergers, market trends, economic shifts, financial news, and key insights into industries shaping businesses and global economies worldwide.",
    heroImage: sampleImage13,
    buttonText: "Explore Business News",
    content: [
      {
        image: homePageG3,
        title: "Global Trade Update",
        description: "New trade agreements impact markets and international relations.",
        publishedAt: "Dec 29, 2025",
        readTime: "5 min read",
      },
      {
        image: sampleImage14,
        title: "Tech Mergers Announced",
        description:
          "Leading tech companies merge to strengthen market presence and innovation.",
        publishedAt: "Dec 30, 2025",
        readTime: "4 min read",
      },
      {
        image: sampleImage15,
        title: "Startups to Watch in 2026",
        description:
          "Emerging companies show potential to disrupt markets and attract investors.",
        publishedAt: "Dec 29, 2025",
        readTime: "5 min read",
      },
      {
        image: sampleImage16,
        title: "International Trade Agreements",
        description:
          "New deals aim to enhance global trade and economic cooperation.",
        publishedAt: "Dec 28, 2025",
        readTime: "6 min read",
      },
      {
        image: sampleImage17,
        title: "Corporate Social Responsibility Initiatives",
        description:
          "Businesses launch programs to give back to communities and the environment.",
        publishedAt: "Dec 27, 2025",
        readTime: "4 min read",
      },
      {
        image: sampleImage18,
        title: "Financial Regulations Updated",
        description:
          "Governments implement new rules to ensure transparency in financial markets.",
        publishedAt: "Dec 26, 2025",
        readTime: "5 min read",
      },
    ],
  },
];

function GlobalAffairsPage() {
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
      <section id="Global Affairs" className="py-12 px-6 scroll-mt-10">
        <h1 className="font-serif text-5xl font-bold mt-8 mb-8" style={{ wordSpacing: '0.60rem' }}>Global Affairs</h1>
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

export default GlobalAffairsPage;
