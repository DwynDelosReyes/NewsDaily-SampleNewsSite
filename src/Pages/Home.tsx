import { useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import Layout from "../app/layout";
import { CardDemo } from "@/components/NewsCard";

// Sample Image imports for visualization purposes
import  homePageTN1 from "@/asset/home/homePageTN1.jpg";
import  homePageTN2 from "@/asset/home/homePageTN2.jpg";

import  homePageG1 from "@/asset/home/homePageG1.jpg";
import  homePageG2 from "@/asset/home/homePageG2.jpg";
import  homePageG3 from "@/asset/home/homePageG3.jpg";

import  homePageF1 from "@/asset/home/homePageF1.jpg";
import  homePageF2 from "@/asset/home/homePageF2.jpg";
import  homePageF3 from "@/asset/home/homePageF3.jpg";

import  homePageS1 from "@/asset/home/homePageS1.jpg";
import  homePageS2 from "@/asset/home/homePageS2.jpg";
import  homePageS3 from "@/asset/home/homePageS3.jpg";

import  homePageC1 from "@/asset/home/homePageC1.jpg";
import  homePageC2 from "@/asset/home/homePageC2.jpg";
import  homePageC3 from "@/asset/home/homePageC3.jpg";

import  homePageT1 from "@/asset/home/homePageT1.jpg";
import  homePageT2 from "@/asset/home/homePageT2.jpg";
import  homePageT3 from "@/asset/home/homePageT3.jpg";

import otherImage1 from "@/asset/othernews/other1.jpg";
import otherImage2 from "@/asset/othernews/other2.jpg";
import otherImage3 from "@/asset/othernews/other3.jpg";
import otherImage4 from "@/asset/othernews/other4.jpg";
import otherImage5 from "@/asset/othernews/other5.jpg";
import otherImage6 from "@/asset/othernews/other6.jpg";
import otherImage7 from "@/asset/othernews/other7.jpg";
import otherImage8 from "@/asset/othernews/other8.jpg";
import adImage from "@/asset/adImage2.jpg"

import heroImage from "@/asset/heroImage.png"


// News sections mapped to main categories with content
const sections = [
  {
    // ========== Top News ==========
    title: "Top News",
    id: "top-news", 
    route: "/top-news",  
    content: [
      {
        image: homePageTN1,
        title: "Tech Companies to Join the Movement",
        description: "Emergence of AI advancement urged tech companies to join the movement for betterment. They intend to continue this program to improve millions of lives.",
        publishedAt: "Jan 1, 2026",
        readTime: "4 min read",
      },
      {
        image: homePageTN2,
        title: "5th Largest Media Conglomerate now SOLD",
        description: "Legacy Media Company known for multiple ventures has been sold for 192 dollars per share. Shareholders remain undecided on who to appoint as the next CEO.",
        publishedAt: "Jan 1, 2026",
        readTime: "3 min read",
      },
    ],
  },
  {
    // ========== Global Affairs ==========
    title: "Global Affairs",
    route: "/global-affairs",
    content: [
      {
        image: homePageG1,
        title: "UN Summit Highlights",
        description: "World leaders discuss climate change and international security.",
        publishedAt: "Dec 30, 2025",
        readTime: "6 min read",
      },
      {
        image: homePageG2,
        title: "Global Trade Update",
        description: "New trade agreements impact markets and international relations.",
        publishedAt: "Dec 29, 2025",
        readTime: "5 min read",
      },
      {
        image: homePageG3,
        title: "Geopolitical Tensions Rising",
        description: "Analysis of recent conflicts and their local and global effects.",
        publishedAt: "Dec 28, 2025",
        readTime: "7 min read",
      },
    ],
  },
  {
    // ========== Finance ==========
    title: "Finance",
    route: "/finance",
    content: [
      {
        image: homePageF1,
        title: "Stock Market Today",
        description: "Latest movements and trends across global markets.",
        publishedAt: "Dec 30, 2025",
        readTime: "4 min read",
      },
      {
        image: homePageF2,
        title: "Cryptocurrency Insights",
        description: "Bitcoin and Ethereum show volatile trends this week.",
        publishedAt: "Dec 29, 2025",
        readTime: "5 min read",
      },
      {
        image: homePageF3,
        title: "Investment Strategies",
        description: "Tips for navigating uncertain financial times from different financial experts.",
        publishedAt: "Dec 28, 2025",
        readTime: "6 min read",
      },
    ],
  },
  {
    // ========== Science and Innovation ==========
    title: "Science & Innovation",
    route: "/scienceinnovation",
    content: [
      {
        image: homePageS1,
        title: "AI Breakthrough",
        description: "Researchers develop AI that can predict more accurately.",
        publishedAt: "Dec 30, 2025",
        readTime: "5 min read",
      },
      {
        image: homePageS2,
        title: "Space Exploration Update",
        description: "New telescope discoveries reveal distant exoplanets.",
        publishedAt: "Dec 29, 2025",
        readTime: "6 min read",
      },
      {
        image: homePageS3,
        title: "Renewable Energy Innovations",
        description: "Cutting-edge solar technology promises higher efficiency.",
        publishedAt: "Dec 28, 2025",
        readTime: "4 min read",
      },
    ],
  },
  {
    // ========== Culture and Lifestyle ==========
    title: "Culture & Lifestyle",
    route: "/culturelifetyle",
    content: [
      {
        image: homePageC1,
        title: "Art Exhibit Spotlight",
        description: "Explore the latest trends in contemporary art.",
        publishedAt: "Dec 30, 2025",
        readTime: "3 min read",
      },
      {
        image: homePageC2,
        title: "Culinary Adventures",
        description: "Top chefs share their secrets to amazing dishes.",
        publishedAt: "Dec 29, 2025",
        readTime: "4 min read",
      },
      {
        image: homePageC3,
        title: "Lifestyle Trends 2025",
        description: "The latest in wellness, fashion, and home design.",
        publishedAt: "Dec 28, 2025",
        readTime: "5 min read",
      },
    ],
  },
  {
    // ========== Travel and Exploration ==========
    title: "Travel & Exploration",
    route: "/travelexploration",
    content: [
      {
        image: homePageT1,
        title: "Top Destinations This Winter",
        description: "Explore the best places to visit this season.",
        publishedAt: "Dec 30, 2025",
        readTime: "5 min read",
      },
      {
        image: homePageT2,
        title: "Travel Safety Tips",
        description: "Essential advice for travelers in 2025.",
        publishedAt: "Dec 29, 2025",
        readTime: "3 min read",
      },
      {
        image: homePageT3,
        title: "Hidden Gems Around the World",
        description: "Discover less-known but incredible travel spots.",
        publishedAt: "Dec 28, 2025",
        readTime: "6 min read",
      },
    ],
  },
];

// ========== Extra Other News cards ==========
const otherNews = [
  {
    image: otherImage1,
    title: "Tech Giants Merge",
    description: "A historic merger could reshape the global tech landscape.",
    publishedAt: "Dec 30, 2025",
    readTime: "5 min read",
  },
  {
    image: otherImage2,
    title: "Breakthrough in Medicine",
    description: "Scientists develop new treatments for rare diseases.",
    publishedAt: "Dec 30, 2025",
    readTime: "4 min read",
  },
  {
    image: otherImage3,
    title: "City Marathon Highlights",
    description: "Thousands of runners compete in the annual marathon.",
    publishedAt: "Dec 29, 2025",
    readTime: "3 min read",
  },
  {
    image: otherImage4,
    title: "Historic Landmark Restored",
    description: "Renovation preserves cultural heritage for future generations.",
    publishedAt: "Dec 29, 2025",
    readTime: "4 min read",
  },
  {
    image: otherImage5,
    title: "Innovative Startups to Watch",
    description: "A roundup of the most promising new businesses.",
    publishedAt: "Dec 28, 2025",
    readTime: "5 min read",
  },
  {
    image: otherImage6,
    title: "Global Wildlife Conservation Efforts",
    description: "New initiatives aim to protect endangered species.",
    publishedAt: "Dec 28, 2025",
    readTime: "6 min read",
  },
  {
    image: otherImage7,
    title: "Urban Gardening Trends",
    description: "How city dwellers are embracing sustainable gardening.",
    publishedAt: "Dec 27, 2025",
    readTime: "3 min read",
  },
  {
    image: otherImage8,
    title: "Cultural Festivals Around the World",
    description: "A guide to must-see events celebrating art and culture.",
    publishedAt: "Dec 27, 2025",
    readTime: "4 min read",
  },
];

function Home() {
  const location = useLocation()

  useEffect(() => {
    const targetId = location.state?.scrollTo
    if (!targetId) return

    let attempts = 0

    const tryScroll = () => {
      const section = document.getElementById(targetId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      } else if (attempts < 10) {
        attempts++
        requestAnimationFrame(tryScroll)
      }
    }

    tryScroll()
  }, [location])

  return (
    <Layout>
      {/* ========== Hero Section ========== */}
      <section className="p-6">
        <Link to="/top-news">
          <div className="border rounded-lg overflow-hidden cursor-pointer">
            <img
              src={heroImage}
              alt="Top News Hero"
              className="w-full h-75 object-cover"
            />
          </div>
        </Link>
      </section>

      {/* ========== Loop through main content sections ========== */}
      {sections.map((section, idx) => (
        <main
          id={section.id || section.title.toLowerCase().replace(/\s+/g, "-")}
          className="py-12 px-6 scroll-mt-16"
          key={idx}
        >
          <div className="flex justify-between items-center mb-6">
            <h2
              className="font-serif font-black text-2xl tracking-tight uppercase"
              style={{ wordSpacing: "0.40rem" }}
            >
              {section.title}
            </h2>

            {section.route && (
              <Link
                to={section.route}
                className="px-4 py-2 bg-[#01254a] text-white font-semibold rounded-full shadow-2xl transition-all duration-300 ease-in-out hover:bg-[#185594] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-104"
              >
                View All News
              </Link>
            )}
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-${
              section.title === "Top News" ? "2" : "3"
            } lg:grid-cols-${
              section.title === "Top News" ? "2" : "3"
            } gap-6`}
          >
            {section.content.map((item, index) => (
              <div
                key={index}
                className={
                  section.title === "Top News"
                    ? "flex [&>div]:h-[515px] [&>div]:w-full [&>div]:flex [&>div]:flex-col [&_img]:h-[350px] [&_img]:w-full [&_img]:object-cover [&_h3]:text-2xl [&_p]:text-base [&_p]:mt-2"
                    : ""
                }
              >
                <CardDemo
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  publishedAt={item.publishedAt}
                  readTime={item.readTime}
                />
              </div>
            ))}
          </div>
        </main>
      ))}

      {/* ========== Ad Section ========== */}
      <section className="py-8 px-6">
        <div className="w-full h-[40vh] lg:h-[45vh] overflow-hidden">
          <img
            src={adImage}
            alt="Advertisement"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ========== Other News Section ========== */}
      <main className="py-12 px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Other News</h2>
          <button className="px-4 py-2 bg-[#01254a] text-white font-semibold rounded-full shadow-2xl transition-all duration-300 ease-in-out hover:bg-[#185594] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-104">
            View All News
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherNews.map((item, index) => (
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
      </main>
    </Layout>
  )
}

export default Home
